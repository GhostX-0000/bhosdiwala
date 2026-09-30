import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';

interface QuestionSectionProps {
  onYes: () => void;
  onNoGiveUp: () => void;
}

const noTexts = [
  "Are you sure?",
  "Really? :(",
  "Okay... you're making this hard.",
  "One chance?",
  "I'll stop bothering you.\nJust hear me out first.",
];

export default function QuestionSection({ onYes, onNoGiveUp }: QuestionSectionProps) {
  const [attempt, setAttempt] = useState(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number } | null>(null);
  const [noRotation, setNoRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const maxAttempts = noTexts.length;
  const hasGivenUp = attempt >= maxAttempts;

  const moveButton = useCallback(() => {
    if (hasGivenUp) return;

    const container = containerRef.current;
    const yesBtn = yesButtonRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const yesRect = yesBtn?.getBoundingClientRect();

    const moveRange = 110;

    let newX = (Math.random() - 0.5) * moveRange * 2;
    let newY = (Math.random() - 0.5) * moveRange * 0.8;

    const halfWidth = 120;
    const maxLeft = containerRect.width / 2 - halfWidth - 16;
    newX = Math.max(-maxLeft, Math.min(maxLeft, newX));
    newY = Math.max(-70, Math.min(70, newY));

    if (yesRect) {
      const yesCenterX = yesRect.left + yesRect.width / 2 - containerRect.left - containerRect.width / 2;
      const yesCenterY = yesRect.top + yesRect.height / 2 - containerRect.top - containerRect.height / 2;

      const distX = Math.abs(newX - yesCenterX);
      const distY = Math.abs(newY - yesCenterY);

      if (distX < 100 && distY < 60) {
        newX = newX > yesCenterX ? newX + 80 : newX - 80;
        newX = Math.max(-maxLeft, Math.min(maxLeft, newX));
      }
    }

    setNoPosition({ x: newX, y: newY });
    setNoRotation((Math.random() - 0.5) * 3);
  }, [hasGivenUp]);

  const handleNoInteract = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (hasGivenUp) {
      onNoGiveUp();
      return;
    }

    setAttempt(prev => prev + 1);
    moveButton();
  }, [hasGivenUp, moveButton, onNoGiveUp]);

  useEffect(() => {
    if (hasGivenUp) {
      setNoPosition(null);
      setNoRotation(0);
    }
  }, [hasGivenUp]);

  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 30%, rgba(217, 184, 188, 0.15), transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(139, 58, 69, 0.04), transparent 50%), #F5F2ED"
    >
      <div ref={containerRef} className="max-w-[640px] w-full text-center relative overflow-visible">
        {/* Eyebrow */}
        <Stagger delay={0.3} className="mb-8">
          <p className="text-[11px] tracking-[0.35em] uppercase text-muted/70 font-light">
            one question
          </p>
        </Stagger>

        {/* Main heading */}
        <Stagger delay={0.5}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-10 leading-[1.1] tracking-tight">
            Can we try
            <br />
            <span className="italic font-serif text-accent">again?</span>
          </h1>
        </Stagger>

        {/* Supporting text */}
        <Stagger delay={0.8} className="mb-14">
          <p className="text-base md:text-lg text-muted leading-relaxed font-light max-w-[440px] mx-auto">
            I know I can't undo what happened.
            <br />
            But I can try to make things right.
          </p>
        </Stagger>

        {/* Buttons */}
        <Stagger delay={1.1} className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3 w-full max-w-[260px]">
            <button
              ref={yesButtonRef}
              onClick={onYes}
              className="group w-full inline-flex items-center justify-center gap-2 px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 active:scale-[0.98] bg-primary text-warm-white hover:bg-primary/90 shadow-[0_4px_20px_-8px_rgba(23,23,23,0.4)]"
            >
              <span>Yes, let's talk</span>
              <motion.span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </motion.span>
            </button>

            <motion.button
              onPointerDown={handleNoInteract}
              onClick={hasGivenUp ? onNoGiveUp : undefined}
              animate={noPosition ? { x: noPosition.x, y: noPosition.y, rotate: noRotation, scale: 0.98 } : { x: 0, y: 0, rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="w-full inline-flex items-center justify-center px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 bg-transparent text-muted border border-border hover:border-muted/60 select-none cursor-pointer"
              style={{ touchAction: 'none', willChange: 'transform' }}
              aria-label={hasGivenUp ? "No" : "Try to click No"}
            >
              No
            </motion.button>
          </div>

          {/* Supporting text that changes */}
          <div className="mt-6 min-h-[48px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {attempt > 0 && attempt <= maxAttempts && (
                <motion.p
                  key={attempt}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm text-muted/80 font-light whitespace-pre-line text-center italic"
                >
                  {noTexts[attempt - 1]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </Stagger>
      </div>
    </PageTransition>
  );
}
