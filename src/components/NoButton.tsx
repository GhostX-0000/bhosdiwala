import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface NoButtonProps {
  /** When true, button moves playfully on interaction */
  playful?: boolean;
  /** Called when the button is successfully clicked/tapped */
  onClick?: () => void;
}

export default function NoButton({ playful = false, onClick }: NoButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lastMoveRef = useRef(0);
  const lastTriggerRef = useRef(0);

  const moveButton = useCallback(() => {
    const now = Date.now();
    // Cooldown: don't move more than once every 800ms
    if (now - lastMoveRef.current < 800) return;
    lastMoveRef.current = now;

    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Available space on each side (with 24px padding from edges)
    const spaceLeft = rect.left - 24;
    const spaceRight = vw - rect.right - 24;
    const spaceUp = rect.top - 24;
    const spaceDown = vh - rect.bottom - 24;

    // Build list of valid directions
    const directions: { x: number; y: number }[] = [];
    const maxMove = 110;
    const minSpace = 60;

    if (spaceLeft > minSpace) {
      directions.push({ x: -Math.min(maxMove, spaceLeft - 40), y: 0 });
    }
    if (spaceRight > minSpace) {
      directions.push({ x: Math.min(maxMove, spaceRight - 40), y: 0 });
    }
    if (spaceUp > minSpace) {
      directions.push({ x: 0, y: -Math.min(70, spaceUp - 40) });
    }
    if (spaceDown > minSpace) {
      directions.push({ x: 0, y: Math.min(70, spaceDown - 40) });
    }
    // Diagonals
    if (spaceLeft > minSpace && spaceDown > minSpace) {
      directions.push({ x: -Math.min(80, spaceLeft - 40), y: Math.min(50, spaceDown - 40) });
    }
    if (spaceRight > minSpace && spaceDown > minSpace) {
      directions.push({ x: Math.min(80, spaceRight - 40), y: Math.min(50, spaceDown - 40) });
    }
    if (spaceLeft > minSpace && spaceUp > minSpace) {
      directions.push({ x: -Math.min(80, spaceLeft - 40), y: -Math.min(50, spaceUp - 40) });
    }
    if (spaceRight > minSpace && spaceUp > minSpace) {
      directions.push({ x: Math.min(80, spaceRight - 40), y: -Math.min(50, spaceUp - 40) });
    }

    if (directions.length === 0) return;

    const chosen = directions[Math.floor(Math.random() * directions.length)];
    setOffset(chosen);
    setRotation((Math.random() - 0.5) * 3);
  }, []);

  // Desktop: move on hover (pointerenter) — with cooldown
  const handlePointerEnter = useCallback(
    (e: React.PointerEvent) => {
      if (playful && e.pointerType === 'mouse') {
        moveButton();
      }
    },
    [playful, moveButton]
  );

  // Mobile: move AND advance on touch
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (playful && (e.pointerType === 'touch' || e.pointerType === 'pen')) {
        e.preventDefault();
        e.stopPropagation();
        moveButton();
        
        // Debounce: only trigger if enough time has passed since last trigger
        const now = Date.now();
        if (now - lastTriggerRef.current > 300) {
          lastTriggerRef.current = now;
          onClick?.();
        }
      }
    },
    [playful, moveButton, onClick]
  );

  // Desktop: advance on click (after hover-move)
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (playful) {
        e.stopPropagation();
        // Debounce: only trigger if enough time has passed since last trigger
        const now = Date.now();
        if (now - lastTriggerRef.current > 300) {
          lastTriggerRef.current = now;
          onClick?.();
        }
      }
    },
    [playful, onClick]
  );

  return (
    <motion.button
      ref={buttonRef}
      onPointerEnter={handlePointerEnter}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      animate={playful ? { x: offset.x, y: offset.y, rotate: rotation, scale: offset.x ? 0.97 : 1 } : { x: 0, y: 0, rotate: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      className="w-full max-w-[260px] inline-flex items-center justify-center px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 active:scale-[0.98] bg-transparent text-muted border border-border hover:border-muted/60 select-none cursor-pointer"
      style={{ touchAction: 'none', willChange: 'transform' }}
      aria-label="No"
    >
      No
    </motion.button>
  );
}
