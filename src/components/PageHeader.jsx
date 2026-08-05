import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, description, action }) {
  return (
    <section className="page-header">
      <motion.div
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="lede"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {description}
      </motion.p>
      {action ? <div className="page-action">{action}</div> : null}
    </section>
  );
}
