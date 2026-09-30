import { motion } from 'framer-motion';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  arrow?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  arrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98]';

  const variants = {
    primary:
      'bg-primary text-warm-white hover:bg-primary/90 shadow-[0_4px_20px_-8px_rgba(23,23,23,0.4)]',
    secondary:
      'bg-transparent text-primary border border-border hover:border-primary/60 hover:bg-primary/[0.03]',
    ghost:
      'bg-transparent text-muted hover:text-primary',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span className="relative">
        {children}
        {arrow && (
          <motion.span
            aria-hidden
            className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </motion.span>
        )}
      </span>
    </button>
  );
}
