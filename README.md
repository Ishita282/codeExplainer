# 🚀 Code Explainer

A full-stack web application that helps developers understand code instantly by generating clear, human-readable explanations.

---

## 📌 Overview

**Code Explainer** allows users to paste or write code and receive structured explanations. It is designed to help:

* Beginners understand complex code
* Developers debug faster
* Students learn concepts interactively

---

## ✨ Features

* 🧠 AI-Powered Code Explanation
* 💻 Interactive Code Editor
* 📜 History Tracking
* 🔐 Authentication (Login / Signup)
* 📊 Usage Tracking / Limits
* ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS

### Backend

* Node.js
* Next.js API Routes

### Database

* PostgreSQL
* Prisma ORM

### Authentication

* Clerk

---

## 📂 Project Structure

```bash
code-explainer/
│
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── signup/
│   └── api/
│
├── components/
│   ├── dashboard/
│   └── ui/
│
├── prisma/
│   └── schema.prisma
│
├── lib/
│
├── public/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/code-explainer.git
cd code-explainer
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/code-explainer"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
```

---

### 4. Setup database

```bash
npx prisma db push
```

---

### 5. Run the app

```bash
npm run dev
```

App will run at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧪 Usage

1. Login / Signup
2. Open Dashboard
3. Paste your code
4. Click **Explain**
5. View explanation instantly

---

## 📸 Screenshots

*Add screenshots here (dashboard, editor, output panel)*

---

## 🔒 Future Improvements

* 🌍 Multi-language support
* 🧠 Improved AI explanations
* 📂 Save & organize projects
* 🤝 Share explanations
* 📱 Mobile optimization

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo
# Create a branch
git checkout -b feature-name

# Commit changes
git commit -m "Add feature"

# Push to GitHub
git push origin feature-name
```

---

## 🙌 Acknowledgements

* OpenAI API (for code explanations)
* Clerk (authentication)
* Prisma (ORM)
