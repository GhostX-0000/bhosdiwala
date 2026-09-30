import { motion, AnimatePresence } from 'framer-motion';

interface ProgressProps {
  current: number;
  total: number;
  visible: boolean;
}

export default function Progress({ current, total, visible }: ProgressProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-6 right-6 z-50 flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted/70 font-light"
          aria-label={`Step ${current} of ${total}`}
        >
          <span className="font-medium text-primary/70 tabular-nums">
            {String(current).padStart(2, '0')}
          </span>
          <span className="text-muted/40">/</span>
          <span className="tabular-nums">{String(total).padStart(2, '0')}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
