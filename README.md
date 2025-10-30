# Wedding RSVP Website

A beautiful, code-gated wedding website built with Next.js 15, React 19, Tailwind CSS, and Firebase.

## Features

- ✨ Elegant, responsive design with smooth animations
- 🔐 Secure code-gated RSVP system
- 🎨 Modern UI with Framer Motion animations
- 📱 Fully mobile-responsive
- 🔥 Firebase Firestore for data storage
- ⚡ Server-side rendering with Next.js 15
- 🎯 Production-ready with proper SEO

## Pages

- **Home**: Hero section with countdown timer
- **Our Story**: Timeline of the couple's journey
- **Venue**: Location details and maps
- **Itinerary**: Wedding day schedule
- **Registry**: Gift registry links
- **RSVP**: Secure code-gated RSVP form

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: Firebase Firestore
- **Auth**: Custom code-based authentication
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wedding-rsvp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
   - Add your Firebase configuration
   - Add Firebase Admin SDK credentials
   - Set your wedding date and couple names

### Firebase Setup

1. Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)

2. Enable Firestore Database

3. Create a `guests` collection with the following structure:
```javascript
{
  id: "auto-generated",
  name: "Guest Name",
  code_hash: "hashed-code",
  rsvp_status: "pending",
  plus_one: "",
  message: "",
  used: false,
  submitted_at: null
}
```

4. Add Firestore security rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /guests/{guestId} {
      allow read, write: if false; // Only server-side access
    }
  }
}
```

5. Download your service account key:
   - Go to Project Settings > Service Accounts
   - Generate new private key
   - Add the credentials to your `.env.local`

### Adding Guests

You can add guests programmatically using the Firebase Admin SDK. Create a script to hash codes and add guests:

```javascript
import { hashCode } from './lib/utils';
import { adminDb } from './lib/firebase/adminApp';

async function addGuest(name, code) {
  const code_hash = await hashCode(code);
  await adminDb.collection('guests').add({
    name,
    code_hash,
    rsvp_status: 'pending',
    used: false,
  });
}

// Example usage
addGuest('John Doe', 'ABC12345');
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import your repository in Vercel

3. Configure environment variables in Vercel dashboard

4. Deploy!

The app will automatically deploy on every push to your main branch.

### Environment Variables

Make sure to add all environment variables from `.env.example` to your Vercel project settings.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `primary`: Main wedding color
- `secondary`: Secondary accent
- `accent`: Highlighted elements

### Content

Update constants in `lib/constants.ts`:
- Wedding date
- Couple names
- Venue information
- Itinerary events
- Registry links
- Story milestones

### Images

Replace placeholder images from Unsplash with your own photos. Update image URLs in:
- `app/page.tsx` (Home)
- `app/story/page.tsx` (Story timeline)
- `app/venue/page.tsx` (Venue)

## Project Structure

```
wedding-rsvp/
├── app/                    # Next.js 15 app directory
│   ├── api/               # API routes
│   ├── rsvp/              # RSVP pages
│   ├── story/             # Story page
│   ├── venue/             # Venue page
│   ├── itinerary/         # Itinerary page
│   ├── registry/          # Registry page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Navigation.tsx    # Navigation bar
│   └── Footer.tsx        # Footer
├── lib/                  # Utility functions
│   ├── firebase/         # Firebase configuration
│   ├── constants.ts      # App constants
│   └── utils.ts          # Helper functions
├── types/                # TypeScript types
└── public/               # Static assets
```

## Security

- Codes are hashed before storage using bcrypt
- Server-side validation for all RSVP submissions
- HTTP-only sessions for authenticated users
- Rate limiting recommended for production
- Firestore security rules prevent direct client access

## Performance

- Server-side rendering for fast initial loads
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Tailwind CSS for minimal bundle size

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Readable color contrast
- Focus states for interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - feel free to use this for your own wedding!

## Support

For questions or issues, please open an issue on GitHub.

## Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: Heroicons
- Fonts: Google Fonts (Playfair Display, Inter)

---

Made with ♥ for your special day
