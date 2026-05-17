import React from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import data from '../../data.json';

export function Hero() {
  return (
    <Section id="hero" className="pt-32 pb-20">
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        gap: '2rem'
      }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--glass-border)',
            boxShadow: 'var(--glass-shadow)'
          }}
        >
          <img 
            src={data.personal.profileImage} 
            alt={data.personal.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        
        <div style={{ maxWidth: '800px' }}>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '1rem' }}
          >
            Hi, I'm {data.personal.name.split(' ')[0]} 👋
          </motion.h1>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              color: 'var(--text-secondary)',
              fontWeight: 400,
              fontSize: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            {data.personal.role}
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginBottom: '3rem', fontSize: '1.25rem' }}
          >
            {data.objective}
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
          >
            <Button href="#projects" variant="primary">
              View Work <ArrowRight size={18} />
            </Button>
            <Button href="/Sejal_Chaware_Resume.docx" variant="glass" download>
              <FileText size={18} /> Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
