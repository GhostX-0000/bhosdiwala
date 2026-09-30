import { motion } from 'framer-motion';

interface SecondQuestionSectionProps {
  onYes: () => void;
  onNo: () => void;
}

export default function SecondQuestionSection({ onYes, onNo }: SecondQuestionSectionProps) {
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
        <p className="text-sm md:text-base text-secondary mb-8 font-light">
          So after everything...
        </p>

        <p className="text-base md:text-lg text-primary mb-10 font-light">
          I have one last question.
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-10 leading-tight">
          Can you give us another chance?
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="text-base md:text-lg text-secondary leading-relaxed font-light">
            Not to pretend nothing happened.
          </p>
          <p className="text-base md:text-lg text-secondary leading-relaxed font-light mt-2">
            Not to forget the bad parts.
          </p>
          <p className="text-base md:text-lg text-secondary leading-relaxed font-light mt-4">
            But to try again.
          </p>
          <p className="text-base md:text-lg text-secondary leading-relaxed font-light mt-2">
            To talk.
          </p>
          <p className="text-base md:text-lg text-secondary leading-relaxed font-light mt-2">
            To understand each other.
          </p>
          <p className="text-base md:text-lg text-secondary leading-relaxed font-light mt-4">
            And hopefully...
          </p>
          <p className="text-base md:text-lg text-secondary leading-relaxed font-light mt-2">
            to make things better together.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="text-lg md:text-xl text-primary font-medium mb-8"
        >
          Can we try again?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={onYes}
            className="px-8 py-3.5 bg-primary text-background text-sm font-medium rounded-sm
                       hover:bg-primary/90 transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background
                       min-h-[48px] w-full max-w-[240px]"
          >
            Yes ❤️
          </button>

          <button
            onClick={onNo}
            className="px-8 py-3.5 border border-border text-secondary text-sm font-medium rounded-sm
                       hover:border-secondary transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background
                       min-h-[48px] w-full max-w-[240px]"
          >
            No
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
