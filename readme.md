# SkillMatch AI

A GenAI-powered career preparation platform that helps job seekers analyze resumes, identify skill gaps, generate ATS-optimized resumes, and prepare for interviews using AI-driven insights.

---

## 🚀 Features

### 📄 Resume Analysis
- Upload and parse resumes in PDF format
- Extract skills and relevant information automatically
- Analyze candidate profiles against job requirements

### 🎯 Job Description Matching
- Compare resumes with job descriptions
- Identify missing skills and experience gaps
- Generate actionable recommendations

### 🤖 AI-Powered Interview Preparation
- Generate personalized interview questions
- Technical and behavioral interview preparation
- Tailored questions based on resume and job description

### 📝 ATS-Optimized Resume Generation
- Generate ATS-friendly resumes
- Improve keyword matching for job applications
- Create professional resume PDFs

### 🔐 Authentication & Security
- JWT-based authentication
- Secure user registration and login
- Token blacklisting implementation
- Protected routes

### 📑 PDF Generation
- Dynamic PDF creation using Puppeteer
- Download generated resumes instantly

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js

### Authentication
- JWT
- Token Blacklisting

### AI Integration
- Google Gemini API

### Database
- MongoDB
- Mongoose

### PDF Generation
- Puppeteer

---

## 📂 Project Structure

```bash
SkillMatch-AI/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── src/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/skillmatch-ai.git
cd SkillMatch-AI
```

### Backend Setup

```bash
cd Backend
npm install
npm start
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the Backend folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🔄 Workflow

1. User uploads a resume.
2. Resume content is parsed and analyzed.
3. User provides a target job description.
4. SkillMatch AI identifies matching and missing skills.
5. Gemini AI generates personalized interview questions.
6. ATS-optimized resume is generated.
7. User downloads the final PDF.

---

## 🌟 Future Enhancements

- AI-generated cover letters
- Resume scoring dashboard
- Mock interview simulation
- Job recommendation engine
- Multi-language support

---

## 👨‍💻 Author

**Mayank Chaudhary**  
B.Tech, Electrical Engineering  
National Institute of Technology Delhi

---

