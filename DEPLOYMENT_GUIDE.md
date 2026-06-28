# 🚀 Complete Server Deployment Guide for Print Complex

## Server Information
- **IP Address:** 185.221.155.55
- **Domain:** complexprint.ru
- **OS:** Ubuntu Server with Nginx

## 📂 Step 1: Upload Files to Server

### Method A: Using Git (Recommended)
```bash
# Connect to server
ssh root@185.221.155.55

# Create directory
mkdir -p /var/www/complexprint.ru
cd /var/www/complexprint.ru

# Clone your repository (replace with actual GitHub URL)
git clone https://github.com/YOUR_USERNAME/print-complex.git .

# Or if files are already on server, skip to Step 2
```

### Method B: Upload via SCP/SFTP
```bash
# From your local machine, upload all files
scp -r /path/to/print-complex/* root@185.221.155.55:/var/www/complexprint.ru/

# Or use FileZilla/WinSCP to upload files
```

## 🛠️ Step 2: Server Setup

### Install Required Software
```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 18.x (required for React)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install other required packages
apt install -y nginx python3 python3-pip python3-venv mongodb curl build-essential

# Verify installations
node --version  # Should show v18.x.x
npm --version   # Should show 9.x.x
nginx -v        # Should show nginx version
```

### Start MongoDB
```bash
systemctl start mongodb
systemctl enable mongodb
systemctl status mongodb  # Should show active (running)
```

## 📦 Step 3: Setup Frontend (React)

```bash
cd /var/www/complexprint.ru/frontend

# Install dependencies
npm install --legacy-peer-deps

# Update environment variables for production
echo 'REACT_APP_BACKEND_URL=http://complexprint.ru' > .env

# Build for production
npm run build

# Verify build folder exists
ls -la build/  # Should show index.html and static folder
```

## 🐍 Step 4: Setup Backend (Python/FastAPI)

```bash
cd /var/www/complexprint.ru/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Create production environment file
cat > .env << EOF
MONGO_URL=mongodb://localhost:27017/
DB_NAME=printcomplex

# EmailJS is used for frontend, these can be left as-is
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=angusyoung1794@gmail.com
EMAIL_PASSWORD=ifgeqscUC13579
EMAIL_FROM=angusyoung1794@gmail.com
EMAIL_TO=9104297686@outlook.com
EOF

# Test backend startup
python -m uvicorn server:app --host 127.0.0.1 --port 8001 &
sleep 5
curl http://127.0.0.1:8001/api/  # Should return {"message":"Print Complex API"}
kill %1  # Stop test server
```

## 🌐 Step 5: Configure Nginx

### Create Nginx Configuration
```bash
# Remove default config
rm -f /etc/nginx/sites-enabled/default

# Create new config
cat > /etc/nginx/sites-available/complexprint.ru << 'EOF'
server {
    listen 80;
    server_name complexprint.ru www.complexprint.ru 185.221.155.55;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Frontend (React build)
    location / {
        root /var/www/complexprint.ru/frontend/build;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Backend API
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 90;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate no_last_modified no_etag auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
}
EOF

# Enable site
ln -s /etc/nginx/sites-available/complexprint.ru /etc/nginx/sites-enabled/

# Test nginx config
nginx -t

# If test passes, restart nginx
systemctl restart nginx
systemctl status nginx  # Should show active (running)
```

## 🔧 Step 6: Create System Services

### Create Backend Service
```bash
cat > /etc/systemd/system/printcomplex-backend.service << 'EOF'
[Unit]
Description=Print Complex Backend API
After=network.target mongodb.service

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/var/www/complexprint.ru/backend
Environment=PATH=/var/www/complexprint.ru/backend/venv/bin
ExecStart=/var/www/complexprint.ru/backend/venv/bin/python -m uvicorn server:app --host 127.0.0.1 --port 8001
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

# Set correct ownership
chown -R www-data:www-data /var/www/complexprint.ru

# Enable and start service
systemctl daemon-reload
systemctl enable printcomplex-backend
systemctl start printcomplex-backend
systemctl status printcomplex-backend  # Should show active (running)
```

## 🔒 Step 7: Configure Firewall

```bash
# Allow SSH, HTTP, and HTTPS
ufw allow 22
ufw allow 80
ufw allow 443
ufw --force enable

# Check status
ufw status
```

## 📧 Step 8: Configure EmailJS

### Frontend Configuration
```bash
# Edit the EmailJS configuration file
nano /var/www/complexprint.ru/frontend/src/services/emailService.js

# Update these values after setting up EmailJS:
# SERVICE_ID: 'your_service_id_here'
# TEMPLATE_ID: 'your_template_id_here'  
# PUBLIC_KEY: 'your_public_key_here'

# After updating, rebuild frontend
cd /var/www/complexprint.ru/frontend
npm run build
```

### EmailJS Setup Steps:
1. Go to https://www.emailjs.com and create account
2. Add email service (Gmail or Outlook)
3. Create email template using the template in `/EMAILJS_SETUP.md`
4. Get Service ID, Template ID, and Public Key
5. Update the configuration in `emailService.js`
6. Rebuild frontend with `npm run build`

## 🧪 Step 9: Test Deployment

### Test Website Access
```bash
# Test from server
curl http://localhost/
curl http://localhost/api/

# Test from external
curl http://complexprint.ru/
curl http://185.221.155.55/
```

### Check Services
```bash
# Check all services are running
systemctl status nginx
systemctl status printcomplex-backend
systemctl status mongodb

# Check logs if there are issues
journalctl -u printcomplex-backend -f
journalctl -u nginx -f
tail -f /var/log/nginx/error.log
```

## 🚀 Step 10: SSL Certificate (Optional but Recommended)

```bash
# Install Certbot
snap install core; snap refresh core
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot

# Get SSL certificate
certbot --nginx -d complexprint.ru -d www.complexprint.ru

# Test auto-renewal
certbot renew --dry-run
```

## 📊 Step 11: Monitoring & Maintenance

### Setup Log Rotation
```bash
cat > /etc/logrotate.d/printcomplex << 'EOF'
/var/log/printcomplex/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
}
EOF
```

### Create Backup Script
```bash
cat > /root/backup-printcomplex.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/root/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup website files
tar -czf $BACKUP_DIR/printcomplex_files_$DATE.tar.gz /var/www/complexprint.ru

# Backup MongoDB
mongodump --db printcomplex --out $BACKUP_DIR/mongodb_$DATE

# Keep only last 7 days of backups
find $BACKUP_DIR -type f -mtime +7 -delete

echo "Backup completed: $DATE"
EOF

chmod +x /root/backup-printcomplex.sh

# Add to crontab for daily backups
echo "0 2 * * * /root/backup-printcomplex.sh" | crontab -
```

## ✅ Final Checklist

- [ ] Website loads at http://complexprint.ru
- [ ] Website loads at http://185.221.155.55
- [ ] All sections display correctly (Home, Services, Equipment, About, Contact)
- [ ] Repair request form displays
- [ ] EmailJS is configured with correct Service ID, Template ID, and Public Key
- [ ] Backend API responds at http://complexprint.ru/api/
- [ ] Services are running: nginx, printcomplex-backend, mongodb
- [ ] Firewall is configured
- [ ] SSL certificate is installed (optional)
- [ ] Backup script is created

## 🆘 Troubleshooting

### Website not loading
```bash
# Check nginx
systemctl status nginx
nginx -t

# Check file permissions
ls -la /var/www/complexprint.ru/frontend/build/
```

### API not working
```bash
# Check backend service
systemctl status printcomplex-backend
journalctl -u printcomplex-backend -f

# Check MongoDB
systemctl status mongodb
```

### Form not sending emails
1. Check browser console for JavaScript errors
2. Verify EmailJS configuration in `emailService.js`
3. Test EmailJS directly from their dashboard

## 🎉 Success!

Your Print Complex website should now be live at:
- **http://complexprint.ru**
- **http://185.221.155.55**

Visitors can access the website and submit repair requests which will be sent via EmailJS to 9104297686@outlook.com.

## 📞 Support

If you encounter any issues:
1. Check the logs: `journalctl -u printcomplex-backend -f`
2. Verify services are running: `systemctl status nginx printcomplex-backend mongodb`
3. Test individual components as outlined in the troubleshooting section