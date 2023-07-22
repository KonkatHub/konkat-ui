# Deployment manual

To deploy the documentation website, we use Docker Compose.

> Make sure Docker and Docker compose are installed on the server

Run the following:

```bash
sudo docker compose up &
```

## Certificates

We also use Docker Compose for HTTPS certificates.

First, you will need to add a new `nginx` configuration file in `nginx/conf/`.

The configuration should look like this (replace `[DOMAINE]` with your domain):

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name [DOMAIN];
    server_tokens off;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://[DOMAIN]$request_uri;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name [DOMAIN];

    ssl_certificate /etc/nginx/ssl/live/[DOMAIN]/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/live/[DOMAIN]/privkey.pem;

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://[DOMAIN]:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

To register a new certificate, run the following (replace `[DOMAINE]` with your domain):

```bash
sudo docker compose up &
sudo docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d [DOMAIN]
```

### Renew

To renew all certificates:

```bash
sudo docker compose run --rm certbot renew
```
