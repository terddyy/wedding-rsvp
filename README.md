<div align="center"># Wedding RSVP Website

  <h1>💍 Wedding RSVP Website</h1>

  <p>A beautiful, secure, and modern wedding website with code-gated RSVP system</p>A beautiful, code-gated wedding website built with Next.js 15, React 19, Tailwind CSS, and Firebase.

  

  <p>## Features

    <a href="#features">Features</a> •

    <a href="#demo">Demo</a> •- ✨ Elegant, responsive design with smooth animations

    <a href="#tech-stack">Tech Stack</a> •- 🔐 Secure code-gated RSVP system

    <a href="#getting-started">Getting Started</a> •- 🎨 Modern UI with Framer Motion animations

    <a href="#deployment">Deployment</a>- 📱 Fully mobile-responsive

  </p>- 🔥 Firebase Firestore for data storage

- ⚡ Server-side rendering with Next.js 15

  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)- 🎯 Production-ready with proper SEO

  ![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)

  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)## Pages

  ![Firebase](https://img.shields.io/badge/Firebase-10.0-orange?style=flat-square&logo=firebase)

  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)- **Home**: Hero section with countdown timer

- **Our Story**: Timeline of the couple's journey

</div>- **Venue**: Location details and maps

- **Itinerary**: Wedding day schedule

---- **Registry**: Gift registry links

- **RSVP**: Secure code-gated RSVP form

## 📸 Screenshots

## Tech Stack

### Hero Section

![Wedding Website Hero](image/hero.png)- **Frontend**: Next.js 15, React 19, TypeScript

- **Styling**: Tailwind CSS, Framer Motion

### Admin Dashboard- **Database**: Firebase Firestore

![Admin Dashboard](image/admin-dashboard.png)- **Auth**: Custom code-based authentication

- **Hosting**: Vercel (recommended)

---

## Getting Started

## ✨ Features

### Prerequisites

### 🎨 **Beautiful Design**

- Elegant, modern UI with smooth Framer Motion animations- Node.js 18+ 

- Fully responsive design (mobile, tablet, desktop)- npm or yarn

- Clean typography with Google Fonts (Playfair Display, Inter)- Firebase project

- Tailwind CSS for consistent styling- Vercel account (for deployment)



### 🔐 **Secure RSVP System**### Installation

- Code-gated authentication (one code per guest)

- Bcrypt password hashing for invitation codes1. Clone the repository:

- Server-side validation and Firebase Admin SDK```bash

- Prevents duplicate submissionsgit clone <repository-url>

cd wedding-rsvp

### 👥 **Guest Management**```

- Add guests via scripts with unique invitation codes

- Track RSVP status (Attending/Not Attending/Pending)2. Install dependencies:

- Collect optional messages from guests```bash

- View submission timestampsnpm install

```

### 📊 **Admin Dashboard**

- Real-time statistics (Total, Attending, Not Attending, Pending)3. Create a `.env.local` file based on `.env.example`:

- Searchable guest list with all RSVP details```bash

- Export data to CSV for planningcp .env.example .env.local

- Delete guests functionality```

- Password-protected access

4. Configure your environment variables in `.env.local`:

### 📱 **Multiple Pages**   - Add your Firebase configuration

- **Home**: Hero section with countdown timer   - Add Firebase Admin SDK credentials

- **Our Story**: Timeline of your relationship   - Set your wedding date and couple names

- **Venue**: Location details and directions

- **Itinerary**: Wedding day schedule### Firebase Setup

- **Registry**: Gift registry links

- **RSVP**: Secure code-gated RSVP form1. Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)

- **Admin**: Dashboard for managing guests

2. Enable Firestore Database

---

3. Create a `guests` collection with the following structure:

## 🛠️ Tech Stack```javascript

{

| Category | Technology |  id: "auto-generated",

|----------|------------|  name: "Guest Name",

| **Framework** | Next.js 15 (App Router) |  code_hash: "hashed-code",

| **Frontend** | React 19, TypeScript 5.0 |  rsvp_status: "pending",

| **Styling** | Tailwind CSS 3.4, Framer Motion |  plus_one: "",

| **Database** | Firebase Firestore |  message: "",

| **Authentication** | Custom code-based system |  used: false,

| **Deployment** | Vercel |  submitted_at: null

| **Password Hashing** | bcryptjs |}

```

---

4. Add Firestore security rules:

## 🚀 Getting Started```javascript

rules_version = '2';

### Prerequisitesservice cloud.firestore {

  match /databases/{database}/documents {

Before you begin, ensure you have:    match /guests/{guestId} {

- **Node.js 18+** installed      allow read, write: if false; // Only server-side access

- **npm** or **yarn** package manager    }

- **Firebase account** (free tier works)  }

- **Git** for version control}

```

### Installation

5. Download your service account key:

1. **Clone the repository**   - Go to Project Settings > Service Accounts

```bash   - Generate new private key

git clone https://github.com/yourusername/wedding-rsvp.git   - Add the credentials to your `.env.local`

cd wedding-rsvp

```### Adding Guests



2. **Install dependencies**You can add guests programmatically using the Firebase Admin SDK. Create a script to hash codes and add guests:

```bash

npm install```javascript

```import { hashCode } from './lib/utils';

import { adminDb } from './lib/firebase/adminApp';

3. **Set up environment variables**

```bashasync function addGuest(name, code) {

cp .env.example .env.local  const code_hash = await hashCode(code);

```  await adminDb.collection('guests').add({

    name,

Edit `.env.local` with your configuration:    code_hash,

```env    rsvp_status: 'pending',

# Firebase Configuration (Client-side)    used: false,

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key  });

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com}

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com// Example usage

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_idaddGuest('John Doe', 'ABC12345');

NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id```



# Firebase Admin SDK (Server-side)### Development

FIREBASE_ADMIN_PROJECT_ID=your_project_id

FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk@your_project.iam.gserviceaccount.comRun the development server:

FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"

```bash

# Admin Dashboardnpm run dev

ADMIN_PASSWORD=your_secure_password```



# Wedding DetailsOpen [http://localhost:3000](http://localhost:3000) in your browser.

NEXT_PUBLIC_WEDDING_DATE=2026-06-15

NEXT_PUBLIC_COUPLE_NAMES=Your Names### Building for Production

```

```bash

4. **Start development server**npm run build

```bashnpm start

npm run dev```

```

## Deployment

Open [http://localhost:3000](http://localhost:3000) 🎉

### Deploy to Vercel

---

1. Push your code to GitHub

## 🔥 Firebase Setup

2. Import your repository in Vercel

### 1. Create Firebase Project

3. Configure environment variables in Vercel dashboard

1. Go to [Firebase Console](https://console.firebase.google.com)

2. Click "Add Project" and follow the wizard4. Deploy!

3. Once created, click the **web icon** (`</>`) to register your app

The app will automatically deploy on every push to your main branch.

### 2. Enable Firestore Database

### Environment Variables

1. In Firebase Console, go to **Firestore Database**

2. Click "Create database"Make sure to add all environment variables from `.env.example` to your Vercel project settings.

3. Choose **Production mode**

4. Select your preferred region## Customization

5. Click "Enable"

### Colors

### 3. Set Security Rules

Edit `tailwind.config.ts` to customize the color palette:

Go to **Firestore → Rules** and add:- `primary`: Main wedding color

- `secondary`: Secondary accent

```javascript- `accent`: Highlighted elements

rules_version = '2';

service cloud.firestore {### Content

  match /databases/{database}/documents {

    match /guests/{guestId} {Update constants in `lib/constants.ts`:

      allow read, write: if false; // Only server-side access via Admin SDK- Wedding date

    }- Couple names

  }- Venue information

}- Itinerary events

```- Registry links

- Story milestones

### 4. Get Admin SDK Credentials

### Images

1. Go to **Project Settings → Service Accounts**

2. Click **"Generate new private key"**Replace placeholder images from Unsplash with your own photos. Update image URLs in:

3. Download the JSON file- `app/page.tsx` (Home)

4. Add credentials to your `.env.local` file- `app/story/page.tsx` (Story timeline)

- `app/venue/page.tsx` (Venue)

---

## Project Structure

## 👥 Adding Guests

```

### Method 1: Using the Script (Recommended)wedding-rsvp/

├── app/                    # Next.js 15 app directory

1. **Edit** `scripts/add-guests.ts`:│   ├── api/               # API routes

│   ├── rsvp/              # RSVP pages

```typescript│   ├── story/             # Story page

const guests = [│   ├── venue/             # Venue page

  { name: 'Alice Smith', code: 'ALICE2026' },│   ├── itinerary/         # Itinerary page

  { name: 'Bob Johnson', code: 'BOB2026' },│   ├── registry/          # Registry page

  { name: 'Charlie Brown', code: 'CHARLIE2026' },│   ├── layout.tsx         # Root layout

  // Add more guests...│   ├── page.tsx           # Home page

];│   └── globals.css        # Global styles

```├── components/            # React components

│   ├── ui/               # Reusable UI components

2. **Run the script**:│   ├── Navigation.tsx    # Navigation bar

```bash│   └── Footer.tsx        # Footer

npx tsx scripts/add-guests.ts├── lib/                  # Utility functions

```│   ├── firebase/         # Firebase configuration

│   ├── constants.ts      # App constants

### Method 2: Firebase Console│   └── utils.ts          # Helper functions

├── types/                # TypeScript types

Manually add documents to the `guests` collection with:└── public/               # Static assets

```json```

{

  "name": "Guest Name",## Security

  "code_hash": "hashed_code",

  "rsvp_status": "pending",- Codes are hashed before storage using bcrypt

  "message": "",- Server-side validation for all RSVP submissions

  "used": false,- HTTP-only sessions for authenticated users

  "submitted_at": null- Rate limiting recommended for production

}- Firestore security rules prevent direct client access

```

## Performance

---

- Server-side rendering for fast initial loads

## 📊 Admin Dashboard- Image optimization with Next.js Image component

- Code splitting and lazy loading

### Accessing Admin Panel- Tailwind CSS for minimal bundle size



1. Navigate to `/admin` (e.g., `http://localhost:3000/admin`)## Accessibility

2. Enter your admin password (from `.env.local`)

3. View real-time RSVP statistics and guest list- Semantic HTML structure

- ARIA labels and roles

### Features- Keyboard navigation support

- Readable color contrast

- **📈 Statistics Cards**: Total, Attending, Not Attending, Pending- Focus states for interactive elements

- **📋 Guest List**: View all guests with their RSVP status

- **📊 Export CSV**: Download all data for Excel/Sheets## Browser Support

- **🗑️ Delete Guests**: Remove guests with confirmation

- **🔄 Refresh**: Get latest data from Firebase- Chrome (latest)

- Firefox (latest)

### Security- Safari (latest)

- Edge (latest)

- Password-protected via environment variable- Mobile browsers

- Server-side API with authentication

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
