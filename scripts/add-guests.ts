/**
 * Script to add guests to Firestore with hashed invitation codes
 * 
 * Usage:
 * 1. Update the guests array below with your guest list
 * 2. Run: npx tsx scripts/add-guests.ts
 */

// Load environment variables
import { config } from 'dotenv';
config({ path: '.env.local' });

import { hashCode } from '../lib/utils';
import { adminDb } from '../lib/firebase/adminApp';

// Define your guest list here
const guests = [
  { name: 'terd', code: 'WEDDING1' },
  
  // Add more guests here...
];

async function addGuests() {
  console.log('Starting to add guests...\n');

  for (const guest of guests) {
    try {
      // Hash the code for secure storage
      const code_hash = await hashCode(guest.code);
      
      // Add to Firestore
      const docRef = await adminDb.collection('guests').add({
        name: guest.name,
        code_hash: code_hash,
        rsvp_status: 'pending',
        message: '',
        used: false,
        submitted_at: null,
      });
      
      console.log(`✓ Added: ${guest.name}`);
      console.log(`  Code: ${guest.code}`);
      console.log(`  ID: ${docRef.id}\n`);
    } catch (error) {
      console.error(`✗ Failed to add ${guest.name}:`, error);
    }
  }
  
  console.log('Finished adding guests!');
  process.exit(0);
}

// Run the script
addGuests().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
