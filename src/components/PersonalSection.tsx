import { motion } from 'framer-motion';
import content from '../data/content';

interface PersonalSectionProps {
  onContinue: () => void;
}

export default function PersonalSection({ onContinue }: PersonalSectionProps) {
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
        <p className="text-base md:text-lg text-primary leading-relaxed font-light mb-10">
          There are things
          <br />
          I probably don't say enough.
        </p>

        <div className="space-y-8 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="text-base md:text-lg text-primary leading-relaxed font-light"
          >
            I love {content.thingILove}.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="text-base md:text-lg text-primary leading-relaxed font-light"
          >
            I miss when we {content.thingIMiss}.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            className="text-base md:text-lg text-primary leading-relaxed font-light"
          >
            My favorite memory of us
            <br />
            is {content.favoriteMemory}.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
            className="text-base md:text-lg text-primary leading-relaxed font-light"
          >
            One thing about you
            <br />
            I'll never forget is {content.specialMemory}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
            className="pt-4"
          >
            <p className="text-base md:text-lg text-primary leading-relaxed font-light">
              And honestly...
            </p>
            <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-4">
              life feels different
            </p>
            <p className="text-base md:text-lg text-primary leading-relaxed font-light">
              when we're not okay.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: 'easeOut' }}
        >
          <button
            onClick={onContinue}
            className="px-8 py-3.5 border border-border text-primary text-sm font-medium rounded-sm
                       hover:border-primary transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background
                       min-h-[48px]"
          >
            Continue →
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
