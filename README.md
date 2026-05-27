# Notes App

A modern full-stack Notes App built using:

- Python
- Flask
- PostgreSQL
- Docker
- Gunicorn

This project is designed for learning:

- Docker
- Docker Compose
- Jenkins
- Kubernetes
- Terraform
- CI/CD
- DevOps workflows

---

# Features

- Add Notes
- Delete Notes
- PostgreSQL Database
- Responsive UI
- Modern Dark Theme
- Docker Ready
- Production Ready Gunicorn Server

---

# Tech Stack

## Backend
- Python
- Flask
- SQLAlchemy

## Frontend
- HTML
- CSS
- JavaScript

## Database
- PostgreSQL

## DevOps
- Docker
- Gunicorn
- GitHub

---

# Project Structure

```bash
notes-app/
│
├── app/
│   ├── models/
│   ├── routes/
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   ├── templates/
│   └── __init__.py
│
├── .dockerignore
├── .gitignore
├── Dockerfile
├── requirements.txt
├── run.py
└── README.md
```

---

# Local Setup

## Clone Repository

```bash
git clone https://github.com/aman-k-rai/notes-app.git
```

## Move Into Project

```bash
cd notes-app
```

## Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

---

# Install Dependencies

```bash
pip install -r requirements.txt
```

---

# PostgreSQL Setup

Create database:

```sql
CREATE DATABASE notesdb;
```

---

# Environment Variables

Create `.env`

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/notesdb
```

If password contains `@` replace it with `%40`

Example:

```env
DATABASE_URL=postgresql://postgres:psql%40123@localhost:5432/notesdb
```

---

# Run Application

```bash
python run.py
```

Application runs on:

```bash
http://127.0.0.1:5000
```

---

# Docker Setup

## Build Docker Image

```bash
docker build -t notes-app .
```

## Run Docker Container

```bash
docker run -p 5000:5000 -e DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@host.docker.internal:5432/notesdb notes-app
```

---

# Docker Image Architecture

Frontend and backend are served from the SAME container.

This project intentionally avoids separate frontend/backend containers to keep deployment simple and lightweight for:

- Docker
- Kubernetes
- Jenkins
- Terraform
- CI/CD learning

PostgreSQL remains separate as industry standard.

---

# Future Improvements

- Edit Notes
- Authentication
- Search Notes
- Docker Compose
- Kubernetes Deployment
- Jenkins Pipeline
- Terraform Infrastructure
- GitHub Actions CI/CD

---

# Author

Aman Kumar Rai