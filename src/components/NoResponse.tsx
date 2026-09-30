import { motion } from 'framer-motion';

export default function NoResponse() {
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
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className="max-w-[600px] w-full text-center"
      >
        <p className="text-base md:text-lg text-primary leading-relaxed font-light">
          Okay.
        </p>

        <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
          I respect your answer.
        </p>

        <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
          I won't try to force you
        </p>
        <p className="text-base md:text-lg text-primary leading-relaxed font-light">
          into saying yes.
        </p>

        <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-8">
          I just want you to know
        </p>
        <p className="text-base md:text-lg text-primary leading-relaxed font-light">
          that I'm sorry.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="mt-10"
        >
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            And if someday
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            you want to talk...
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            I'll be here.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
