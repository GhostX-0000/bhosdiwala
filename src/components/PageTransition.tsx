import { motion, type Transition } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  background?: string;
}

const containerTransition: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

export default function PageTransition({ children, background }: PageTransitionProps) {
  return (
    <motion.div
      className="relative min-h-screen w-full"
      style={background ? { background } : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={containerTransition}
    >
      {/* Staggered reveal container */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)', scale: 0.985 }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        exit={{ opacity: 0, y: -15, filter: 'blur(4px)', scale: 0.99 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Staggered child wrapper for sequential reveals
export function Stagger({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
