'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'primary' | 'secondary' | 'transparent';
  delay?: number;
}

const PageSection = ({
  children,
  className = '',
  id,
  background = 'white',
  delay = 0,
}: PageSectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
    transparent: 'bg-transparent',
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
};

export default PageSection;
