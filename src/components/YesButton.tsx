import { motion } from 'framer-motion';

interface YesButtonProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function YesButton({ onClick, className = '', children = 'Yes' }: YesButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group w-full max-w-[260px] inline-flex items-center justify-center gap-2 px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 active:scale-[0.98] bg-primary text-warm-white hover:bg-primary/90 shadow-[0_4px_20px_-8px_rgba(23,23,23,0.4)] ${className}`}
    >
      <span>{children}</span>
      <motion.span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </motion.span>
    </button>
  );
}
