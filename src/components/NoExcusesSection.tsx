import { motion } from 'framer-motion';

interface NoExcusesSectionProps {
  onContinue: () => void;
}

export default function NoExcusesSection({ onContinue }: NoExcusesSectionProps) {
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            I don't expect you
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            to forget it.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            I don't expect everything
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            to suddenly be okay.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            And I definitely don't expect
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            you to forgive me just because
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            I made this website.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-8">
            I just want you to know that
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            I genuinely regret it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            You deserved better
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            from me that day.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            And I want to do better now.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
        >
          <button
            onClick={onContinue}
            className="px-8 py-3.5 border border-border text-primary text-sm font-medium rounded-sm
                       hover:border-primary transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background
                       min-h-[48px]"
          >
            There's more →
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
