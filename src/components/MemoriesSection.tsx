import { motion } from 'framer-motion';
import content from '../data/content';

interface MemoriesSectionProps {
  onContinue: () => void;
}

const imagePaths = [
  'https://image.qwenlm.ai/generated-images/cb196ba1-0044-4363-b578-5dc17861ccd7/_result.png',
  'https://image.qwenlm.ai/generated-images/802cab24-f2b6-45b0-a965-5f10ce36e309/_result.png',
  'https://image.qwenlm.ai/generated-images/48dfda24-1f40-41cd-ac14-202b9fef17c3/_result.png',
  'https://image.qwenlm.ai/generated-images/3738e4f1-e60c-41e1-b3b7-bd1a4925d91f/_result.png',
];

export default function MemoriesSection({ onContinue }: MemoriesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      <div className="max-w-[600px] w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-semibold text-primary mb-10"
        >
          Before you go...
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {imagePaths.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: 'easeOut' }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm border border-border aspect-[4/3] bg-border/30">
                <img
                  src={src}
                  alt={content.photoAltText[index]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-sm text-secondary mt-3 font-light">
                {content.photoCaptions[index]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
        >
          <button
            onClick={onContinue}
            className="px-8 py-3.5 border border-border text-primary text-sm font-medium rounded-sm
                       hover:border-primary transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background
                       min-h-[48px]"
          >
            One last thing →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
