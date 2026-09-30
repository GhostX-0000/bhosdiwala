import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import content from '../data/content';

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-soft-accent font-medium">{children}</span>;
}

export default function SceneFour() {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGlow(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 40%, rgba(139, 58, 69, 0.10), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(217, 184, 188, 0.06), transparent 50%), #171717"
      align="start"
    >
      <div className="max-w-[600px] w-full mx-auto">
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

        <div className="relative z-10">
          {/* Message 9 — FINAL MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-20"
          >
            <p className="text-lg md:text-xl text-warm-white leading-[1.8] font-light">
              Os na ps om drta wem che im choosing honesty <Highlight>i need you i fckn love you</Highlight> ds dmra time drta hrsa pata da khola hrsa strgy ma patawa os
            </p>
          </motion.div>

          {/* Poetic lines */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 text-center"
          >
            <p className="text-base md:text-lg text-warm-white/60 leading-[1.8] font-light italic font-serif">
              i lost myself everytime just to feel the warmth of her love,
            </p>
            <p className="text-base md:text-lg text-warm-white/60 leading-[1.8] font-light italic font-serif mt-2">
              i yearn for the love i gave, i still yearn for those eyes
            </p>
          </motion.div>

          {/* Thin line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.0, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-soft-accent/30 to-transparent mx-auto mb-16 origin-center"
          />

          {/* Signature */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-soft-accent/70 tracking-wide leading-relaxed text-center"
          >
            — your husband, {content.senderName}
          </motion.p>

          {/* Spacer */}
          <div className="h-20" />
        </div>
      </div>
    </PageTransition>
  );
}
