import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/adminApp';
import { verifyCode } from '@/lib/utils';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Safely parse JSON with error handling
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { error: 'Invalid request body - must be valid JSON' },
        { status: 400 }
      );
    }

    const { code } = body;

    if (!code || typeof code !== 'string') {
      return NextResponse.json(
        { error: 'Invalid code format' },
        { status: 400 }
      );
    }

    console.log('Validating code:', code.toUpperCase());

    // Query Firestore for guest with this code
    const guestsRef = adminDb.collection('guests');
    const snapshot = await guestsRef.get();

    if (snapshot.empty) {
      console.warn('No guests found in database');
      return NextResponse.json(
        { error: 'Invalid or already used code' },
        { status: 401 }
      );
    }

    console.log(`Checking against ${snapshot.docs.length} guests`);

    // Check each guest's hashed code
    let matchedGuest: any = null;
    for (const doc of snapshot.docs) {
      const guest = doc.data();
      try {
        const isValid = await verifyCode(code, guest.code_hash);
        if (isValid) {
          if (guest.rsvp_status && guest.rsvp_status !== '') {
            return NextResponse.json(
              { error: 'RSVP already submitted for this code' },
              { status: 401 }
            );
          }
          matchedGuest = { id: doc.id, ...guest };
          console.log('Code validated for guest:', guest.name);
          break;
        }
      } catch (verifyError) {
        console.error('Error verifying code for guest:', verifyError);
        continue;
      }
    }

    if (!matchedGuest) {
      console.warn('No matching guest found for code:', code.toUpperCase());
      return NextResponse.json(
        { error: 'Invalid code' },
        { status: 401 }
      );
    }

    // Create session
    const session = {
      guestId: matchedGuest.id,
      code: code.toUpperCase(),
      expiresAt: new Date(Date.now() + 3600000), // 1 hour
    };

    return NextResponse.json({
      success: true,
      guest: {
        id: matchedGuest.id,
        name: matchedGuest.name,
      },
      session,
    });
  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
