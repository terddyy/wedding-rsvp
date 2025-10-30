'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageSection from '@/components/ui/PageSection';
import { STORY_MILESTONES } from '@/lib/constants';

export default function StoryPage() {
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
            Our Love Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Every great love story has a beginning. Here&apos;s ours...
          </p>
        </motion.div>
      </PageSection>

      {/* Timeline */}
      <PageSection background="white">
        <div className="max-w-4xl mx-auto">
          {STORY_MILESTONES.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 mb-16 md:mb-24 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                  {milestone.image && (
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                    {milestone.date}
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>

      {/* Quote Section */}
      <PageSection background="secondary">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <svg
            className="w-16 h-16 text-primary-400 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-gray-900 mb-6">
            &ldquo;In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.&rdquo;
          </blockquote>
          <p className="text-lg text-gray-600">— Maya Angelou</p>
        </motion.div>
      </PageSection>
    </div>
  );
}
