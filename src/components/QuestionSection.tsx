import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

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

    // Calculate movement range relative to button's default position
    const moveRange = 120;

    // Generate random offset
    let newX = (Math.random() - 0.5) * moveRange * 2;
    let newY = (Math.random() - 0.5) * moveRange;

    // Ensure the button stays within the container bounds
    const halfWidth = 120; // approximate half button width
    const halfHeight = 24; // approximate half button height

    // Clamp X to prevent overflow
    const maxLeft = containerRect.width / 2 - halfWidth - 16;
    newX = Math.max(-maxLeft, Math.min(maxLeft, newX));

    // Clamp Y
    newY = Math.max(-80, Math.min(80, newY));

    // Make sure it doesn't overlap with Yes button area
    if (yesRect) {
      const yesCenterX = yesRect.left + yesRect.width / 2 - containerRect.left - containerRect.width / 2;
      const yesCenterY = yesRect.top + yesRect.height / 2 - containerRect.top - containerRect.height / 2;

      // If new position is too close to Yes button, adjust
      const distX = Math.abs(newX - yesCenterX);
      const distY = Math.abs(newY - yesCenterY);

      if (distX < 100 && distY < 60) {
        // Move further away
        newX = newX > yesCenterX ? newX + 80 : newX - 80;
        newX = Math.max(-maxLeft, Math.min(maxLeft, newX));
      }
    }

    setNoPosition({ x: newX, y: newY });
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

  // Reset position when giving up
  useEffect(() => {
    if (hasGivenUp) {
      setNoPosition(null);
    }
  }, [hasGivenUp]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      <div ref={containerRef} className="max-w-[600px] w-full text-center relative overflow-visible">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-sm md:text-base text-secondary mb-8 font-light"
        >
          I have one question.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-8 leading-tight"
        >
          Can we try again?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            I know I can't undo what happened.
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-2">
            But I can try to make things right.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4"
        >
          <button
            ref={yesButtonRef}
            onClick={onYes}
            className="px-8 py-3.5 bg-primary text-background text-sm font-medium rounded-sm
                       hover:bg-primary/90 transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background
                       min-h-[48px] w-full max-w-[240px]"
          >
            Yes, let's talk
          </button>

          <motion.button
            onPointerDown={handleNoInteract}
            onClick={hasGivenUp ? onNoGiveUp : undefined}
            animate={noPosition ? { x: noPosition.x, y: noPosition.y } : { x: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="px-8 py-3.5 border border-border text-secondary text-sm font-medium rounded-sm
                       hover:border-secondary transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background
                       min-h-[48px] w-full max-w-[240px] select-none cursor-pointer"
            style={{ touchAction: 'none', willChange: 'transform' }}
            aria-label={hasGivenUp ? "No" : "Try to click No"}
          >
            No
          </motion.button>

          {/* Supporting text that changes */}
          <div className="mt-4 min-h-[48px] flex items-center justify-center">
            <motion.div
              key={attempt}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {attempt > 0 && attempt <= maxAttempts && (
                <p className="text-sm text-secondary/70 font-light whitespace-pre-line text-center">
                  {noTexts[attempt - 1]}
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
