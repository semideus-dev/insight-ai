# 🧠 InsightBoard AI Dashboard

<img width="2940" height="1838" alt="CleanShot 2025-07-30 at 15 31 23@2x" src="https://github.com/user-attachments/assets/cb6c8ab7-b990-4d8c-b4f2-c9ed606101ce" />


Smart dashboard powered by AI to turn meeting transcripts into actionable insights.

## ✨ Features

This project implements **all Level 1**, **all Level 2**, and selected **Level 3** features (authentication and auto-tagging) from the assignment.

### ✅ Level 1 — Core
- 📥 Submit meeting transcripts via a clean UI.
- 🤖 AI-generated action items using **Gemini** (Google's LLM).
- 🗂️ Interactive task list with mark-complete & delete.
- 📊 Pie chart showing task progress (pending vs. completed).
- 💅 Responsive modern UI (ShadCN + Tailwind CSS).
- 🚀 Deployed and publicly accessible.

### 🌟 Level 2 — Enhancements
- 🔍 Task filter by status, priority, or keyword.
- 🔄 Sort tasks by creation date, priority, or status.
- 📈 Bar chart for priority distribution.
- 🛢️ PostgreSQL database integration using **Drizzle ORM**.

### 🚀 Level 3 — Advanced (Partial)
- 🔐 Authentication using BetterAuth.
- 🏷️ AI-powered auto-tagging of tasks (e.g., `@Marketing`, `@Tech`).

---

## 🧰 Tech Stack

| Layer        | Tech Used                                  |
|--------------|---------------------------------------------|
| Frontend     | Next.js 15, TypeScript, ShadCN, Tailwind    |
| Backend      | Hono (Bun runtime compatible), TypeScript  |
| LLM API      | Gemini (Google AI)                          |
| Database     | PostgreSQL (hosted on **Neon**) + Drizzle   |
| Charts       | Recharts                                   |
| Auth         | BetterAuth                                 |
| Hosting      | Vercel (frontend), Vercel (backend)     |

---

## 🔗 Live Demo

🌍 [Hosted App Link](https://your-deployed-url.com)

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/insightboard-ai-dashboard.git
cd insightboard-ai-dashboard
```

### 2. Install Dependences
```bash
bun install
```

### 3. Add Environment Variables in `.env`
```env
BETTER_AUTH_SECRET=

NEXT_PUBLIC_APP_URL=

DATABASE_URL=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GEMINI_API_KEY=
```

### 3. Run the app locally
```bash
bun run dev
```

### Optional: Run Drizzle Studio locally
```bash
bun run db:studio
```
