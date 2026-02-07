# Food Delivery Full-Stack Starter

This repository contains a minimal Spring Boot + React starter you can build on for a full food delivery product.

## Structure
- `backend/`: Spring Boot API with a simple health endpoint.
- `frontend/`: React + Vite UI that calls the API.

## Quick start

### Backend
```bash
cd backend
mvn spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` to see the UI, which calls `http://localhost:8080/api/health`.
