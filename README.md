Next Hire

Next Hire is a **full-featured Job Portal** built with the **MERN stack (MongoDB, Express, React, Node.js)**. It allows **employers** to post jobs and manage applications while **job seekers** can search for jobs, save favorites, and manage their profile.
## 📝 Screenshots
<p> <img src="/frontend/public/1.png"> </p>
---

## 📝 Features

### Job Seekers
- Secure signup and login (JWT authentication)
- Create and update profile, including avatar and resume
- Search and view job listings with detailed information
- Save favorite jobs
- Apply for jobs and track application status
- Personalized dashboard with recommended jobs

### Employers
- Secure signup and login
- Create, update, and manage job postings
- View applicants for each job
- Dashboard with analytics (total jobs posted, applications received, etc.)
- Public company profile page

### General
- Upload images for profile pictures and company logos
- JWT-protected routes
- Frontend form validation
- RESTful API integration
- Notifications using react-hot-toast
- Responsive UI with Tailwind CSS

---

## 🛠 Technologies

- **Frontend:** React, React Router, Tailwind CSS, Framer Motion, Lucide Icons, React Hot Toast
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **File Upload:** Multer
- **Helpers & Utilities:** Axios, dotenv, bcryptjs

---

## 📁 Project Structure
backend/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── config/
└── server.js

frontend/
├── src/
│ ├── components/
│ │ ├── cards/
│ │ ├── input/
│ │ └── layout/
│ ├── context/
│ ├── pages/
│ │ ├── Auth/
│ │ ├── JobSeeker/
│ │ ├── Employer/
│ │ └── LandingPage/
│ ├── routes/
│ └── utils/
└── App.jsx

---

## ⚙️ Installation & Setup

### Backend
1. Navigate to the backend folder:
cd backend

2. Install dependencies:
npm install

3. Create a .env file with your environment variables:
.env
PORT=8000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

4. Start the server:
npm run dev

### Frontend
1. Navigate to the frontend folder:
cd frontend

2. Install dependencies:
npm install

3. Start the app:
npm start
Open in browser: http://localhost:3000

🔗 Main API Routes
Auth

POST /api/auth/register — Sign up
POST /api/auth/login — Log in
GET /api/auth/me — Get current user profile

Jobs
GET /api/jobs — List all jobs
POST /api/jobs — Create job (employer)
PUT /api/jobs/:id — Update job
DELETE /api/jobs/:id — Delete job
PUT /api/jobs/:id/toggle-close — Open/Close job

Applications
POST /api/applications/:jobId — Apply to a job
GET /api/applications/my — My applications
GET /api/applications/job/:jobId — View applicants (employer)

Saved Jobs
POST /api/save-jobs/:jobId — Save a job
DELETE /api/save-jobs/:jobId — Remove saved job
GET /api/save-jobs/my — List saved jobs

📌 Notes
JWT used for protected routes
File uploads handled via Multer
Separate dashboards for employers and job seekers
Frontend validations for forms and file uploads
Axios configured with interceptors for token authentication

👨‍💻 Author
Bruno Lopes
