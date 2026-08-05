import { motion } from 'framer-motion';

export default function RevealCard({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`glass-card ${className}`.trim()}
      initial={{ opacity: 0, y: 18, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
