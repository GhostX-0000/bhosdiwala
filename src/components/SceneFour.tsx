import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import content from '../data/content';

export default function SceneFour() {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGlow(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 40%, rgba(139, 58, 69, 0.10), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(217, 184, 188, 0.06), transparent 50%), #171717"
    >
      <div className="max-w-[600px] w-full text-center flex flex-col items-center">
        {/* Subtle glow that appears */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: showGlow ? 1 : 0 }}
          transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 58, 69, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Thin line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-soft-accent/30 to-transparent mb-16 origin-center"
          />

          {/* Signature */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-soft-accent/70 tracking-wide leading-relaxed"
          >
            — your husband, {content.senderName}
          </motion.p>

          {/* Subtle final message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-warm-white/40 font-light mt-12 tracking-wide"
          >
            always.
          </motion.p>
        </div>
      </div>
    </PageTransition>
  );
}
