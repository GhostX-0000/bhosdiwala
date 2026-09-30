import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';
import NoButton from './NoButton';
import content from '../data/content';

interface SceneOneProps {
  onComplete: () => void;
}

export default function SceneOne({ onComplete }: SceneOneProps) {
  const [phase, setPhase] = useState<'question' | 'no-message'>('question');

  const handleNoGiveUp = () => {
    setPhase('no-message');
  };

  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 20%, rgba(217, 184, 188, 0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(139, 58, 69, 0.06), transparent 50%), #F5F2ED"
    >
      <AnimatePresence mode="wait">
        {phase === 'question' ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[640px] w-full text-center flex flex-col items-center"
          >
            {/* Eyebrow */}
            <Stagger delay={0.3} className="mb-14">
              <p className="text-[11px] tracking-[0.35em] uppercase text-muted/70 font-light">
                {content.openingEyebrow}
              </p>
            </Stagger>

            {/* Decorative line */}
            <Stagger delay={0.5} className="mb-14">
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-border to-transparent" />
            </Stagger>

            {/* Intro text */}
            <Stagger delay={0.7} className="mb-10">
              <p className="text-base md:text-lg text-muted font-light leading-relaxed">
                {content.openingIntro}
              </p>
            </Stagger>

            {/* Main question */}
            <Stagger delay={0.9} className="mb-14">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary leading-[1.15] tracking-tight">
                {content.openingQuestion}
              </h1>
            </Stagger>

            {/* Buttons */}
            <Stagger delay={1.2} className="flex flex-col items-center gap-3 w-full max-w-[260px]">
              <Button variant="primary" onClick={onComplete} className="w-full">
                Yes
              </Button>
              <NoButton playful onGiveUp={handleNoGiveUp} />
            </Stagger>
          </motion.div>
        ) : (
          <motion.div
            key="no-message"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[640px] w-full text-center flex flex-col items-center"
          >
            {/* The no message */}
            <Stagger delay={0.2}>
              <p className="text-xl md:text-2xl lg:text-[26px] font-light text-primary leading-relaxed tracking-tight mb-4 italic font-serif">
                {content.firstNoMessage}
              </p>
            </Stagger>

            <Stagger delay={0.5} className="mb-14">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-8" />
            </Stagger>

            {/* Buttons */}
            <Stagger delay={0.7} className="flex flex-col items-center gap-3 w-full max-w-[260px]">
              <Button variant="primary" onClick={onComplete} className="w-full">
                Yes
              </Button>
              <NoButton onClick={onComplete} />
            </Stagger>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
