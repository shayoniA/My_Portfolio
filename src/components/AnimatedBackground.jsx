import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="bg-orbit" aria-hidden="true">
      <motion.div
        className="orb orb-a"
        animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-b"
        animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-c"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="grid-overlay" />
    </div>
  );
}
