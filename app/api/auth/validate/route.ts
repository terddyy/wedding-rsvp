import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/adminApp';
import { verifyCode } from '@/lib/utils';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json(
        { error: 'Invalid code format' },
        { status: 400 }
      );
    }

    // Query Firestore for guest with this code
    const guestsRef = adminDb.collection('guests');
    const snapshot = await guestsRef.where('used', '==', false).get();

    if (snapshot.empty) {
      return NextResponse.json(
        { error: 'Invalid or already used code' },
        { status: 401 }
      );
    }

    // Check each guest's hashed code
    let matchedGuest: any = null;
    for (const doc of snapshot.docs) {
      const guest = doc.data();
      const isValid = await verifyCode(code, guest.code_hash);
      if (isValid) {
        matchedGuest = { id: doc.id, ...guest };
        break;
      }
    }

    if (!matchedGuest) {
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
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
