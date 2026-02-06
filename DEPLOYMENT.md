# 🚀 Deployment Guide

This guide will help you deploy Math Master on an Ubuntu 24 Server with Nginx.

## Prerequisites

- Ubuntu 24.04 LTS Server
- Root or sudo access
- A domain name pointed to your server's IP address
- SSH access to your server

## Step-by-Step Deployment

### 1. Connect to Your Server

```bash
ssh root@your_server_ip
# Or if using a non-root user:
ssh username@your_server_ip
```

### 2. Update Your System

```bash
sudo apt update
sudo apt upgrade -y
```

### 3. Install Nginx

```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

Verify nginx is running:
```bash
sudo systemctl status nginx
```

### 4. Create Directory for Your Website

```bash
sudo mkdir -p /var/www/your-domain.com
sudo chown -R $USER:$USER /var/www/your-domain.com
sudo chmod -R 755 /var/www/your-domain.com
```

### 5. Upload Your Files to the Server

**Option A: Using SCP from your local machine**

```bash
# On Windows PowerShell:
scp -r "C:\Users\Yakov Donde\Desktop\multiplication game\*" username@your_server_ip:/var/www/your-domain.com/

# On Linux/Mac:
scp -r /path/to/multiplication-game/* username@your_server_ip:/var/www/your-domain.com/
```

**Option B: Using Git**

```bash
# On the server:
cd /var/www/your-domain.com
git clone https://github.com/yourusername/math-master.git .
```

**Option C: Using SFTP Client**

Use tools like FileZilla, WinSCP, or Cyberduck to upload files via GUI.

### 6. Configure Nginx

Create a new nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/your-domain.com
```

Paste the following configuration (replace `your-domain.com` with your actual domain):

```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/your-domain.com;
    index index.html;
    
    # Main location block
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Cache static assets for better performance
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Save and exit (Ctrl+X, then Y, then Enter).

### 7. Enable the Site

Create a symbolic link to enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
```

Test the nginx configuration:

```bash
sudo nginx -t
```

If the test is successful, restart nginx:

```bash
sudo systemctl restart nginx
```

### 8. Configure Firewall (if applicable)

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
sudo ufw status
```

### 9. Set Up SSL Certificate with Let's Encrypt (HTTPS)

Install Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Obtain and install SSL certificate:

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Follow the prompts:
- Enter your email address
- Agree to terms of service
- Choose whether to redirect HTTP to HTTPS (recommended: Yes)

Certbot will automatically modify your nginx configuration to use HTTPS.

### 10. Set Proper Permissions

```bash
sudo chown -R www-data:www-data /var/www/your-domain.com
sudo chmod -R 755 /var/www/your-domain.com
```

### 11. Enable Auto-Renewal for SSL Certificate

Test auto-renewal:

```bash
sudo certbot renew --dry-run
```

The systemd timer should already be enabled. Verify:

```bash
sudo systemctl status certbot.timer
```

## Performance Optimization (Optional)

### Enable Gzip Compression

Edit the nginx configuration:

```bash
sudo nano /etc/nginx/nginx.conf
```

Add or uncomment these lines in the `http` block:

```nginx
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
gzip_min_length 1000;
```

Restart nginx:

```bash
sudo systemctl restart nginx
```

### Enable Browser Caching

This is already included in the nginx configuration above in the cache static assets section.

## Verification

1. Open your browser and visit: `https://your-domain.com`
2. Verify the site loads correctly
3. Check all functionality works (operations, scoring, history, etc.)
4. Test on mobile devices for responsiveness

## Troubleshooting

### Check Nginx Status
```bash
sudo systemctl status nginx
```

### View Nginx Error Logs
```bash
sudo tail -f /var/log/nginx/error.log
```

### View Nginx Access Logs
```bash
sudo tail -f /var/log/nginx/access.log
```

### Restart Nginx
```bash
sudo systemctl restart nginx
```

### Check File Permissions
```bash
ls -la /var/www/your-domain.com
```

### Test Nginx Configuration
```bash
sudo nginx -t
```

## Updating Your Site

When you make changes to your files:

1. Upload new files to the server (using SCP, Git pull, or SFTP)
2. Clear browser cache or use hard refresh (Ctrl+F5)
3. No nginx restart needed for static content changes

## Automated Deployment Script

Save this as `deploy.sh` for quick setup:

```bash
#!/bin/bash

# Variables
DOMAIN="your-domain.com"
WEB_ROOT="/var/www/$DOMAIN"

echo "🚀 Starting deployment for Math Master..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install nginx
echo "⚙️ Installing Nginx..."
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Create web directory
echo "📁 Creating web directory..."
sudo mkdir -p $WEB_ROOT
sudo chown -R $USER:$USER $WEB_ROOT
sudo chmod -R 755 $WEB_ROOT

echo "📤 Please upload your files to $WEB_ROOT"
echo "Press Enter when files are uploaded..."
read

# Create nginx config
echo "🔧 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    
    server_name $DOMAIN www.$DOMAIN;
    
    root $WEB_ROOT;
    index index.html;
    
    location / {
        try_files \$uri \$uri/ =404;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)\$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable site
sudo ln -s /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# Install SSL
echo "🔒 Setting up SSL certificate..."
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN

# Set permissions
sudo chown -R www-data:www-data $WEB_ROOT
sudo chmod -R 755 $WEB_ROOT

echo "✅ Deployment complete!"
echo "🌐 Visit https://$DOMAIN to see your site"
```

Make it executable:
```bash
chmod +x deploy.sh
./deploy.sh
```

## Backup and Maintenance

### Create Backup
```bash
sudo tar -czf math-master-backup-$(date +%Y%m%d).tar.gz /var/www/your-domain.com
```

### Restore from Backup
```bash
sudo tar -xzf math-master-backup-YYYYMMDD.tar.gz -C /
```

## 🔒 Advanced Security Hardening

### 1. Update Nginx Security Headers

Edit your site configuration:

```bash
sudo nano /etc/nginx/sites-available/your-domain.com
```

Add these security headers inside the `server` block:

```nginx
server {
    # ... existing configuration ...
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self' https://cdn.tailwindcss.com https://fonts.googleapis.com https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
    
    # Hide Nginx version
    server_tokens off;
    
    # Prevent clickjacking
    add_header X-Permitted-Cross-Domain-Policies "none" always;
}
```

### 2. Hide Nginx Version Globally

Edit main nginx config:

```bash
sudo nano /etc/nginx/nginx.conf
```

Add in the `http` block:

```nginx
http {
    server_tokens off;
    more_clear_headers Server;  # Requires nginx-extras package
    
    # ... rest of config
}
```

### 3. Rate Limiting (Prevent DDoS)

Add to `/etc/nginx/nginx.conf` in the `http` block:

```nginx
# Define rate limiting zone
limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
limit_req_status 429;
```

Then in your site config:

```nginx
server {
    # Apply rate limiting
    limit_req zone=general burst=20 nodelay;
    
    # ... rest of config
}
```

### 4. Block Common Attack Patterns

Create a security configuration file:

```bash
sudo nano /etc/nginx/snippets/security.conf
```

Add these rules:

```nginx
# Block access to hidden files
location ~ /\. {
    deny all;
    access_log off;
    log_not_found off;
}

# Block access to backup files
location ~ ~$ {
    deny all;
}

# Block access to SQL dumps
location ~* \.(sql|gz|tar|zip)$ {
    deny all;
}

# Prevent image hotlinking (optional)
location ~ \.(gif|png|jpe?g)$ {
    valid_referers none blocked server_names;
    if ($invalid_referer) {
        return 403;
    }
}
```

Include this in your site config:

```nginx
server {
    # ... existing config ...
    
    include /etc/nginx/snippets/security.conf;
}
```

### 5. Configure Firewall (UFW)

```bash
# Allow only necessary ports
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
sudo ufw status verbose
```

### 6. Install and Configure Fail2Ban

Protect against brute force attacks:

```bash
sudo apt install fail2ban -y
```

Create nginx jail configuration:

```bash
sudo nano /etc/fail2ban/jail.local
```

Add:

```ini
[nginx-http-auth]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log

[nginx-noscript]
enabled = true
port = http,https
filter = nginx-noscript
logpath = /var/log/nginx/access.log
maxretry = 6

[nginx-badbots]
enabled = true
port = http,https
filter = nginx-badbots
logpath = /var/log/nginx/access.log
maxretry = 2

[nginx-noproxy]
enabled = true
port = http,https
filter = nginx-noproxy
logpath = /var/log/nginx/access.log
maxretry = 2

[nginx-limit-req]
enabled = true
port = http,https
filter = nginx-limit-req
logpath = /var/log/nginx/error.log
maxretry = 10
```

Restart fail2ban:

```bash
sudo systemctl restart fail2ban
sudo systemctl enable fail2ban
sudo fail2ban-client status
```

### 7. SSL/TLS Hardening

Improve SSL configuration in your site config:

```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    
    # SSL certificates (managed by Certbot)
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    
    # SSL hardening
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # HSTS (force HTTPS for 1 year)
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # ... rest of config
}
```

### 8. Limit Request Size (Prevent Large Uploads)

In your site config or `/etc/nginx/nginx.conf`:

```nginx
client_max_body_size 10M;
client_body_buffer_size 128k;
```

### 9. Disable Unused HTTP Methods

In your site config:

```nginx
server {
    # Allow only GET, POST, HEAD
    if ($request_method !~ ^(GET|POST|HEAD)$) {
        return 405;
    }
    
    # ... rest of config
}
```

### 10. Regular Security Updates

Create an update script:

```bash
sudo nano /usr/local/bin/security-update.sh
```

Add:

```bash
#!/bin/bash
apt update
apt upgrade -y
apt autoremove -y
certbot renew --quiet
systemctl restart nginx
fail2ban-client reload
```

Make executable and schedule:

```bash
sudo chmod +x /usr/local/bin/security-update.sh
sudo crontab -e
```

Add (runs weekly on Sunday at 3 AM):

```
0 3 * * 0 /usr/local/bin/security-update.sh > /var/log/security-update.log 2>&1
```

### 11. Monitor Access Logs

Set up log monitoring:

```bash
# Watch live access
sudo tail -f /var/log/nginx/access.log

# Find failed requests
sudo grep "404" /var/log/nginx/access.log

# Find suspicious activity
sudo grep -E "sql|union|select|insert|update|delete|drop" /var/log/nginx/access.log -i
```

### 12. Implement ModSecurity (Web Application Firewall)

For advanced protection:

```bash
sudo apt install libnginx-mod-security -y
sudo mkdir -p /etc/nginx/modsecurity
sudo cp /usr/share/modsecurity-crs/crs-setup.conf.example /etc/nginx/modsecurity/crs-setup.conf
```

### Security Checklist

- [ ] Server tokens disabled
- [ ] Security headers configured
- [ ] Rate limiting enabled
- [ ] Firewall (UFW) configured
- [ ] Fail2Ban installed and running
- [ ] SSL/TLS hardened
- [ ] HSTS enabled
- [ ] Regular updates scheduled
- [ ] Log monitoring set up
- [ ] Backup strategy in place
- [ ] SSH key authentication (disable password login)
- [ ] Non-root user created for deployment

### Test Your Security

- **SSL Test**: https://www.ssllabs.com/ssltest/
- **Security Headers**: https://securityheaders.com/
- **Mozilla Observatory**: https://observatory.mozilla.org/

## Additional Resources

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Ubuntu Server Guide](https://ubuntu.com/server/docs)
- [OWASP Nginx Security](https://cheatsheetseries.owasp.org/cheatsheets/Nginx_Security_Cheat_Sheet.html)

## Support

If you encounter issues during deployment:
1. Check the troubleshooting section above
2. Review nginx error logs
3. Verify DNS settings for your domain
4. Ensure firewall rules allow HTTP/HTTPS traffic

---

**Happy Deploying! 🎮✨**
