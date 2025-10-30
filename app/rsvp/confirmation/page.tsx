'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageSection from '@/components/ui/PageSection';
import Button from '@/components/ui/Button';

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen">
      <PageSection background="primary">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
            Thank You!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Your RSVP has been successfully submitted.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re so excited to celebrate with you! You should receive a confirmation 
            email shortly with all the details you&apos;ll need for our special day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                Return to Home
              </Button>
            </Link>
            <Link href="/itinerary">
              <Button variant="outline" size="lg">
                View Schedule
              </Button>
            </Link>
          </div>
        </motion.div>
      </PageSection>

      {/* Next Steps */}
      <PageSection background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold mb-8 text-center text-gray-900">
            What&apos;s Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Save the Date</h3>
              <p className="text-gray-600">
                Mark your calendar for June 15, 2026. We can&apos;t wait to see you there!
              </p>
            </div>

            <div className="text-center p-6 bg-secondary-50 rounded-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Plan Your Trip</h3>
              <p className="text-gray-600">
                Check out our venue page for location details and accommodation recommendations.
              </p>
            </div>

            <div className="text-center p-6 bg-accent-50 rounded-lg">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Check Our Registry</h3>
              <p className="text-gray-600">
                If you&apos;d like to give a gift, view our registry for ideas and inspiration.
              </p>
            </div>
          </div>
        </motion.div>
      </PageSection>

      {/* Contact */}
      <PageSection background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
            Questions or Changes?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            If you need to update your RSVP or have any questions, please don&apos;t hesitate to reach out.
          </p>
          <a
            href="mailto:terddy03@gmail.com"
            className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
          >
            terddy03@gmail.com
          </a>
        </motion.div>
      </PageSection>
    </div>
  );
}
