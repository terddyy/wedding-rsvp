'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageSection from '@/components/ui/PageSection';
import Button from '@/components/ui/Button';
import { WEDDING_DATE, COUPLE_NAMES } from '@/lib/constants';
import { formatDate, daysUntilWedding } from '@/lib/utils';

export default function Home() {
  const daysLeft = daysUntilWedding(WEDDING_DATE);
  const formattedDate = formatDate(WEDDING_DATE);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
            alt="Wedding background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {COUPLE_NAMES}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We&apos;re Getting Married!
          </motion.p>
          
          <motion.div
            className="text-lg md:text-xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="mb-2">{formattedDate}</p>
            <p className="text-primary-200">San Francisco, California</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link href="/rsvp">
              <Button size="lg" variant="primary">
                RSVP Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <PageSection background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Counting Down
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-primary-50 rounded-lg p-8 shadow-md">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                {daysLeft}
              </div>
              <div className="text-lg text-gray-700">Days to Go</div>
            </div>
            <div className="bg-secondary-50 rounded-lg p-8 shadow-md">
              <div className="text-5xl md:text-6xl font-bold text-secondary-600 mb-2">
                {Math.floor(daysLeft * 24)}
              </div>
              <div className="text-lg text-gray-700">Hours</div>
            </div>
            <div className="bg-accent-50 rounded-lg p-8 shadow-md">
              <div className="text-5xl md:text-6xl font-bold text-accent-600 mb-2">
                {Math.floor(daysLeft * 1440)}
              </div>
              <div className="text-lg text-gray-700">Minutes</div>
            </div>
          </div>
          <p className="text-xl text-gray-600">
            We can&apos;t wait to celebrate with you!
          </p>
        </div>
      </PageSection>

      {/* Welcome Section */}
      <PageSection background="primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Welcome to Our Wedding
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              After years of love, laughter, and countless adventures together, 
              we&apos;re thrilled to invite you to celebrate the next chapter of our journey.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Join us for an unforgettable day filled with joy, romance, and celebration 
              as we exchange our vows and begin our life as husband and wife.
            </p>
            <Link href="/story">
              <Button variant="outline">Read Our Story</Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop"
              alt="Sarah and Michael"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </PageSection>

      {/* Quick Info Section */}
      <PageSection background="white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Wedding Details
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our special day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* When */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
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
            <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">When</h3>
            <p className="text-gray-600">{formattedDate}</p>
            <p className="text-gray-600 mt-2">Ceremony at 3:30 PM</p>
            <Link href="/itinerary" className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">
              View Full Schedule →
            </Link>
          </motion.div>

          {/* Where */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
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
            <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">Where</h3>
            <p className="text-gray-600">The Grand Estate</p>
            <p className="text-gray-600 mt-2">San Francisco, CA</p>
            <Link href="/venue" className="inline-block mt-4 text-secondary-600 hover:text-secondary-700 font-medium">
              Get Directions →
            </Link>
          </motion.div>

          {/* RSVP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
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
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">RSVP</h3>
            <p className="text-gray-600">Please respond by</p>
            <p className="text-gray-600 mt-2 font-semibold">May 15, 2026</p>
            <Link href="/rsvp" className="inline-block mt-4">
              <Button variant="primary" size="sm">
                RSVP Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </PageSection>
    </div>
  );
}
