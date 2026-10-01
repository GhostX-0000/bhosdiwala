import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition, { Stagger } from './PageTransition';
import NoButton from './NoButton';
import YesButton from './YesButton';
import content from '../data/content';

interface SceneOneProps {
  onComplete: () => void;
}

/**
 * Page 1 — State Machine
 * 
 * State 0: Opening "for Khola." → "i wanna start over again" + Yes/No (No moves)
 * State 1: "za mari waps sha, no option paki nishta" + Yes/No (No moves)
 * State 2: "ta pa khabara na poegi click yes and listen to me" + Yes/No (No moves)
 * State 3: Same as state 2 + Yes ONLY (no No button)
 * 
 * Only clicking Yes advances to Page 2.
 */
export default function SceneOne({ onComplete }: SceneOneProps) {
  const [noAttempts, setNoAttempts] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleNoClick = () => {
    setNoAttempts((prev) => Math.min(prev + 1, 3));
  };

  const handleYesClick = () => {
    onComplete();
  };

  // After opening animation completes (~2s), show the question
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestion(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 20%, rgba(217, 184, 188, 0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(139, 58, 69, 0.06), transparent 50%), #F5F2ED"
    >
      <div className="max-w-[640px] w-full text-center flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!showQuestion ? (
            <motion.div
              key="opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center"
            >
              {/* Subtle glow behind the name */}
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(217, 184, 188, 0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* "for" — small, elegant */}
              <Stagger delay={0.3}>
                <p className="text-sm md:text-base text-muted/70 font-light tracking-wide mb-2 relative z-10">
                  for
                </p>
              </Stagger>

              {/* "Khola." — large with gradient accent */}
              <Stagger delay={0.6}>
                <h1
                  className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-8 relative z-10"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #8B3A45 0%, #D9B8BC 40%, #B8860B 70%, #8B3A45 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {content.girlfriendName}.
                </h1>
              </Stagger>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center w-full"
            >
              {/* State 0: Original question */}
              {noAttempts === 0 && (
                <>
                  <Stagger delay={0.2}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary leading-[1.15] tracking-tight mb-14">
                      i wanna start over again
                    </h2>
                  </Stagger>

                  <Stagger delay={0.5} className="flex flex-col items-center gap-3 w-full max-w-[260px]">
                    <YesButton onClick={handleYesClick} />
                    <NoButton onClick={handleNoClick} />
                  </Stagger>
                </>
              )}

              {/* State 1: First No message */}
              {noAttempts === 1 && (
                <>
                  <Stagger delay={0.2}>
                    <p className="text-xl md:text-2xl lg:text-[26px] font-light text-primary leading-relaxed tracking-tight mb-4 italic font-serif">
                      {content.noMessages[0]}
                    </p>
                  </Stagger>

                  <Stagger delay={0.4} className="mb-14">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-6" />
                  </Stagger>

                  <Stagger delay={0.6} className="flex flex-col items-center gap-3 w-full max-w-[260px]">
                    <YesButton onClick={handleYesClick} />
                    <NoButton onClick={handleNoClick} />
                  </Stagger>
                </>
              )}

              {/* State 2: Second No message */}
              {noAttempts === 2 && (
                <>
                  <Stagger delay={0.2}>
                    <p className="text-xl md:text-2xl lg:text-[26px] font-light text-primary leading-relaxed tracking-tight mb-4">
                      {content.noMessages[1]}
                    </p>
                  </Stagger>

                  <Stagger delay={0.4} className="mb-14">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-6" />
                  </Stagger>

                  <Stagger delay={0.6} className="flex flex-col items-center gap-3 w-full max-w-[260px]">
                    <YesButton onClick={handleYesClick} />
                    <NoButton onClick={handleNoClick} />
                  </Stagger>
                </>
              )}

              {/* State 3: Only Yes button */}
              {noAttempts >= 3 && (
                <>
                  <Stagger delay={0.2}>
                    <p className="text-xl md:text-2xl lg:text-[26px] font-light text-primary leading-relaxed tracking-tight mb-4">
                      {content.noMessages[1]}
                    </p>
                  </Stagger>

                  <Stagger delay={0.4} className="mb-14">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-6" />
                  </Stagger>

                  <Stagger delay={0.6}>
                    <YesButton onClick={handleYesClick} />
                  </Stagger>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
