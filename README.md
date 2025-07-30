<img width="2940" height="1838" alt="CleanShot 2025-07-30 at 15 31 23@2x" src="https://github.com/user-attachments/assets/cb6c8ab7-b990-4d8c-b4f2-c9ed606101ce" />

# 📊 InsightBoard AI — Smart Dashboard Application

A full-stack AI-powered dashboard built for *InsightBoard AI*, a fictional productivity SaaS. This application allows users to:

•⁠  ⁠✍️ Submit meeting transcripts  
•⁠  ⁠✅ Generate actionable items using LLM  
•⁠  ⁠📈 Track and visualize task progress  
•⁠  ⁠🔐 Authenticate users and auto-tag tasks

---

## Flowchart

<img width="2940" height="1838" alt="CleanShot 2025-07-30 at 15 31 23@2x" src="https://kroki.io/mermaid/svg/eNp1Uk1vozAQvfdXzKm3qD8gUiU-AqVJquyS9oJyMGQEo4CN7GGrbNX_vrYhlEpdTmO_92bmPVNr0TdwjO_AfkHxalBDUFVoDBrIpKG64VAJfYYgO8Fq9QjhRzBwg5KpEkxKfq7vvDi0KCwgPHt6VMTCNKVv8Ub4flp_sV8U_6CIi52qST7kVMuhh4OocRLF4wLTwMifNkU-lB0x7BGZZA1HLaSpNPUMidLdJN24eQtoFN1GJkWQwUEr59v1WEGKHUmC3W4_NUhcgxQlaruosRk576JsETLGzsC91ZPSxITuYG2p1VHUxvdPi5hM34orHIW5GFAS5lROk53UM58-_BNkku2gig28Ezej6nNc5Mktshf6ApHq-hYZ4QFi9IWftaAl1No-Fs-V5hu6mJYVb2QG0dJfdPZrbf1b8wdCiBqhefI-kp8X5NFGeb2ZvlpVKPSs8jIzlLX_vUJRXVCe_aXP0lfu5jsvFixKYXAmbouDMmzXyn_tXGgvqOTpP-JEKxvaYko0V5u5Sucqm6vn7w39Q-esbBZ-Ie99OwaxddhvZE34Zwmn63_Lru-F" />


## ✅ Completed Levels

•⁠  ⁠*Level 1* — Core Features ✅  
•⁠  ⁠*Level 2* — Enhanced Features ✅  
•⁠  ⁠*Level 3* — Implemented Auto-Tagging & Authentication ✅

---

## ⚙️ Tech Stack

### 🧠 AI + Backend
•⁠  ⁠*LLM API: Google **Gemini*
•⁠  ⁠*Backend Framework*: [Hono](https://hono.dev/) (TypeScript)
•⁠  ⁠*ORM*: [Drizzle ORM](https://orm.drizzle.team/)
•⁠  ⁠*Database: **PostgreSQL* hosted on [Neon](https://neon.tech)

### 🖼️ Frontend
•⁠  ⁠*Framework*: [Next.js](https://nextjs.org/) 15 (App Router)
•⁠  ⁠*Language*: TypeScript
•⁠  ⁠*UI Kit*: [ShadCN](https://ui.shadcn.com/) + Tailwind CSS
•⁠  ⁠*Charts*: [Recharts](https://recharts.org/)

### ☁️ Hosting & Deployment
•⁠  ⁠*Frontend*: [Vercel](https://vercel.com)
•⁠  ⁠*Database*: [Neon PostgreSQL](https://neon.tech)

---

## 🚀 Features Implemented

### Level 1 – Core
•⁠  ⁠📝 Transcript submission form
•⁠  ⁠🔧 AI-powered action item generation using Gemini
•⁠  ⁠✅ Mark task complete / delete functionality
•⁠  ⁠🥧 Pie chart for progress visualization
•⁠  ⁠📱 Modern, responsive UI with Shadcn + Tailwind
•⁠  ⁠🌍 Deployed on Vercel with public access

### Level 2 – Enhancements
•⁠  ⁠🔍 Filter/sort by status and priority
•⁠  ⁠🧠 AI-generated priorities (High, Medium, Low)
•⁠  ⁠📊 Bar chart of tasks by priority
•⁠  ⁠🗃️ Persistent data with PostgreSQL + Drizzle ORM

### Level 3 – Advanced
•⁠  ⁠🔐 Basic authentication
•⁠  ⁠🏷️ AI-powered team auto-tagging (@Marketing, @Tech)
•⁠  ⁠🌐 Database hosted on *Neon*
<!-- - 🧪 (Optional) Testing (planned or partial) -->

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

🌍 [Hosted App Link](https://insight-ai-assignment.vercel.app)

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
