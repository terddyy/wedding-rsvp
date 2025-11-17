'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageSection from '@/components/ui/PageSection';
import Button from '@/components/ui/Button';
import { VENUE } from '@/lib/constants';

export default function VenuePage() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  // Create map URL with marker
  const mapUrl = googleMapsApiKey 
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${VENUE.coordinates?.lat},${VENUE.coordinates?.lng}&zoom=15`
    : null;
    
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${VENUE.coordinates?.lat},${VENUE.coordinates?.lng}`;

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
            The Venue
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Join us at this beautiful location for our special day
          </p>
        </motion.div>
      </PageSection>

      {/* Venue Details */}
      <PageSection background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzYwNTRiOTdhZTM3MjQ0ZWQ5OWIzMTdmZmM2ZTY0MDhkIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19"
              alt="Venue"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">
              {VENUE.name}
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0"
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
                <div>
                  <p className="text-lg text-gray-900 font-medium">{VENUE.address}</p>
                  <p className="text-lg text-gray-600">
                    {VENUE.city}, {VENUE.state} {VENUE.zip}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kapitan Moy Restaurant is a beautiful venue located in the heart of Marikina City. 
              Known for its elegant ambiance, excellent cuisine, and warm hospitality, 
              it&apos;s the perfect setting for our celebration.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The ceremony and reception will take place at this wonderful location. 
              We can&apos;t wait to share this special day with all of you at this 
              charming venue!
            </p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Get Directions
              </Button>
            </a>
          </motion.div>
        </div>
      </PageSection>

      {/* Map Section */}
      <PageSection background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold mb-8 text-center text-gray-900">
            Location
          </h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-video w-full">
              {mapUrl ? (
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              ) : (
                <div className="bg-gray-200 flex items-center justify-center h-full">
                  <div className="text-center p-8">
                    <svg
                      className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
                    <p className="text-gray-600 mb-4">
                      Google Maps not configured
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file
                    </p>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        Open in Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </PageSection>

      {/* Accommodations */}
      <PageSection background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold mb-8 text-center text-gray-900">
            Accommodations
          </h2>
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              We have reserved room blocks at nearby hotels for our guests.
            </p>
            <p className="text-gray-600">
              Booking information and discount codes will be sent with your invitation.
            </p>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
}
