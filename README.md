<div align="center">

# 💍 Wedding RSVP Website  

**A beautiful, secure, and modern wedding website with a code-gated RSVP system**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Screenshots](#-screenshots) • [Getting Started](#-getting-started) • [Admin Dashboard](#-admin-dashboard) • [Deployment](#-deployment)

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js Badge">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React Badge">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript Badge">
  <img src="https://img.shields.io/badge/Firebase-10.0-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt="Firebase Badge">
  <img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind Badge">
</p>

</div>

---

## ✨ Features

### 🎨 Beautiful Design
- Elegant, modern UI with smooth Framer Motion animations  
- Fully responsive (mobile, tablet, desktop)  
- Clean typography with Google Fonts (Playfair Display, Inter)  
- Consistent styling using Tailwind CSS  

### 🔐 Secure RSVP System
- Code-gated authentication (one unique code per guest)  
- Bcrypt password hashing for secure invitation codes  
- Server-side validation with Firebase Admin SDK  
- Prevents duplicate submissions  

### 👥 Guest Management
- Add guests via scripts with unique invitation codes  
- Track RSVP status (Attending / Not Attending / Pending)  
- Collect personalized messages and timestamps  
- Export guest data to CSV  

### 📊 Admin Dashboard
- Real-time statistics (Total, Attending, Not Attending, Pending)  
- Searchable, sortable guest list  
- Password-protected admin login  
- Manage guest data (refresh, delete, export)  

### 📱 Multiple Pages
- **Home** — Hero section with countdown timer  
- **Our Story** — Relationship timeline  
- **Venue** — Location details and map directions  
- **Itinerary** — Wedding day schedule  
- **Registry** — Gift links and wishes  
- **RSVP** — Secure RSVP form  
- **Admin** — Dashboard for guest management  

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology |
|-----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Frontend** | React 19, TypeScript 5.0 |
| **Styling** | Tailwind CSS 3.4, Framer Motion |
| **Database** | Firebase Firestore |
| **Authentication** | Custom code-based system |
| **Deployment** | Vercel |
| **Password Hashing** | bcryptjs |

</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Hero Section
<img src="./image/hero.png" alt="Wedding Website Hero Section" width="800px" style="border-radius:12px; box-shadow:0 4px 16px rgba(0,0,0,0.25); margin:10px 0;"/>

### 🧑‍💼 Admin Dashboard
<img src="./image/admin-dashboard.png" alt="Admin Dashboard" width="800px" style="border-radius:12px; box-shadow:0 4px 16px rgba(0,0,0,0.25); margin:10px 0;"/>

</div>

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+  
- npm or yarn  
- Firebase account (free tier works)  
- Git installed  

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/terddyy/wedding-rsvp.git
cd wedding-rsvp

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local
Configuration
Create a .env.local file with your Firebase credentials:

env
Copy code
# Firebase Client Config
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin Config (Service Account)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY=your_private_key

# Admin Password
ADMIN_PASSWORD=your_secure_admin_password
Development
bash
Copy code
# Run development server
npm run dev

# Then open in browser:
# http://localhost:3000
📊 Admin Dashboard
Access the admin dashboard at /admin to:

View real-time RSVP stats

Search and filter guests

Export guest list to CSV

Manage guest data easily

Default Route: /admin
Authentication: Password-protected (set in .env.local)

🎯 Adding Guests
Use the provided scripts to generate and upload guest codes:

bash
Copy code
# Generate invitation codes
npm run generate-codes

# Add guests to database
npm run add-guests
🚢 Deployment
Deploy to Vercel
Push your code to GitHub

Import your repository in Vercel

Add your environment variables in the dashboard

Click Deploy 🚀

Or deploy using the CLI:

bash
Copy code
npm i -g vercel
vercel
📝 License
This project is open source under the MIT License.
You’re free to use and customize it for your own wedding or events 💖

👤 Author
terddyy

GitHub: @terddyy

