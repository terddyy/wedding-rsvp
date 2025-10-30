# 💍 Wedding RSVP Website<div align="center"># Wedding RSVP Website



<div align="center">  <h1>💍 Wedding RSVP Website</h1>



**A beautiful, secure, and modern wedding website with code-gated RSVP system**  <p>A beautiful, secure, and modern wedding website with code-gated RSVP system</p>A beautiful, code-gated wedding website built with Next.js 15, React 19, Tailwind CSS, and Firebase.



[Features](#features) • [Demo](#demo) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Deployment](#deployment)  



![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)  <p>## Features

![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)    <a href="#features">Features</a> •

![Firebase](https://img.shields.io/badge/Firebase-10.0-orange?style=flat-square&logo=firebase)

![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)    <a href="jheifer.zentariph.com">Demo</a> •- ✨ Elegant, responsive design with smooth animations



</div>    <a href="#deployment">Deployment</a>- 📱 Fully mobile-responsive



---  </p>- 🔥 Firebase Firestore for data storage



## 📸 Screenshots- ⚡ Server-side rendering with Next.js 15



### Hero Section  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)- 🎯 Production-ready with proper SEO

![Wedding Website Hero](image/hero.png)

  ![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)

### Admin Dashboard

![Admin Dashboard](image/admin-dashboard.png)  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)## Pages



---  ![Firebase](https://img.shields.io/badge/Firebase-10.0-orange?style=flat-square&logo=firebase)



## ✨ Features  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)- **Home**: Hero section with countdown timer



### 🎨 **Beautiful Design**- **Our Story**: Timeline of the couple's journey

- Elegant, modern UI with smooth Framer Motion animations

- Fully responsive design (mobile, tablet, desktop)</div>- **Venue**: Location details and maps

- Clean typography with Google Fonts (Playfair Display, Inter)

- Tailwind CSS for consistent styling- **Itinerary**: Wedding day schedule



### 🔐 **Secure RSVP System**---- **Registry**: Gift registry links

- Code-gated authentication (one code per guest)

- Bcrypt password hashing for invitation codes- **RSVP**: Secure code-gated RSVP form

- Server-side validation and Firebase Admin SDK

- Prevents duplicate submissions## 📸 Screenshots



### 👥 **Guest Management**## Tech Stack

- Add guests via scripts with unique invitation codes

- Track RSVP status (Attending/Not Attending/Pending)### Hero Section

- Collect optional messages from guests

- View submission timestamps![Wedding Website Hero](image/hero.png)- **Frontend**: Next.js 15, React 19, TypeScript



### 📊 **Admin Dashboard**- **Styling**: Tailwind CSS, Framer Motion

- Real-time statistics (Total, Attending, Not Attending, Pending)

- Searchable guest list with all RSVP details### Admin Dashboard- **Database**: Firebase Firestore

- Export data to CSV for planning

- Delete guests functionality![Admin Dashboard](image/admin-dashboard.png)- **Auth**: Custom code-based authentication

- Password-protected access

- **Hosting**: Vercel (recommended)

### 📱 **Multiple Pages**

- **Home**: Hero section with countdown timer---

- **Our Story**: Timeline of your relationship

- **Venue**: Location details and directions## Getting Started

- **Itinerary**: Wedding day schedule

- **Registry**: Gift registry links## ✨ Features

- **RSVP**: Secure code-gated RSVP form

- **Admin**: Dashboard for managing guests### Prerequisites



---### 🎨 **Beautiful Design**



## 🛠️ Tech Stack- Elegant, modern UI with smooth Framer Motion animations- Node.js 18+ 



| Category | Technology |- Fully responsive design (mobile, tablet, desktop)- npm or yarn

|----------|------------|

| **Framework** | Next.js 15 (App Router) |- Clean typography with Google Fonts (Playfair Display, Inter)- Firebase project

| **Frontend** | React 19, TypeScript 5.0 |

| **Styling** | Tailwind CSS 3.4, Framer Motion |- Tailwind CSS for consistent styling- Vercel account (for deployment)

| **Database** | Firebase Firestore |

| **Authentication** | Custom code-based system |

| **Deployment** | Vercel |

| **Password Hashing** | bcryptjs |### 🔐 **Secure RSVP System**### Installation



---- Code-gated authentication (one code per guest)



## 🚀 Getting Started- Bcrypt password hashing for invitation codes1. Clone the repository:



### Prerequisites- Server-side validation and Firebase Admin SDK```bash



Before you begin, ensure you have:- Prevents duplicate submissionsgit clone <repository-url>

- **Node.js 18+** installed

- **npm** or **yarn** package managercd wedding-rsvp

- **Firebase account** (free tier works)

- **Git** for version control### 👥 **Guest Management**```



### Installation- Add guests via scripts with unique invitation codes



1. **Clone the repository**- Track RSVP status (Attending/Not Attending/Pending)2. Install dependencies:

```bash

git clone https://github.com/terddyy/wedding-rsvp.git- Collect optional messages from guests```bash

cd wedding-rsvp

```- View submission timestampsnpm install



2. **Install dependencies**```

```bash

npm install### 📊 **Admin Dashboard**

```

- Real-time statistics (Total, Attending, Not Attending, Pending)3. Create a `.env.local` file based on `.env.example`:

3. **Set up environment variables**

```bash- Searchable guest list with all RSVP details```bash

cp .env.example .env.local

```- Export data to CSV for planningcp .env.example .env.local



Edit `.env.local` with your configuration:- Delete guests functionality```

```env

# Firebase Configuration (Client-side)- Password-protected access

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com4. Configure your environment variables in `.env.local`:

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com### 📱 **Multiple Pages**   - Add your Firebase configuration

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id- **Home**: Hero section with countdown timer   - Add Firebase Admin SDK credentials



# Firebase Admin SDK (Server-side)- **Our Story**: Timeline of your relationship   - Set your wedding date and couple names

FIREBASE_ADMIN_PROJECT_ID=your_project_id

FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk@your_project.iam.gserviceaccount.com- **Venue**: Location details and directions

FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"

- **Itinerary**: Wedding day schedule### Firebase Setup

# Admin Dashboard

ADMIN_PASSWORD=your_secure_password- **Registry**: Gift registry links



# Wedding Details- **RSVP**: Secure code-gated RSVP form1. Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)

NEXT_PUBLIC_WEDDING_DATE=2026-06-15

NEXT_PUBLIC_COUPLE_NAMES=Your Names- **Admin**: Dashboard for managing guests

```

2. Enable Firestore Database

4. **Start development server**

```bash---

npm run dev

```3. Create a `guests` collection with the following structure:



Open [http://localhost:3000](http://localhost:3000) 🎉## 🛠️ Tech Stack```javascript



---{



## 🔥 Firebase Setup| Category | Technology |  id: "auto-generated",



### 1. Create Firebase Project|----------|------------|  name: "Guest Name",



1. Go to [Firebase Console](https://console.firebase.google.com)| **Framework** | Next.js 15 (App Router) |  code_hash: "hashed-code",

2. Click "Add Project" and follow the wizard

3. Once created, click the **web icon** (`</>`) to register your app| **Frontend** | React 19, TypeScript 5.0 |  rsvp_status: "pending",



### 2. Enable Firestore Database| **Styling** | Tailwind CSS 3.4, Framer Motion |  plus_one: "",



1. In Firebase Console, go to **Firestore Database**| **Database** | Firebase Firestore |  message: "",

2. Click "Create database"

3. Choose **Production mode**| **Authentication** | Custom code-based system |  used: false,

4. Select your preferred region

5. Click "Enable"| **Deployment** | Vercel |  submitted_at: null



### 3. Set Security Rules| **Password Hashing** | bcryptjs |}



Go to **Firestore → Rules** and add:```



```javascript---

rules_version = '2';

service cloud.firestore {4. Add Firestore security rules:

  match /databases/{database}/documents {

    match /guests/{guestId} {## 🚀 Getting Started```javascript

      allow read, write: if false; // Only server-side access via Admin SDK

    }rules_version = '2';

  }

}### Prerequisitesservice cloud.firestore {

```

  match /databases/{database}/documents {

### 4. Get Admin SDK Credentials

Before you begin, ensure you have:    match /guests/{guestId} {

1. Go to **Project Settings → Service Accounts**

2. Click **"Generate new private key"**- **Node.js 18+** installed      allow read, write: if false; // Only server-side access

3. Download the JSON file

4. Add credentials to your `.env.local` file- **npm** or **yarn** package manager    }



---- **Firebase account** (free tier works)  }



## 👥 Adding Guests- **Git** for version control}



### Method 1: Using the Script (Recommended)```



1. **Edit** `scripts/add-guests.ts`:### Installation



```typescript5. Download your service account key:

const guests = [

  { name: 'Alice Smith', code: 'ALICE2026' },1. **Clone the repository**   - Go to Project Settings > Service Accounts

  { name: 'Bob Johnson', code: 'BOB2026' },

  { name: 'Charlie Brown', code: 'CHARLIE2026' },```bash   - Generate new private key

  // Add more guests...

];git clone https://github.com/yourusername/wedding-rsvp.git   - Add the credentials to your `.env.local`

```

cd wedding-rsvp

2. **Run the script**:

```bash```### Adding Guests

npx tsx scripts/add-guests.ts

```



### Method 2: Firebase Console2. **Install dependencies**You can add guests programmatically using the Firebase Admin SDK. Create a script to hash codes and add guests:



Manually add documents to the `guests` collection with:```bash

```json

{npm install```javascript

  "name": "Guest Name",

  "code_hash": "hashed_code",```import { hashCode } from './lib/utils';

  "rsvp_status": "pending",

  "message": "",import { adminDb } from './lib/firebase/adminApp';

  "used": false,

  "submitted_at": null3. **Set up environment variables**

}

``````bashasync function addGuest(name, code) {



---cp .env.example .env.local  const code_hash = await hashCode(code);



## 📊 Admin Dashboard```  await adminDb.collection('guests').add({



### Accessing Admin Panel    name,



1. Navigate to `/admin` (e.g., `http://localhost:3000/admin`)Edit `.env.local` with your configuration:    code_hash,

2. Enter your admin password (from `.env.local`)

3. View real-time RSVP statistics and guest list```env    rsvp_status: 'pending',



### Features# Firebase Configuration (Client-side)    used: false,



- **📈 Statistics Cards**: Total, Attending, Not Attending, PendingNEXT_PUBLIC_FIREBASE_API_KEY=your_api_key  });

- **📋 Guest List**: View all guests with their RSVP status

- **📊 Export CSV**: Download all data for Excel/SheetsNEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com}

- **🗑️ Delete Guests**: Remove guests with confirmation

- **🔄 Refresh**: Get latest data from FirebaseNEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id



### SecurityNEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com// Example usage



- Password-protected via environment variableNEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_idaddGuest('John Doe', 'ABC12345');

- Server-side API with authentication

- Firebase Admin SDK for secure database accessNEXT_PUBLIC_FIREBASE_APP_ID=your_app_id```



---



## 🎨 Customization# Firebase Admin SDK (Server-side)### Development



### Update Wedding DetailsFIREBASE_ADMIN_PROJECT_ID=your_project_id



Edit `lib/constants.ts`:FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk@your_project.iam.gserviceaccount.comRun the development server:



```typescriptFIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"

export const WEDDING_DATE = '2026-06-15';

export const COUPLE_NAMES = 'Sarah & Michael';```bash



export const VENUE = {# Admin Dashboardnpm run dev

  name: 'The Grand Estate',

  address: '123 Wedding Lane',ADMIN_PASSWORD=your_secure_password```

  city: 'San Francisco',

  // ...

};

# Wedding DetailsOpen [http://localhost:3000](http://localhost:3000) in your browser.

export const ITINERARY = [

  { time: '3:00 PM', title: 'Guest Arrival', /* ... */ },NEXT_PUBLIC_WEDDING_DATE=2026-06-15

  // Add your events...

];NEXT_PUBLIC_COUPLE_NAMES=Your Names### Building for Production

```

```

### Change Colors

```bash

Edit `tailwind.config.ts`:

4. **Start development server**npm run build

```typescript

colors: {```bashnpm start

  primary: {

    50: '#fef2f2',npm run dev```

    // Your primary color shades

  },```

  secondary: {

    // Your secondary color shades## Deployment

  }

}Open [http://localhost:3000](http://localhost:3000) 🎉

```

### Deploy to Vercel

### Replace Images

---

Update image URLs in:

- `app/page.tsx` - Hero section1. Push your code to GitHub

- `lib/constants.ts` - Story timeline photos

- `app/venue/page.tsx` - Venue images## 🔥 Firebase Setup



---2. Import your repository in Vercel



## 🚢 Deployment### 1. Create Firebase Project



### Deploy to Vercel (Recommended)3. Configure environment variables in Vercel dashboard



1. **Push to GitHub**1. Go to [Firebase Console](https://console.firebase.google.com)

```bash

git add .2. Click "Add Project" and follow the wizard4. Deploy!

git commit -m "Ready for deployment"

git push origin main3. Once created, click the **web icon** (`</>`) to register your app

```

The app will automatically deploy on every push to your main branch.

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)### 2. Enable Firestore Database

   - Click "New Project"

   - Import your GitHub repository### Environment Variables



3. **Add Environment Variables**1. In Firebase Console, go to **Firestore Database**

   - In Vercel dashboard, go to Settings → Environment Variables

   - Add all variables from your `.env.local`2. Click "Create database"Make sure to add all environment variables from `.env.example` to your Vercel project settings.



4. **Deploy** 🚀3. Choose **Production mode**

   - Vercel will automatically build and deploy

   - Get your production URL4. Select your preferred region## Customization

   - Auto-deploys on every push to main

5. Click "Enable"

### Other Hosting Options

### Colors

- **Netlify**: Similar process, import from Git

- **AWS Amplify**: Connect GitHub repo### 3. Set Security Rules

- **Self-hosted**: Build with `npm run build`, serve with `npm start`

Edit `tailwind.config.ts` to customize the color palette:

---

Go to **Firestore → Rules** and add:- `primary`: Main wedding color

## 📁 Project Structure

- `secondary`: Secondary accent

```

wedding-rsvp/```javascript- `accent`: Highlighted elements

├── app/                      # Next.js App Router

│   ├── admin/               # Admin dashboardrules_version = '2';

│   ├── api/                 # API routes

│   │   ├── admin/          # Admin endpoints (guests)service cloud.firestore {### Content

│   │   ├── auth/           # Authentication (code validation)

│   │   └── rsvp/           # RSVP submission  match /databases/{database}/documents {

│   ├── itinerary/          # Wedding schedule

│   ├── registry/           # Gift registries    match /guests/{guestId} {Update constants in `lib/constants.ts`:

│   ├── rsvp/               # RSVP pages

│   │   ├── confirmation/   # Success page      allow read, write: if false; // Only server-side access via Admin SDK- Wedding date

│   │   └── form/           # RSVP form

│   ├── story/              # Couple's story timeline    }- Couple names

│   ├── venue/              # Venue details

│   ├── globals.css         # Global styles  }- Venue information

│   ├── layout.tsx          # Root layout

│   └── page.tsx            # Home page}- Itinerary events

├── components/              # React components

│   ├── ui/                 # Reusable UI components```- Registry links

│   │   ├── Button.tsx

│   │   ├── Input.tsx- Story milestones

│   │   ├── PageSection.tsx

│   │   └── Textarea.tsx### 4. Get Admin SDK Credentials

│   ├── Footer.tsx          # Site footer

│   └── Navigation.tsx      # Navigation bar### Images

├── lib/                     # Utilities

│   ├── firebase/1. Go to **Project Settings → Service Accounts**

│   │   ├── adminApp.ts     # Firebase Admin SDK

│   │   └── clientApp.ts    # Firebase Client SDK2. Click **"Generate new private key"**Replace placeholder images from Unsplash with your own photos. Update image URLs in:

│   ├── constants.ts        # App configuration

│   └── utils.ts            # Helper functions3. Download the JSON file- `app/page.tsx` (Home)

├── scripts/                 # Utility scripts

│   └── add-guests.ts       # Add guests to database4. Add credentials to your `.env.local` file- `app/story/page.tsx` (Story timeline)

├── types/                   # TypeScript definitions

│   └── index.ts- `app/venue/page.tsx` (Venue)

├── image/                   # Screenshots

│   ├── admin-dashboard.png---

│   └── hero.png

└── public/                  # Static assets## Project Structure

```

## 👥 Adding Guests

---

```

## 🔒 Security Features

### Method 1: Using the Script (Recommended)wedding-rsvp/

- ✅ **Bcrypt hashing** for invitation codes

- ✅ **Server-side validation** for all RSVP submissions├── app/                    # Next.js 15 app directory

- ✅ **Firebase Admin SDK** for secure database operations

- ✅ **Firestore security rules** prevent direct client access1. **Edit** `scripts/add-guests.ts`:│   ├── api/               # API routes

- ✅ **Password-protected admin** dashboard

- ✅ **Environment variables** for sensitive data│   ├── rsvp/              # RSVP pages

- ✅ **One-time use codes** prevent duplicate submissions

```typescript│   ├── story/             # Story page

---

const guests = [│   ├── venue/             # Venue page

## 🎯 Workflow

  { name: 'Alice Smith', code: 'ALICE2026' },│   ├── itinerary/         # Itinerary page

### 1. Setup

- Configure Firebase and environment variables  { name: 'Bob Johnson', code: 'BOB2026' },│   ├── registry/          # Registry page

- Customize wedding details and colors

- Replace placeholder images  { name: 'Charlie Brown', code: 'CHARLIE2026' },│   ├── layout.tsx         # Root layout



### 2. Add Guests  // Add more guests...│   ├── page.tsx           # Home page

- Create unique codes for each guest

- Run `add-guests.ts` script];│   └── globals.css        # Global styles

- Codes are securely hashed in database

```├── components/            # React components

### 3. Send Invitations

- Include website URL and unique code│   ├── ui/               # Reusable UI components

- Guests visit site and enter their code

- Form validates and displays personalized welcome2. **Run the script**:│   ├── Navigation.tsx    # Navigation bar



### 4. Monitor RSVPs```bash│   └── Footer.tsx        # Footer

- Check admin dashboard regularly

- Export CSV for vendor coordinationnpx tsx scripts/add-guests.ts├── lib/                  # Utility functions

- Track pending guests for follow-up

```│   ├── firebase/         # Firebase configuration

### 5. Wedding Day

- Export final guest list│   ├── constants.ts      # App constants

- Print for day-of coordination

- Celebrate! 🎉### Method 2: Firebase Console│   └── utils.ts          # Helper functions



---├── types/                # TypeScript types



## 💡 Pro TipsManually add documents to the `guests` collection with:└── public/               # Static assets



- **Backup your data**: Export CSV regularly```json```

- **Test codes**: Verify invitation codes work before sending

- **Mobile-first**: Most guests will RSVP on their phones{

- **Clear codes**: Use memorable codes (names + year)

- **Follow up**: Use pending list to send reminders  "name": "Guest Name",## Security

- **Customize**: Replace all placeholder images with your photos

  "code_hash": "hashed_code",

---

  "rsvp_status": "pending",- Codes are hashed before storage using bcrypt

## 🐛 Troubleshooting

  "message": "",- Server-side validation for all RSVP submissions

### Build Errors

```bash  "used": false,- HTTP-only sessions for authenticated users

# Clear cache and reinstall

rm -rf .next node_modules  "submitted_at": null- Rate limiting recommended for production

npm install

npm run build}- Firestore security rules prevent direct client access

```

```

### Firebase Issues

- Check that Firestore rules are set correctly## Performance

- Verify Admin SDK credentials in `.env.local`

- Ensure Firebase billing is enabled (Firestore requires it)---



### Admin Dashboard Not Loading- Server-side rendering for fast initial loads

- Check `ADMIN_PASSWORD` is set in `.env.local`

- Verify you're using correct password## 📊 Admin Dashboard- Image optimization with Next.js Image component

- Check browser console for errors

- Code splitting and lazy loading

---

### Accessing Admin Panel- Tailwind CSS for minimal bundle size

## 📄 License



MIT License - Feel free to use this for your own wedding!

1. Navigate to `/admin` (e.g., `http://localhost:3000/admin`)## Accessibility

---

2. Enter your admin password (from `.env.local`)

## 🙏 Acknowledgments

3. View real-time RSVP statistics and guest list- Semantic HTML structure

- **Next.js** - The React Framework

- **Firebase** - Backend infrastructure- ARIA labels and roles

- **Tailwind CSS** - Styling framework

- **Framer Motion** - Animation library### Features- Keyboard navigation support

- **Vercel** - Hosting platform

- Readable color contrast

---

- **📈 Statistics Cards**: Total, Attending, Not Attending, Pending- Focus states for interactive elements

## 💖 Made With Love

- **📋 Guest List**: View all guests with their RSVP status

Built with modern web technologies for couples who want a beautiful, functional wedding website.

- **📊 Export CSV**: Download all data for Excel/Sheets## Browser Support

Perfect for:

- Tech-savvy couples- **🗑️ Delete Guests**: Remove guests with confirmation

- DIY wedding websites

- Small to medium weddings (any size!)- **🔄 Refresh**: Get latest data from Firebase- Chrome (latest)

- Developers learning Next.js

- Firefox (latest)

---

### Security- Safari (latest)

<div align="center">

- Edge (latest)

**⭐ Star this repo if you found it helpful!**

- Password-protected via environment variable- Mobile browsers

Made with ♥ for your special day

- Server-side API with authentication

</div>

- Firebase Admin SDK for secure database access## License



---MIT License - feel free to use this for your own wedding!



## 🎨 Customization## Support



### Update Wedding DetailsFor questions or issues, please open an issue on GitHub.



Edit `lib/constants.ts`:## Credits



```typescript- Images: [Unsplash](https://unsplash.com)

export const WEDDING_DATE = '2026-06-15';- Icons: Heroicons

export const COUPLE_NAMES = 'Sarah & Michael';- Fonts: Google Fonts (Playfair Display, Inter)



export const VENUE = {---

  name: 'The Grand Estate',

  address: '123 Wedding Lane',Made with ♥ for your special day

  city: 'San Francisco',
  // ...
};

export const ITINERARY = [
  { time: '3:00 PM', title: 'Guest Arrival', /* ... */ },
  // Add your events...
];
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#fef2f2',
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  }
}
```

### Replace Images

Update image URLs in:
- `app/page.tsx` - Hero section
- `lib/constants.ts` - Story timeline photos
- `app/venue/page.tsx` - Venue images

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Add Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from your `.env.local`

4. **Deploy** 🚀
   - Vercel will automatically build and deploy
   - Get your production URL
   - Auto-deploys on every push to main

### Other Hosting Options

- **Netlify**: Similar process, import from Git
- **AWS Amplify**: Connect GitHub repo
- **Self-hosted**: Build with `npm run build`, serve with `npm start`

---

## 📁 Project Structure

```
wedding-rsvp/
├── app/                      # Next.js App Router
│   ├── admin/               # Admin dashboard
│   ├── api/                 # API routes
│   │   ├── admin/          # Admin endpoints (guests)
│   │   ├── auth/           # Authentication (code validation)
│   │   └── rsvp/           # RSVP submission
│   ├── itinerary/          # Wedding schedule
│   ├── registry/           # Gift registries
│   ├── rsvp/               # RSVP pages
│   │   ├── confirmation/   # Success page
│   │   └── form/           # RSVP form
│   ├── story/              # Couple's story timeline
│   ├── venue/              # Venue details
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/              # React components
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── PageSection.tsx
│   │   └── Textarea.tsx
│   ├── Footer.tsx          # Site footer
│   └── Navigation.tsx      # Navigation bar
├── lib/                     # Utilities
│   ├── firebase/
│   │   ├── adminApp.ts     # Firebase Admin SDK
│   │   └── clientApp.ts    # Firebase Client SDK
│   ├── constants.ts        # App configuration
│   └── utils.ts            # Helper functions
├── scripts/                 # Utility scripts
│   └── add-guests.ts       # Add guests to database
├── types/                   # TypeScript definitions
│   └── index.ts
├── image/                   # Screenshots
│   ├── admin-dashboard.png
│   └── hero.png
└── public/                  # Static assets
```

---

## 🔒 Security Features

- ✅ **Bcrypt hashing** for invitation codes
- ✅ **Server-side validation** for all RSVP submissions
- ✅ **Firebase Admin SDK** for secure database operations
- ✅ **Firestore security rules** prevent direct client access
- ✅ **Password-protected admin** dashboard
- ✅ **Environment variables** for sensitive data
- ✅ **One-time use codes** prevent duplicate submissions

---

## 🎯 Workflow

### 1. Setup
- Configure Firebase and environment variables
- Customize wedding details and colors
- Replace placeholder images

### 2. Add Guests
- Create unique codes for each guest
- Run `add-guests.ts` script
- Codes are securely hashed in database

### 3. Send Invitations
- Include website URL and unique code
- Guests visit site and enter their code
- Form validates and displays personalized welcome

### 4. Monitor RSVPs
- Check admin dashboard regularly
- Export CSV for vendor coordination
- Track pending guests for follow-up

### 5. Wedding Day
- Export final guest list
- Print for day-of coordination
- Celebrate! 🎉

---

## 💡 Pro Tips

- **Backup your data**: Export CSV regularly
- **Test codes**: Verify invitation codes work before sending
- **Mobile-first**: Most guests will RSVP on their phones
- **Clear codes**: Use memorable codes (names + year)
- **Follow up**: Use pending list to send reminders
- **Customize**: Replace all placeholder images with your photos

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Firebase Issues
- Check that Firestore rules are set correctly
- Verify Admin SDK credentials in `.env.local`
- Ensure Firebase billing is enabled (Firestore requires it)

### Admin Dashboard Not Loading
- Check `ADMIN_PASSWORD` is set in `.env.local`
- Verify you're using correct password
- Check browser console for errors

---

## 📄 License

MIT License - Feel free to use this for your own wedding!

---

## 🙏 Acknowledgments

- **Next.js** - The React Framework
- **Firebase** - Backend infrastructure
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **Vercel** - Hosting platform

---

## 💖 Made With Love

Built with modern web technologies for couples who want a beautiful, functional wedding website.

Perfect for:
- Tech-savvy couples
- DIY wedding websites
- Small to medium weddings (any size!)
- Developers learning Next.js

---

<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>Made with ♥ for your special day</p>
</div>
