# 🚀 Развертывание сайта "Комплекс Принт" на VPS с FastPanel

## 📋 **Информация о сервере:**
- **VPS IP:** 185.221.155.55
- **Домен:** complexprint.ru
- **Панель:** FastPanel
- **Корневой каталог:** `/var/www/complexprint_user/data/www/complexprint.ru`

## 🎯 **Архитектура приложения:**
- **Frontend:** React (статичные файлы после сборки)
- **Backend:** FastAPI + Python (API сервер)
- **База данных:** MongoDB
- **Веб-сервер:** Nginx (через FastPanel)

---

## 📁 **Шаг 1: Подготовка файлов**

### **1.1 Сборка React приложения**
```bash
# На локальной машине или на сервере
cd /path/to/frontend
npm run build

# Это создаст папку /frontend/build/ со статичными файлами
```

### **1.2 Структура файлов для сервера:**
```
/var/www/complexprint_user/data/www/complexprint.ru/
├── public/                     # React статичные файлы
│   ├── index.html
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── manifest.json
│   └── images/
│       ├── printer-hp-allinone.svg
│       ├── printer-canon-office.svg
│       ├── printer-kyocera-professional.svg
│       └── printer-ricoh-color.svg
├── static/                     # CSS, JS файлы React
│   ├── css/
│   └── js/
├── api/                        # Символическая ссылка на backend
└── backend/                    # FastAPI приложение
    ├── server.py
    ├── email_service.py
    ├── requirements.txt
    └── .env
```

---

## 🔧 **Шаг 2: Загрузка файлов на сервер**

### **2.1 Подключение к серверу**
```bash
ssh root@185.221.155.55
```

### **2.2 Создание структуры каталогов**
```bash
cd /var/www/complexprint_user/data/www/complexprint.ru

# Очистить существующие файлы
rm -rf *

# Создать необходимые каталоги
mkdir -p backend
mkdir -p logs
```

### **2.3 Загрузка React файлов**
```bash
# Скопируйте содержимое /frontend/build/ в корневой каталог
# Содержимое должно быть:
/var/www/complexprint_user/data/www/complexprint.ru/
├── index.html
├── favicon.svg  
├── favicon.ico
├── manifest.json
├── images/
└── static/
```

### **2.4 Загрузка Backend файлов**
```bash
# В каталог /var/www/complexprint_user/data/www/complexprint.ru/backend/
# Загрузите файлы:
# - server.py
# - email_service.py (если используете)
# - requirements.txt
# - .env
```

---

## ⚙️ **Шаг 3: Настройка Backend**

### **3.1 Установка Python зависимостей**
```bash
cd /var/www/complexprint_user/data/www/complexprint.ru/backend

# Создать виртуальное окружение
python3 -m venv venv
source venv/bin/activate

# Установить зависимости
pip install -r requirements.txt
```

### **3.2 Создание requirements.txt**
```bash
# /var/www/complexprint_user/data/www/complexprint.ru/backend/requirements.txt
fastapi==0.110.1
uvicorn==0.25.0
python-dotenv>=1.0.1
pymongo==4.5.0
motor==3.3.1
pydantic>=2.6.4
email-validator>=2.2.0
python-multipart>=0.0.9
```

### **3.3 Создание .env файла**
```bash
# /var/www/complexprint_user/data/www/complexprint.ru/backend/.env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=complexprint

# Email настройки (если используете)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=angusyoung1794@gmail.com
EMAIL_PASSWORD=ifgeqscUC13579
EMAIL_FROM=angusyoung1794@gmail.com
EMAIL_TO=9104297686@outlook.com
```

### **3.4 Обновление server.py для продакшна**
```python
# /var/www/complexprint_user/data/www/complexprint.ru/backend/server.py
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from pathlib import Path

# Создать приложение
app = FastAPI()

# CORS для API запросов
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://complexprint.ru", "http://complexprint.ru"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API роутер
api_router = APIRouter(prefix="/api")

@api_router.get("/")
async def root():
    return {"message": "Комплекс Принт API"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "complexprint-api"}

# Подключить API роутер
app.include_router(api_router)

# Для разработки - в продакшне статичные файлы обслуживает Nginx
```

---

## 🌐 **Шаг 4: Настройка Nginx через FastPanel**

### **4.1 Конфигурация Nginx**
В FastPanel перейдите в настройки сайта complexprint.ru и добавьте:

```nginx
# Дополнительные настройки для сайта
location /api {
    proxy_pass http://127.0.0.1:8001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_read_timeout 90;
}

# Статичные файлы React
location / {
    root /var/www/complexprint_user/data/www/complexprint.ru;
    index index.html;
    try_files $uri $uri/ /index.html;
}

# Кэширование статичных ресурсов
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    root /var/www/complexprint_user/data/www/complexprint.ru;
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

---

## 🔄 **Шаг 5: Настройка автозапуска Backend**

### **5.1 Создание systemd сервиса**
```bash
# Создать файл сервиса
sudo nano /etc/systemd/system/complexprint-api.service
```

```ini
[Unit]
Description=Complex Print API
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/var/www/complexprint_user/data/www/complexprint.ru/backend
Environment=PATH=/var/www/complexprint_user/data/www/complexprint.ru/backend/venv/bin
ExecStart=/var/www/complexprint_user/data/www/complexprint.ru/backend/venv/bin/python -m uvicorn server:app --host 127.0.0.1 --port 8001
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

### **5.2 Запуск сервиса**
```bash
# Перезагрузить systemd
sudo systemctl daemon-reload

# Включить автозапуск
sudo systemctl enable complexprint-api

# Запустить сервис
sudo systemctl start complexprint-api

# Проверить статус
sudo systemctl status complexprint-api
```

---

## 🗄️ **Шаг 6: Установка MongoDB**

### **6.1 Установка MongoDB**
```bash
# Установить MongoDB
sudo apt update
sudo apt install mongodb

# Запустить MongoDB
sudo systemctl start mongodb
sudo systemctl enable mongodb

# Проверить статус
sudo systemctl status mongodb
```

---

## 📝 **Шаг 7: Обновление файлов для продакшна**

### **7.1 Обновление путей в React (если нужно)**
Если сборка была сделана правильно, файлы должны работать автоматически.

### **7.2 Проверка EmailJS настроек**
В файле `/app/frontend/src/services/emailService.js` убедитесь, что настройки EmailJS корректны или используется тестовый режим.

---

## 🧪 **Шаг 8: Тестирование**

### **8.1 Проверка frontend**
```bash
# Откройте в браузере
https://complexprint.ru
```

### **8.2 Проверка API**
```bash
# Проверить API
curl https://complexprint.ru/api/
curl https://complexprint.ru/api/health
```

### **8.3 Проверка логов**
```bash
# Логи API
sudo journalctl -u complexprint-api -f

# Логи Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

---

## 🔒 **Шаг 9: SSL сертификат**

### **9.1 Установка SSL через FastPanel**
В панели FastPanel включите SSL для домена complexprint.ru (обычно Let's Encrypt).

---

## 📋 **Чек-лист развертывания**

- [ ] **React файлы** скопированы в `/var/www/complexprint_user/data/www/complexprint.ru/`
- [ ] **Backend файлы** загружены в папку `backend/`
- [ ] **Python зависимости** установлены в виртуальном окружении
- [ ] **MongoDB** установлена и запущена
- [ ] **Systemd сервис** создан и запущен
- [ ] **Nginx конфигурация** обновлена через FastPanel
- [ ] **SSL сертификат** установлен
- [ ] **Сайт доступен** по адресу https://complexprint.ru
- [ ] **API работает** по адресу https://complexprint.ru/api/
- [ ] **Форма заявки** функционирует

---

## 🆘 **Решение проблем**

### **API не работает:**
```bash
# Проверить статус сервиса
sudo systemctl status complexprint-api

# Проверить логи
sudo journalctl -u complexprint-api -n 50

# Перезапустить сервис
sudo systemctl restart complexprint-api
```

### **Сайт не загружается:**
```bash
# Проверить права доступа
sudo chown -R www-data:www-data /var/www/complexprint_user/data/www/complexprint.ru

# Проверить Nginx
sudo nginx -t
sudo systemctl restart nginx
```

### **База данных не работает:**
```bash
# Проверить MongoDB
sudo systemctl status mongodb
sudo systemctl restart mongodb
```

---

## 🎉 **Результат**

После выполнения всех шагов у вас будет:

✅ **Рабочий сайт** "Комплекс Принт" по адресу https://complexprint.ru
✅ **API backend** для обработки заявок
✅ **База данных** для хранения заявок  
✅ **Email форма** для приема заявок
✅ **SSL сертификат** для безопасности
✅ **Автоматический запуск** всех сервисов

Сайт будет полностью функционален с русской локализацией, формой заявок и всеми обновленными контактными данными!