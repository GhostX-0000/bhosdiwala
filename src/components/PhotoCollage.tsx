import { motion } from 'framer-motion';

export default function PhotoCollage() {
  const photos = [
    'https://image.qwenlm.ai/generated-images/0377bb93-3a98-45fd-bb30-8c55d1a38507/_result.png',
    'https://image.qwenlm.ai/generated-images/db54bfe8-e9c5-4a47-9d4b-a40bc4f30fe1/_result.png',
    'https://image.qwenlm.ai/generated-images/b84a5373-363d-4e65-adce-6ebf22e20d48/_result.png',
    'https://image.qwenlm.ai/generated-images/f7972cc9-e497-4b77-8dbd-0107ca5ae75a/_result.png',
    'https://image.qwenlm.ai/generated-images/7e917d45-8ce1-4f5a-9db6-074bc90ae16a/_result.png',
    'https://image.qwenlm.ai/generated-images/7f7025e0-70c3-4954-b1df-641692e150e3/_result.png',
    'https://image.qwenlm.ai/generated-images/f5b877df-9163-4e45-882c-b122050d3f4d/_result.png',
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

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 aspect-square';
      case 'medium':
        return 'col-span-1 row-span-1 aspect-square';
      case 'small':
        return 'col-span-1 row-span-1 aspect-square';
      default:
        return 'col-span-1 row-span-1 aspect-square';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="w-full max-w-[600px] mx-auto mb-16 md:mb-20 px-4"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
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
              className={`${getSizeClasses(size)} relative overflow-hidden rounded-lg shadow-2xl`}
              style={{
                border: '2px solid rgba(232, 180, 188, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
              }}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
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
