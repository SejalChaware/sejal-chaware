import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Section({ id, children, className, containerClass }) {
  return (
    <section id={id} className={cn('section', className)}>
      <motion.div 
        className={cn('container', containerClass)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
