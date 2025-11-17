'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageSection from '@/components/ui/PageSection';
import Button from '@/components/ui/Button';
import Countdown from '@/components/Countdown';
import { WEDDING_DATE, COUPLE_NAMES } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { Great_Vibes } from 'next/font/google';
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const formattedDate = formatDate(WEDDING_DATE);

  return (
    
    <div className="min-h-screen">
      {/* Hero Section - Summer Floral */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-coral-50 to-sage-50">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-coral-200 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-sage-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Wedding background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-coral-50/60 to-sage-50/60" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center text-charcoal px-4 max-w-4xl"
        >
          {/* Decorative Top Flourish */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-gold-400" />
              <span className="text-4xl text-coral-400">✿</span>
              <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-gold-400 to-gold-400" />
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-semibold mb-6 text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className={`${greatVibes.className} font-script text-coral-400 block mb-2`}>{COUPLE_NAMES}</span>
          </motion.h1>
          
          <motion.div
            className="text-lg md:text-xl mb-12 text-charcoal/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="mb-2 font-medium">{formattedDate}</p>
            <p className="text-sage-600">Kapitan Moy, Marikina City</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/rsvp">
              <Button size="lg" variant="primary">
                RSVP Now
              </Button>
            </Link>
            <Link href="/story">
              <Button size="lg" variant="outline">
                Our Story
              </Button>
            </Link>
          </motion.div>

          {/* Decorative Bottom Flourish */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-gold-400" />
              <span className="text-3xl text-sage-400">❀</span>
              <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-gold-400 to-gold-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <svg
            className="w-6 h-6 text-sage-600"
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
        <div className="text-center max-w-5xl mx-auto">
          {/* Floral Divider Top */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="floral-divider mb-12 mx-auto max-w-xs"
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-charcoal"
          >
            Counting Down to Forever
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-sage-700 mb-12 font-body"
          >
            We can&apos;t wait to celebrate with you! 🌸
          </motion.p>
          
          <div className="bg-gradient-to-br from-coral-50 via-cream to-sage-50 rounded-3xl p-8 md:p-12 shadow-floral border border-gold-200/30">
            <Countdown targetDate={new Date(WEDDING_DATE)} />
          </div>

          {/* Floral Divider Bottom */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="floral-divider mt-12 mx-auto max-w-xs"
          />
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
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl text-coral-400">❀</span>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal">
                Welcome to Our Wedding
              </h2>
            </div>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed font-body">
              After years of love, laughter, and countless adventures together, 
              we&apos;re thrilled to invite you to celebrate the next chapter of our journey.
            </p>
            <p className="text-lg text-sage-700 mb-8 leading-relaxed font-body">
              Join us for an unforgettable day filled with joy, romance, and celebration 
              as we exchange our vows and begin our life as husband and wife.
            </p>
            <Link href="/story">
              <Button variant="outline">Read Our Story →</Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-floral border-4 border-gold-200/50"
          >
            <Image
              src="https://picsum.photos/seed/couple/800/1000"
              alt="Jhe and Eifer"
              fill
              className="object-cover"
            />
            {/* Decorative Corner Flourish */}
            <div className="absolute top-4 right-4 text-4xl text-gold-400 animate-float">✿</div>
            <div className="absolute bottom-4 left-4 text-3xl text-coral-400 animate-float" style={{ animationDelay: '2s' }}>❀</div>
          </motion.div>
        </div>
      </PageSection>

      {/* Quick Info Section */}
      <PageSection background="white">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-gold-400" />
            <span className="text-3xl text-sage-400">❀</span>
            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-gold-400 to-gold-400" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-charcoal">
            Wedding Details
          </h2>
          <p className="text-xl text-sage-700 font-body">
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
            className="text-center p-8 bg-gradient-to-br from-coral-50 to-cream rounded-3xl shadow-soft hover:shadow-floral transition-all bloom border border-gold-200/30"
          >
            <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-coral-200">
              <svg
                className="w-8 h-8 text-coral-500"
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
            <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">When</h3>
            <p className="text-charcoal/80 font-body">{formattedDate}</p>
            <p className="text-sage-700 mt-2 font-body">Ceremony at 3:30 PM</p>
            <Link href="/itinerary" className="inline-block mt-4 text-coral-500 hover:text-gold-500 font-medium font-body bloom">
              View Full Schedule →
            </Link>
          </motion.div>

          {/* Where */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 bg-gradient-to-br from-sage-50 to-cream rounded-3xl shadow-soft hover:shadow-floral transition-all bloom border border-gold-200/30"
          >
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-sage-200">
              <svg
                className="w-8 h-8 text-sage-600"
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
            <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">Where</h3>
            <p className="text-charcoal/80 font-body">Kapitan Moy Restaurant</p>
            <p className="text-sage-700 mt-2 font-body">Marikina City</p>
            <Link href="/venue" className="inline-block mt-4 text-sage-600 hover:text-gold-500 font-medium font-body bloom">
              Get Directions →
            </Link>
          </motion.div>

          {/* RSVP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 bg-gradient-to-br from-gold-50 to-cream rounded-3xl shadow-soft hover:shadow-floral transition-all bloom border border-gold-200/50"
          >
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold-200">
              <svg
                className="w-8 h-8 text-gold-600"
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
            <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">RSVP</h3>
            <p className="text-charcoal/80 font-body">Please respond by</p>
            <p className="text-gold-700 mt-2 font-semibold font-body">May 15, 2026</p>
            <Link href="/rsvp" className="inline-block mt-4">
              <Button variant="primary" size="sm">
                RSVP Now ✿
              </Button>
            </Link>
          </motion.div>
        </div>
      </PageSection>
    </div>
  );
}
