"""
Print Complex API
Полностью переработанный бэкенд с фиксами безопасности (Пакет А аудита):
  • logger объявлен наверху (не падает по NameError при первой ошибке email)
  • CORS читается из ALLOWED_ORIGINS, без allow_credentials с "*"
  • POST /api/repair-requests защищён rate-limit (через slowapi)
  • Pydantic-модели с max_length на всех полях
  • HTML-экранирование данных клиента в email-шаблоне (защита от XSS в почте оператора)
  • GET /api/repair-requests и GET /api/status защищены X-Admin-Token заголовком
  • datetime.now(timezone.utc) вместо deprecated datetime.utcnow()
  • Заголовки безопасности (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
"""
from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks, Header, Request, Depends, status
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import html
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, constr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded


# ── Configuration & logging (объявляем СРАЗУ, до использования) ─────────────
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ── Database ────────────────────────────────────────────────────────────────
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


# ── Constants ───────────────────────────────────────────────────────────────
ADMIN_TOKEN = os.getenv('ADMIN_TOKEN', '').strip()
RATE_LIMIT_REPAIR_REQUEST = os.getenv('RATE_LIMIT_REPAIR_REQUEST', '5/minute')

_allowed_origins_env = os.getenv('ALLOWED_ORIGINS', '').strip()
if _allowed_origins_env:
    ALLOWED_ORIGINS = [o.strip() for o in _allowed_origins_env.split(',') if o.strip()]
else:
    # Безопасный дефолт: только продовый домен
    ALLOWED_ORIGINS = [
        'https://complexprint.ru',
        'https://www.complexprint.ru',
    ]


# ── Email Service ───────────────────────────────────────────────────────────
class EmailService:
    """SMTP-нотификация менеджеру о новой заявке."""

    def __init__(self):
        self.smtp_server = os.getenv('EMAIL_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.getenv('EMAIL_PORT', '587'))
        self.email_user = os.getenv('EMAIL_USER')
        self.email_password = os.getenv('EMAIL_PASSWORD')
        self.email_from = os.getenv('EMAIL_FROM')
        self.email_to = os.getenv('EMAIL_TO')

    @staticmethod
    def _safe(value, default: str = 'N/A') -> str:
        """HTML-экранирование любых данных клиента перед вставкой в шаблон письма."""
        if value is None or value == '':
            return html.escape(default)
        return html.escape(str(value))

    def send_repair_request_email(self, form_data):
        """Отправка email с заявкой. Безопасно к XSS благодаря html.escape."""
        if not (self.email_user and self.email_password and self.email_from and self.email_to):
            logger.warning("Email service is not fully configured; skipping send")
            return False

        try:
            msg = MIMEMultipart()
            msg['From'] = self.email_from
            msg['To'] = self.email_to
            safe_name = self._safe(form_data.get('name'), 'Unknown')
            msg['Subject'] = f"New Repair Request from {safe_name}"

            html_body = self._create_email_template(form_data)
            msg.attach(MIMEText(html_body, 'html'))

            with smtplib.SMTP(self.smtp_server, self.smtp_port, timeout=15) as server:
                server.starttls()
                server.login(self.email_user, self.email_password)
                server.sendmail(self.email_from, self.email_to, msg.as_string())

            logger.info("Repair request email sent successfully")
            return True

        except Exception as e:
            logger.error(f"Failed to send repair request email: {e}")
            return False

    def _create_email_template(self, form_data):
        """HTML-шаблон. ВСЕ пользовательские данные пропускаются через html.escape."""
        urgency_colors = {'low': '#28a745', 'medium': '#ffc107', 'high': '#dc3545'}
        urgency_labels = {
            'low': 'Standard (3-5 days)',
            'medium': 'Priority (1-2 days)',
            'high': 'Urgent (Same day)',
        }

        urgency = form_data.get('urgency', 'medium')
        urgency_color = urgency_colors.get(urgency, '#ffc107')
        urgency_label = urgency_labels.get(urgency, 'Priority (1-2 days)')

        current_time = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

        description_section = ""
        raw_description = form_data.get('description')
        if raw_description:
            description_text = html.escape(str(raw_description)).replace('\n', '<br>')
            description_section = f"""
            <div class="info-section">
                <h3 style="color: #ec4899; margin-top: 0;">Issue Description</h3>
                <div class="issue-description">
                    {description_text}
                </div>
            </div>
            """

        # Все безопасно экранированные значения
        s_name = self._safe(form_data.get('name'))
        s_email = self._safe(form_data.get('email'))
        s_phone = self._safe(form_data.get('phone'))
        s_company = self._safe(form_data.get('company'), 'Not specified')
        s_brand = self._safe(form_data.get('equipment_brand'))
        s_model = self._safe(form_data.get('equipment_model'), 'Not specified')
        s_issue = html.escape(self._format_issue_type(form_data.get('issue', 'N/A')))

        return f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>New Repair Request - Print Complex</title>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #ec4899, #9333ea); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }}
                .logo {{ font-size: 24px; font-weight: bold; }}
                .content {{ background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }}
                .info-section {{ background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
                .info-row {{ display: flex; margin: 10px 0; }}
                .label {{ font-weight: bold; color: #555; min-width: 150px; }}
                .value {{ color: #333; }}
                .urgency {{ padding: 8px 16px; border-radius: 20px; color: white; font-weight: bold; display: inline-block; }}
                .issue-description {{ background: #f1f3f4; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #ec4899; }}
                .footer {{ text-align: center; margin-top: 30px; color: #666; font-size: 14px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">Print Complex</div>
                    <h2>New Equipment Repair Request</h2>
                    <p>Submitted on {current_time}</p>
                </div>

                <div class="content">
                    <div class="info-section">
                        <h3 style="color: #ec4899; margin-top: 0;">Customer Information</h3>
                        <div class="info-row"><span class="label">Full Name:</span><span class="value">{s_name}</span></div>
                        <div class="info-row"><span class="label">Email:</span><span class="value">{s_email}</span></div>
                        <div class="info-row"><span class="label">Phone:</span><span class="value">{s_phone}</span></div>
                        <div class="info-row"><span class="label">Company:</span><span class="value">{s_company}</span></div>
                    </div>

                    <div class="info-section">
                        <h3 style="color: #9333ea; margin-top: 0;">Equipment Details</h3>
                        <div class="info-row"><span class="label">Brand:</span><span class="value">{s_brand}</span></div>
                        <div class="info-row"><span class="label">Model:</span><span class="value">{s_model}</span></div>
                        <div class="info-row"><span class="label">Issue Type:</span><span class="value">{s_issue}</span></div>
                        <div class="info-row"><span class="label">Service Urgency:</span><span class="urgency" style="background-color: {urgency_color};">{urgency_label}</span></div>
                    </div>

                    {description_section}

                    <div class="info-section">
                        <h3 style="color: #9333ea; margin-top: 0;">Next Steps</h3>
                        <ul style="margin: 0; padding-left: 20px;">
                            <li>Contact customer within 24 hours to confirm details</li>
                            <li>Schedule service appointment at customer's convenience</li>
                            <li>Perform professional diagnosis and repair</li>
                            <li>Provide warranty coverage for service and parts</li>
                        </ul>
                    </div>
                </div>

                <div class="footer">
                    <p><strong>Print Complex</strong> - Professional Equipment Service</p>
                </div>
            </div>
        </body>
        </html>
        """

    def _format_issue_type(self, issue_value):
        issue_mapping = {
            'poor-print-quality': 'Poor Print Quality',
            'print-jams': 'Print Jams',
            'paper-wont-pickup': "Paper Won't Pick Up",
            'screen-wont-light': "Screen Won't Light Up",
            'error-code': 'Error Code Display',
            'toner-issues': 'Toner/Ink Issues',
            'connectivity-problems': 'Connectivity Problems',
            'other': 'Other Issue',
        }
        return issue_mapping.get(issue_value, issue_value)


email_service = EmailService()


# ── Security headers middleware ─────────────────────────────────────────────
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """Минимальный набор security-заголовков для всех ответов API."""

    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers.setdefault('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
        response.headers.setdefault('X-Content-Type-Options', 'nosniff')
        response.headers.setdefault('X-Frame-Options', 'DENY')
        response.headers.setdefault('Referrer-Policy', 'strict-origin-when-cross-origin')
        response.headers.setdefault('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
        return response


# ── Admin auth dependency ───────────────────────────────────────────────────
async def require_admin(x_admin_token: Optional[str] = Header(default=None, alias="X-Admin-Token")):
    """Защита админских GET-эндпоинтов. Без ADMIN_TOKEN в .env — всегда 503."""
    if not ADMIN_TOKEN:
        logger.warning("ADMIN_TOKEN is not configured; admin endpoints are disabled")
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                            detail="Admin endpoints disabled")
    if not x_admin_token or x_admin_token != ADMIN_TOKEN:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    return True


# ── Rate limiter ────────────────────────────────────────────────────────────
limiter = Limiter(key_func=get_remote_address)


# ── App & router ────────────────────────────────────────────────────────────
app = FastAPI(title="Print Complex API", version="1.1.0")
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "X-Admin-Token"],
    max_age=600,
)

api_router = APIRouter(prefix="/api")


# ── Models ──────────────────────────────────────────────────────────────────
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: constr(min_length=1, max_length=200)
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: constr(min_length=1, max_length=200)


class RepairRequest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: constr(min_length=1, max_length=200)
    email: EmailStr
    phone: constr(min_length=3, max_length=40)
    company: Optional[constr(max_length=200)] = None
    equipment_brand: constr(min_length=1, max_length=100)
    equipment_model: Optional[constr(max_length=100)] = None
    issue: constr(min_length=1, max_length=100)
    urgency: constr(min_length=1, max_length=20) = "medium"
    description: Optional[constr(max_length=5000)] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "submitted"


class RepairRequestCreate(BaseModel):
    name: constr(min_length=1, max_length=200)
    email: EmailStr
    phone: constr(min_length=3, max_length=40)
    company: Optional[constr(max_length=200)] = None
    equipmentBrand: constr(min_length=1, max_length=100)
    equipmentModel: Optional[constr(max_length=100)] = None
    issue: constr(min_length=1, max_length=100)
    urgency: constr(min_length=1, max_length=20) = "medium"
    description: Optional[constr(max_length=5000)] = None


class RepairRequestResponse(BaseModel):
    success: bool
    message: str
    request_id: str


# ── Routes ──────────────────────────────────────────────────────────────────
@api_router.get("/")
async def root():
    return {"message": "Print Complex API"}


@api_router.post("/status", response_model=StatusCheck)
@limiter.limit("30/minute")
async def create_status_check(request: Request, input: StatusCheckCreate):
    status_obj = StatusCheck(**input.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck], dependencies=[Depends(require_admin)])
async def get_status_checks():
    """Защищено X-Admin-Token. Доступно только с валидным админ-токеном."""
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**sc) for sc in status_checks]


@api_router.post("/repair-requests", response_model=RepairRequestResponse)
@limiter.limit(RATE_LIMIT_REPAIR_REQUEST)
async def submit_repair_request(
    request: Request,
    payload: RepairRequestCreate,
    background_tasks: BackgroundTasks,
):
    """Создание заявки. Лимит — env RATE_LIMIT_REPAIR_REQUEST (по умолчанию 5/min/IP)."""
    try:
        repair_request = RepairRequest(
            name=payload.name,
            email=payload.email,
            phone=payload.phone,
            company=payload.company,
            equipment_brand=payload.equipmentBrand,
            equipment_model=payload.equipmentModel,
            issue=payload.issue,
            urgency=payload.urgency,
            description=payload.description,
        )

        await db.repair_requests.insert_one(repair_request.dict())

        background_tasks.add_task(
            email_service.send_repair_request_email,
            repair_request.dict(),
        )

        # ВАЖНО: в логи НЕ пишем PII (имя/телефон/email)
        logger.info(f"Repair request created: id={repair_request.id} brand={repair_request.equipment_brand}")

        return RepairRequestResponse(
            success=True,
            message="Your repair request has been submitted successfully. We will contact you within 24 hours.",
            request_id=repair_request.id,
        )
    except Exception as e:
        logger.error(f"Error submitting repair request: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit repair request. Please try again.")


@api_router.get("/repair-requests", response_model=List[RepairRequest],
                dependencies=[Depends(require_admin)])
async def get_repair_requests():
    """ЗАЩИЩЁНО X-Admin-Token. Без валидного токена — 401.
    БЕЗ ТОКЕНА В .ENV — эндпоинт полностью отключён (503).
    Это закрывает критическую утечку персональных данных клиентов."""
    repair_requests = await db.repair_requests.find().to_list(1000)
    return [RepairRequest(**r) for r in repair_requests]


# Include router
app.include_router(api_router)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
