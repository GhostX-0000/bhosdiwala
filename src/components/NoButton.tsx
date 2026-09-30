import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface NoButtonProps {
  /** When true, button moves playfully on each tap. After maxAttempts, calls onGiveUp. */
  playful?: boolean;
  /** Called when playful mode exhausts attempts, OR when non-playful button is clicked. */
  onGiveUp?: () => void;
  /** Simple click handler for non-playful mode. */
  onClick?: () => void;
  maxAttempts?: number;
}

const playfulTexts = ['', 'hehe', 'nope', 'try yes?', 'just say yes'];

export default function NoButton({
  playful = false,
  onGiveUp,
  onClick,
  maxAttempts = 5,
}: NoButtonProps) {
  const [attempt, setAttempt] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const hasGivenUp = attempt >= maxAttempts;

  const moveButton = useCallback(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Available space on each side (with 20px padding)
    const spaceLeft = rect.left - 20;
    const spaceRight = vw - rect.right - 20;
    const spaceUp = rect.top - 20;
    const spaceDown = vh - rect.bottom - 20;

    // Build list of valid directions
    const directions: { x: number; y: number }[] = [];
    const maxMove = 120;
    const minSpace = 50;

    if (spaceLeft > minSpace) {
      directions.push({ x: -Math.min(maxMove, spaceLeft - 30), y: 0 });
    }
    if (spaceRight > minSpace) {
      directions.push({ x: Math.min(maxMove, spaceRight - 30), y: 0 });
    }
    if (spaceUp > minSpace) {
      directions.push({ x: 0, y: -Math.min(80, spaceUp - 30) });
    }
    if (spaceDown > minSpace) {
      directions.push({ x: 0, y: Math.min(80, spaceDown - 30) });
    }
    // Diagonals
    if (spaceLeft > minSpace && spaceDown > minSpace) {
      directions.push({ x: -Math.min(90, spaceLeft - 30), y: Math.min(60, spaceDown - 30) });
    }
    if (spaceRight > minSpace && spaceDown > minSpace) {
      directions.push({ x: Math.min(90, spaceRight - 30), y: Math.min(60, spaceDown - 30) });
    }
    if (spaceLeft > minSpace && spaceUp > minSpace) {
      directions.push({ x: -Math.min(90, spaceLeft - 30), y: -Math.min(60, spaceUp - 30) });
    }
    if (spaceRight > minSpace && spaceUp > minSpace) {
      directions.push({ x: Math.min(90, spaceRight - 30), y: -Math.min(60, spaceUp - 30) });
    }

    if (directions.length === 0) return;

    const chosen = directions[Math.floor(Math.random() * directions.length)];
    setOffset(chosen);
    setRotation((Math.random() - 0.5) * 3);
  }, []);

  const handleInteract = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!playful) {
        onClick?.();
        return;
      }

      if (hasGivenUp) {
        onGiveUp?.();
        return;
      }

      setAttempt((prev) => prev + 1);
      moveButton();
    },
    [playful, hasGivenUp, onClick, onGiveUp, moveButton]
  );

  // Reset position when not playful
  if (!playful && (offset.x !== 0 || offset.y !== 0)) {
    setOffset({ x: 0, y: 0 });
    setRotation(0);
  }

  return (
    <div className="flex flex-col items-center">
      <motion.button
        ref={buttonRef}
        onPointerDown={handleInteract}
        onClick={!playful ? onClick : hasGivenUp ? onGiveUp : undefined}
        animate={
          playful
            ? { x: offset.x, y: offset.y, rotate: rotation, scale: offset.x ? 0.97 : 1 }
            : { x: 0, y: 0, rotate: 0, scale: 1 }
        }
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className="w-full max-w-[260px] inline-flex items-center justify-center px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 active:scale-[0.98] bg-transparent text-muted border border-border hover:border-muted/60 select-none cursor-pointer"
        style={{ touchAction: 'none', willChange: 'transform' }}
        aria-label={playful && !hasGivenUp ? 'Try to click No' : 'No'}
      >
        No
      </motion.button>

      {/* Playful text feedback */}
      {playful && attempt > 0 && attempt <= maxAttempts && (
        <motion.p
          key={attempt}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 text-xs text-muted/60 font-light italic"
        >
          {playfulTexts[attempt - 1] || ''}
        </motion.p>
      )}
    </div>
  );
}
