import { motion } from 'framer-motion';

export const Skeleton = () => {
  return (
    <div className="flex flex-col gap-3 p-4 w-full h-[180px] bg-gray-100 rounded">
      <motion.div
        className="skeleton_loading h-4 bg-gray-300 rounded"
        initial={{ backgroundPosition: '100%' }}
        animate={{ backgroundPosition: '-100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1,
          ease: 'linear',
        }}
      />
      <motion.div
        className="skeleton_loading w-1/2 h-4 bg-gray-300 rounded"
        initial={{ backgroundPosition: '100%' }}
        animate={{ backgroundPosition: '-100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1,
          ease: 'linear',
        }}
      />
      <motion.div
        className="skeleton_loading w-1/2 h-4 bg-gray-300 rounded"
        initial={{ backgroundPosition: '100%' }}
        animate={{ backgroundPosition: '-100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1,
          ease: 'linear',
        }}
      />
    </div>
  );
};
