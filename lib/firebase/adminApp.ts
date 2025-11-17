// Next.js automatically loads .env.local files
// No need for dotenv package in production
import * as admin from 'firebase-admin';
import path from 'path';
import fs from 'fs';

// Initialize only if we have credentials
if (!admin.apps.length) {
  try {
    let serviceAccount: any;

    // Try loading from service account JSON file first (preferred method)
    const serviceAccountPath = path.join(process.cwd(), 'firebase-service-account.json');
    if (fs.existsSync(serviceAccountPath)) {
      console.log('Loading Firebase credentials from firebase-service-account.json');
      serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    } else {
      // Fall back to environment variables
      const hasCredentials = process.env.FIREBASE_ADMIN_PROJECT_ID && 
                            process.env.FIREBASE_ADMIN_CLIENT_EMAIL && 
                            process.env.FIREBASE_ADMIN_PRIVATE_KEY;

      if (!hasCredentials) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('Firebase Admin: Missing credentials. API routes will not work.');
        }
        throw new Error('Firebase credentials not found');
      }

      const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY
        ?.replace(/\\n/g, '\n') // Handle escaped newlines from .env.local
        ?.trim();

      if (!privateKey) {
        throw new Error('Private key is empty after parsing');
      }

      serviceAccount = {
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: privateKey,
      };

      console.log('Loading Firebase credentials from environment variables');
      console.log('Project ID:', serviceAccount.projectId);
      console.log('Client Email:', serviceAccount.clientEmail);
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log('✓ Firebase Admin SDK initialized successfully');
  } catch (error) {
    console.error('✗ Firebase admin initialization error:', error);
    // Don't re-throw - let the app start but API routes will fail gracefully
  }
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();
export default admin;
