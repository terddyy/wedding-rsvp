// Next.js automatically loads .env.local files
// No need for dotenv package in production
import * as admin from 'firebase-admin';

// Initialize only if we have credentials
if (!admin.apps.length) {
  try {
    // Check if we're in a build/static generation context
    const hasCredentials = process.env.FIREBASE_ADMIN_PROJECT_ID && 
                          process.env.FIREBASE_ADMIN_CLIENT_EMAIL && 
                          process.env.FIREBASE_ADMIN_PRIVATE_KEY;

    if (hasCredentials) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
          clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    } else if (process.env.NODE_ENV !== 'production') {
      console.warn('Firebase Admin: Missing credentials. API routes will not work.');
    }
  } catch (error) {
    console.error('Firebase admin initialization error:', error);
  }
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();
export default admin;
