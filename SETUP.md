# Quick Start Guide

## 1. Initial Setup (5 minutes)

### Configure Environment
1. Copy `.env.example` to `.env.local`
2. Keep the file open - we'll fill it in as we go

## 2. Firebase Setup (10 minutes)

### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add Project"
3. Name it (e.g., "wedding-rsvp")
4. Disable Google Analytics (optional)
5. Click "Create Project"

### Get Firebase Config
1. In Firebase Console, click the gear icon > Project Settings
2. Scroll to "Your apps" section
3. Click the web icon (</>)
4. Register app (name: "Wedding RSVP")
5. Copy the config values to your `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   ```

### Enable Firestore
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode"
4. Select a location (choose closest to your guests)
5. Click "Enable"

### Setup Firestore Rules
1. Go to Firestore > Rules tab
2. Replace with:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /guests/{guestId} {
         allow read, write: if false;
       }
     }
   }
   ```
3. Click "Publish"

### Get Admin SDK Credentials
1. Project Settings > Service Accounts
2. Click "Generate new private key"
3. Download the JSON file
4. Add to `.env.local`:
   ```
   FIREBASE_ADMIN_PROJECT_ID=your-project-id
   FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
   FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
   ```

## 3. Customize Wedding Details (5 minutes)

Edit `lib/constants.ts`:
- Change couple names
- Update wedding date
- Update venue information
- Customize itinerary
- Add registry links
- Update story milestones

## 4. Add Guest Codes (10 minutes)

### Create Guest Script
Create `scripts/add-guests.ts`:

```typescript
import { hashCode } from '../lib/utils';
import { adminDb } from '../lib/firebase/adminApp';

async function addGuests() {
  const guests = [
    { name: 'John & Jane Doe', code: 'WEDDING1' },
    { name: 'Bob Smith', code: 'WEDDING2' },
    // Add more guests...
  ];

  for (const guest of guests) {
    const code_hash = await hashCode(guest.code);
    
    await adminDb.collection('guests').add({
      name: guest.name,
      code_hash: code_hash,
      rsvp_status: 'pending',
      plus_one: '',
      message: '',
      used: false,
      submitted_at: null,
    });
    
    console.log(`Added: ${guest.name} with code ${guest.code}`);
  }
  
  console.log('All guests added!');
  process.exit(0);
}

addGuests().catch(console.error);
```

### Run the Script
```bash
npx tsx scripts/add-guests.ts
```

## 5. Test Locally (2 minutes)

```bash
npm run dev
```

Visit http://localhost:3000 and test:
1. Navigate through all pages
2. Go to /rsvp
3. Enter one of your test codes
4. Submit an RSVP
5. Check Firestore to see the data

## 6. Deploy to Vercel (5 minutes)

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial wedding website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

### Deploy on Vercel
1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Add all environment variables from `.env.local`
5. Click "Deploy"

Your site will be live in ~2 minutes!

## 7. Customize Images (Optional)

Replace placeholder images:

### Home Page Hero
Edit `app/page.tsx` line 21:
```typescript
src="YOUR_IMAGE_URL"
```

### Story Timeline
Edit `lib/constants.ts` in `STORY_MILESTONES`:
```typescript
image: 'YOUR_PHOTO_URL'
```

### Venue
Edit `app/venue/page.tsx` line 42:
```typescript
src="YOUR_VENUE_IMAGE_URL"
```

## 8. Google Maps (Optional)

1. Get a Google Maps API key
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key
   ```
3. Edit `app/venue/page.tsx` to enable the map

## Common Issues

### Firestore Permission Denied
- Make sure you set up Firestore rules correctly
- Check that you're using Admin SDK on the server

### Code Not Working
- Verify the code is added to Firestore
- Check that it's hashed correctly
- Make sure `used: false`

### Build Errors
- Run `npm install` again
- Check that all environment variables are set
- Try `npm run build` locally first

### Images Not Loading
- Use absolute URLs (https://...)
- Verify images are publicly accessible
- Add domains to `next.config.js` if needed

## Next Steps

1. ✅ Send invitation codes to guests
2. ✅ Monitor RSVPs in Firebase Console
3. ✅ Update content as needed
4. ✅ Test on mobile devices
5. ✅ Share your website URL!

## Support

- Check the main README.md for detailed documentation
- Review Firebase Console for RSVP data
- Contact questions: Check each page's contact section

---

**Total Setup Time: ~40 minutes**

Congratulations! Your wedding website is ready! 🎉
