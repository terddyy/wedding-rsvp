'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    // Return placeholder during SSR
    return (
      <div className="flex gap-4 md:gap-8 justify-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-600 mb-2 font-mono">
              00
            </div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500">
              {['Days', 'Hours', 'Minutes', 'Seconds'][i]}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="flex gap-4 md:gap-8 lg:gap-12 justify-center items-center">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              key={unit.value}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-600 mb-2 font-mono tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </div>
            </motion.div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500 font-medium">
              {unit.label}
            </div>
          </motion.div>
          
          {/* Colon separator (except after the last unit) */}
          {index < timeUnits.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-400 mx-1 md:mx-2 mb-6"
            >
              :
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
