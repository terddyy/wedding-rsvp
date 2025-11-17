# Fix Firebase Authentication Error

## Problem
```
Error: 16 UNAUTHENTICATED: Request had invalid authentication credentials.
Expected OAuth 2 access token, login cookie or other valid authentication credential.
```

This error occurs at `app/api/auth/validate/route.ts:21` when querying Firestore.

## Root Cause
The `FIREBASE_ADMIN_PRIVATE_KEY` in `.env.local` is **incomplete/truncated**. The private key must be the full RSA private key from your Firebase service account.

## Solution

### Step 1: Get the Complete Service Account Key
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **wedding-rsvp-32d66**
3. Click ⚙️ **Settings** (top-left) → **Project Settings**
4. Go to **Service Accounts** tab
5. Click **Generate New Private Key**
6. A JSON file will download: `wedding-rsvp-32d66-*.json`

### Step 2: Extract the Private Key
Open the downloaded JSON file. Find the `private_key` field. It looks like:

```json
{
  "type": "service_account",
  "project_id": "wedding-rsvp-32d66",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEv...MANY LINES...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@wedding-rsvp-32d66.iam.gserviceaccount.com",
  "client_id": "...",
  ...
}
```

### Step 3: Update `.env.local`
Replace the entire `FIREBASE_ADMIN_PRIVATE_KEY` value with the complete key from the JSON file.

Your `.env.local` should have:

```
FIREBASE_ADMIN_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEv...COPY_ENTIRE_KEY_HERE...\n-----END PRIVATE KEY-----\n
```

**Important:**
- Include the entire key (from `-----BEGIN PRIVATE KEY-----` to `-----END PRIVATE KEY-----`)
- Keep the `\n` escape sequences (the `.replace(/\\n/g, '\n')` in `adminApp.ts` handles this)
- Do NOT add extra quotes or line breaks within the value

### Step 4: Restart Development Server
1. Stop the dev server (Ctrl+C)
2. Run `npm run dev`
3. Test the RSVP form again

### Step 5: Verify
Make a test request to `/rsvp` and submit a code. The error should now be:
- Either a valid response if the code exists
- Or a proper `Invalid code` error (not an auth error)

## Security Note
- Keep the private key **secret** — never commit it to Git
- The `.gitignore` should already exclude `.env.local`
- Generate a new key periodically for production environments

## Still Not Working?
If you still see auth errors:
1. Verify the **entire** private key is copied (it should be ~1700+ characters)
2. Check that `FIREBASE_ADMIN_PROJECT_ID` and `FIREBASE_ADMIN_CLIENT_EMAIL` match the service account JSON
3. Ensure the service account has **Firestore read/write** permissions in Firebase rules

---

**File**: `app/api/auth/validate/route.ts`  
**Status**: ✅ Updated with better error handling
