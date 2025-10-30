import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/adminApp';
import { RSVPFormData } from '@/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as RSVPFormData & { guestId: string };

    if (!data.guestId || !data.rsvp_status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Update guest in Firestore
    const guestRef = adminDb.collection('guests').doc(data.guestId);
    const guestDoc = await guestRef.get();

    if (!guestDoc.exists) {
      return NextResponse.json(
        { error: 'Guest not found' },
        { status: 404 }
      );
    }

    const guestData = guestDoc.data();
    if (guestData?.used) {
      return NextResponse.json(
        { error: 'RSVP already submitted' },
        { status: 400 }
      );
    }

    // Update the guest document
    await guestRef.update({
      rsvp_status: data.rsvp_status,
      message: data.message || '',
      used: true,
      submitted_at: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: 'RSVP submitted successfully',
    });
  } catch (error) {
    console.error('RSVP submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
