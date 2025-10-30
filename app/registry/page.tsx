'use client';

import { motion } from 'framer-motion';
import PageSection from '@/components/ui/PageSection';
import Button from '@/components/ui/Button';
import { REGISTRY } from '@/lib/constants';

export default function RegistryPage() {
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
            Gift Registry
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Your presence is the greatest gift, but if you wish to honor us with something special, 
            we&apos;ve registered at the following stores
          </p>
        </motion.div>
      </PageSection>

      {/* Registry Cards */}
      <PageSection background="white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REGISTRY.map((store, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-8 text-center border-2 border-gray-100"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-primary-600"
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
                <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                  {store.name}
                </h3>
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="lg">
                    View Registry
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Cash Fund Section */}
      <PageSection background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-white rounded-lg shadow-xl p-12">
            <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-accent-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">
              Honeymoon Fund
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We&apos;re also accepting contributions toward our honeymoon adventure. 
              We&apos;re planning an amazing trip to explore new places and create 
              unforgettable memories together.
            </p>
            <p className="text-gray-600 mb-8">
              If you&apos;d like to contribute to our honeymoon fund, please reach out 
              to us directly or use one of our registry links above where a honeymoon 
              fund option is available.
            </p>
          </div>
        </motion.div>
      </PageSection>

      {/* Thank You Message */}
      <PageSection background="white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <svg
            className="w-16 h-16 text-primary-400 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">
            Thank You
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are incredibly grateful for your love, support, and generosity. 
            Your presence at our wedding means the world to us, and any gift you 
            choose to give is sincerely appreciated.
          </p>
        </motion.div>
      </PageSection>
    </div>
  );
}
