'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import PageSection from '@/components/ui/PageSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { RSVPStatus } from '@/types';

export default function RSVPFormPage() {
  const router = useRouter();
  const [guestInfo, setGuestInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState<RSVPStatus>('attending');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check for session
    const session = sessionStorage.getItem('rsvp_session');
    const guest = sessionStorage.getItem('guest_info');

    if (!session || !guest) {
      router.push('/rsvp');
      return;
    }

    const sessionData = JSON.parse(session);
    const guestData = JSON.parse(guest);

    // Check if session is expired
    if (new Date(sessionData.expiresAt) < new Date()) {
      sessionStorage.clear();
      router.push('/rsvp');
      return;
    }

    setGuestInfo(guestData);
  }, [router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/rsvp/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guestId: guestInfo.id,
          rsvp_status: rsvpStatus,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit RSVP');
      }

      // Clear session
      sessionStorage.clear();

      // Redirect to confirmation
      router.push('/rsvp/confirmation');
    } catch (err: any) {
      alert(err.message || 'An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  if (!guestInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <PageSection background="primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-gray-900">
            Welcome, {guestInfo.name}!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re thrilled you&apos;re here. Please let us know if you can join us.
          </p>
        </motion.div>
      </PageSection>

      {/* RSVP Form */}
      <PageSection background="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Attendance */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Will you be attending? <span className="text-primary-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-primary-300 has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50">
                    <input
                      type="radio"
                      name="rsvp_status"
                      value="attending"
                      checked={rsvpStatus === 'attending'}
                      onChange={(e) => setRsvpStatus(e.target.value as RSVPStatus)}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-900 font-medium">
                      ✓ Joyfully accepts
                    </span>
                  </label>
                  
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-primary-300 has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50">
                    <input
                      type="radio"
                      name="rsvp_status"
                      value="not_attending"
                      checked={rsvpStatus === 'not_attending'}
                      onChange={(e) => setRsvpStatus(e.target.value as RSVPStatus)}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-900 font-medium">
                      ✗ Regretfully declines
                    </span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <Textarea
                label="Message to the Couple (Optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your well wishes, dietary restrictions, or any special requests..."
                rows={5}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full"
                >
                  Submit RSVP
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </PageSection>

      {/* Additional Info */}
      <PageSection background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
              Need to Make Changes?
            </h3>
            <p className="text-gray-600 mb-4">
              If you need to update your RSVP after submitting, please contact us directly.
            </p>
            <a
              href="mailto:wedding@sarahandmichael.com"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              wedding@sarahandmichael.com
            </a>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
}
