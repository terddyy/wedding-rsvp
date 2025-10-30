/**
 * Script to generate random invitation codes
 * 
 * Usage: npx tsx scripts/generate-codes.ts [count]
 * Example: npx tsx scripts/generate-codes.ts 50
 */

import { generateGuestCode } from '../lib/utils';

function generateCodes(count: number = 10) {
  console.log(`Generating ${count} unique invitation codes:\n`);
  
  const codes = new Set<string>();
  
  while (codes.size < count) {
    codes.add(generateGuestCode());
  }
  
  const codeList = Array.from(codes).sort();
  
  codeList.forEach((code, index) => {
    console.log(`${(index + 1).toString().padStart(3, ' ')}. ${code}`);
  });
  
  console.log(`\nGenerated ${codes.size} unique codes!`);
  console.log('\nCopy these codes and assign them to your guests.');
  console.log('Keep this list secure - each code grants RSVP access.');
}

// Get count from command line argument
const count = parseInt(process.argv[2]) || 10;
generateCodes(count);
