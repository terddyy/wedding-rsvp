<div align="center">

# 💍 Wedding RSVP Website  
**A beautiful, secure, and modern wedding website with a code-gated RSVP system**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Admin Dashboard](#-admin-dashboard) • [Deployment](#-deployment)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-10.0-orange?style=flat-square&logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

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
- Collect messages and timestamps  
- Export data to CSV  

### 📊 Admin Dashboard
- Real-time statistics (Total, Attending, Not Attending, Pending)  
- Searchable and filterable guest list  
- Password-protected access  
- Delete or refresh guest data  

### 📱 Multiple Pages
- **Home** — Hero section with countdown timer  
- **Our Story** — Relationship timeline  
- **Venue** — Location details and directions  
- **Itinerary** — Wedding day schedule  
- **Registry** — Gift links  
- **RSVP** — Secure RSVP form  
- **Admin** — Dashboard for guest management  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Frontend** | React 19, TypeScript 5.0 |
| **Styling** | Tailwind CSS 3.4, Framer Motion |
| **Database** | Firebase Firestore |
| **Authentication** | Custom code-based system |
| **Deployment** | Vercel |
| **Password Hashing** | bcryptjs |

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
