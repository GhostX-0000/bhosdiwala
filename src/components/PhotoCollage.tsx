import { motion } from 'framer-motion';

export default function PhotoCollage() {
  const photos = [
    '/photos/photo-1.jpg',
    '/photos/photo-2.jpg',
    '/photos/photo-3.jpg',
    '/photos/photo-4.jpg',
    '/photos/photo-5.jpg',
    '/photos/photo-6.jpg',
    '/photos/photo-7.jpg',
  ];

  // Scrapbook layout with varied sizes and subtle rotations
  const layout = [
    { size: 'large', rotation: -2, delay: 0.2 },
    { size: 'medium', rotation: 1.5, delay: 0.4 },
    { size: 'small', rotation: -1, delay: 0.6 },
    { size: 'medium', rotation: 2, delay: 0.8 },
    { size: 'large', rotation: -1.5, delay: 1.0 },
    { size: 'small', rotation: 1, delay: 1.2 },
    { size: 'medium', rotation: -2, delay: 1.4 },
  ];

  const getWidthClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'w-full md:w-[calc(50%-8px)]';
      case 'medium':
        return 'w-full md:w-[calc(33.333%-10px)]';
      case 'small':
        return 'w-full md:w-[calc(33.333%-10px)]';
      default:
        return 'w-full md:w-[calc(33.333%-10px)]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="w-full max-w-[600px] mx-auto mb-16 md:mb-20 px-4"
    >
      <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
        {photos.map((photo, index) => {
          const { size, rotation, delay } = layout[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: rotation }}
              transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${getWidthClass(size)} relative rounded-lg shadow-2xl bg-black`}
              style={{
                border: '2px solid rgba(232, 180, 188, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
              }}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-auto block rounded-lg"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 50, 74, 0.1) 0%, transparent 50%)',
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
