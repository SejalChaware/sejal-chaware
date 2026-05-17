import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function GlassCard({ children, className, ...props }) {
  return (
    <motion.div
      className={cn('glass', 'p-6 sm:p-8', className)}
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
