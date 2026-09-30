import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import Button from './Button';
import content from '../data/content';

interface SceneThreeProps {
  onComplete: () => void;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-soft-accent font-medium">{children}</span>;
}

export default function SceneThree({ onComplete }: SceneThreeProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 30%, rgba(139, 58, 69, 0.18), transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(217, 184, 188, 0.08), transparent 50%), #171717"
      align="start"
    >
      <div className="max-w-[600px] w-full mx-auto">
        {/* Message 8 — "I want you back" */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 md:mb-20"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-warm-white/90 leading-[1.5] font-light tracking-tight">
            <Highlight>I want you back</Highlight> da cycle odrawa bska os
          </p>
        </motion.div>

        {/* Continue to final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 mb-12 text-center"
        >
          <Button
            variant="secondary"
            arrow
            onClick={onComplete}
            className="!border-border-dark/40 !text-warm-white/70 hover:!border-warm-white/30 hover:!text-warm-white"
          >
            Continue
          </Button>
        </motion.div>

        {/* Spacer */}
        <div className="h-10" />
      </div>
    </PageTransition>
  );
}
