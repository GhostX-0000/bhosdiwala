import { motion } from 'framer-motion';

interface IntroSectionProps {
  onContinue: () => void;
}

export default function IntroSection({ onContinue }: IntroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="max-w-[600px] w-full text-center"
      >
        <p className="text-lg md:text-xl text-secondary mb-12 font-light">
          for Khola.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            I know you're upset.
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-2">
            And I know I hurt you.
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            So I made something
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            instead of just saying sorry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
        >
          <button
            onClick={onContinue}
            className="px-8 py-3.5 border border-border text-primary text-sm font-medium rounded-sm
                       hover:border-primary transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background
                       min-h-[48px]"
          >
            Continue
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
