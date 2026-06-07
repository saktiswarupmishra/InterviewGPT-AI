# InterviewGPT AI

> AI-powered virtual interview simulator — the world's most realistic interview preparation platform.

## ✨ Features

- **8 Interview Modes** — Technical, Behavioral, HR, Coding, System Design, Campus Placement, FAANG Simulation, Custom Company
- **Multi-Agent AI Architecture** — 8 specialized AI agents powered by Google Gemini 2.5 Pro
- **Resume-Aware Questions** — Upload your resume for personalized interview preparation
- **Live Coding Arena** — In-browser code editor with 7+ language support
- **System Design Canvas** — Interactive architecture design interviews
- **Detailed Analytics** — Score tracking, skill heatmaps, progress over time
- **Career Coach** — 30/60/90-day learning roadmaps with curated resources
- **Emotion Analysis** — Webcam-based confidence and engagement tracking

## 🛠️ Tech Stack

### 🎨 Frontend

![React 19](https://img.shields.io/badge/REACT_19-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/TAILWIND_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Shadcn UI](https://img.shields.io/badge/SHADCN_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

### ⚙️ Backend

![Python](https://img.shields.io/badge/PYTHON-3776AB?style=for-the-badge&logo=python&logoColor=white) ![FastAPI](https://img.shields.io/badge/FASTAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white) ![MongoDB](https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/REDIS-DC382D?style=for-the-badge&logo=redis&logoColor=white)

### 🤖 AI Service

![Google Gemini](https://img.shields.io/badge/GOOGLE_GEMINI-8E75C2?style=for-the-badge&logo=googlegemini&logoColor=white) ![LangChain](https://img.shields.io/badge/LANGCHAIN-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white) ![LangGraph](https://img.shields.io/badge/LANGGRAPH-000000?style=for-the-badge&logo=langchain&logoColor=white) ![ChromaDB](https://img.shields.io/badge/CHROMADB-000000?style=for-the-badge)

### 🐳 DevOps

![Docker](https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Docker Compose](https://img.shields.io/badge/DOCKER_COMPOSE-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose (for MongoDB and Redis)

### 1. Clone & Install

```bash
# Clone the repository
git clone <repo-url>
cd "InterviewGPT AI"

# Frontend
cd frontend
npm install

# Backend
cd ../backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your API keys
```

### 2. Start Infrastructure

```bash
# From project root
docker-compose up -d
```

### 3. Start Development Servers

```bash
# Terminal 1 — Frontend
cd frontend
npm run dev

# Terminal 2 — Backend
cd backend
uvicorn main:app --reload --port 8000
```

### 4. Open in Browser

- Frontend: http://localhost:8768
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## 📁 Project Structure

```
InterviewGPT AI/
├── frontend/            # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── stores/      # Zustand state management
│   │   ├── services/    # API client
│   │   ├── types/       # TypeScript interfaces
│   │   └── lib/         # Utilities
│   └── ...
├── backend/             # FastAPI + Python
│   ├── app/
│   │   ├── api/v1/      # REST API routes
│   │   ├── agents/      # LangGraph AI agents
│   │   ├── core/        # Config, DB, Security
│   │   ├── models/      # Pydantic schemas
│   │   ├── rag/         # RAG pipeline
│   │   └── websocket/   # Real-time interview
│   ├── main.py          # App entry point
│   └── requirements.txt
├── docker-compose.yml   # MongoDB + Redis
└── README.md
```

## 📜 License

MIT
