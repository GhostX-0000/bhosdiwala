import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';

export default function FinalLetter() {
  const [showHeart, setShowHeart] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const heartTimer = setTimeout(() => setShowHeart(true), 2000);
    const finalTimer = setTimeout(() => setShowFinal(true), 4000);

    return () => {
      clearTimeout(heartTimer);
      clearTimeout(finalTimer);
    };
  }, []);

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
            If you're reading this,
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            then you made it this far.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-8">
            I don't know what you're
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            feeling right now.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            Maybe you're still angry.
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-2">
            Maybe you're hurt.
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-2">
            Maybe you're smiling.
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-2">
            Maybe all three.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-8">
            Whatever it is...
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-2">
            it's okay.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-8">
            I just wanted you to know
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            that I'm sorry, {content.girlfriendName}.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-6">
            I love you, and I don't
          </p>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light">
            want to lose you.
          </p>

          <p className="text-base md:text-lg text-primary leading-relaxed font-light mt-8">
            Thank you for hearing me out.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="text-base md:text-lg text-secondary font-light italic mb-8"
        >
          — {content.senderName}
        </motion.p>

        {/* Heart that appears after delay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showHeart ? 1 : 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="text-2xl" role="img" aria-label="heart">❤️</span>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showFinal ? 1 : 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          <p className="text-sm md:text-base text-secondary leading-relaxed font-light">
            Whatever happens next,
          </p>
          <p className="text-sm md:text-base text-secondary leading-relaxed font-light mt-1">
            I hope you're okay.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
