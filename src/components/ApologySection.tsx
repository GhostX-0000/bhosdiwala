import { motion } from 'framer-motion';

interface ApologySectionProps {
  onContinue: () => void;
}

export default function ApologySection({ onContinue }: ApologySectionProps) {
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-12 leading-tight">
          I'm sorry.
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            Not the quick 'sorry'
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            people say to move on.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            I mean it.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            I know I hurt you, and I know
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            I can't take that back.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-8">
            I could give you excuses.
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            I could explain what happened.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            But honestly...
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-4">
            none of that
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            changes how you felt.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-8">
            And I'm sorry.
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
            Keep reading →
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
