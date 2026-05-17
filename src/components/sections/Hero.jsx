
import { Section } from '../layout/Section';
import { Magnetic } from '../ui/Magnetic';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import data from '../../data.json';

export function Hero() {
  return (
    <Section id="hero" className="pt-32 pb-20">
      <div className="bento-grid">
        
        {/* Main Intro Block */}
        <motion.div 
          className="glass bento-item span-12 row-span-2"
          style={{ minHeight: '400px' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ maxWidth: '800px' }}>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              SEJAL<br />CHAWARE
            </motion.h1>
            <h3 style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontWeight: 300 }}>
              {data.personal.role} crafting premium web experiences.
            </h3>
          </div>
        </motion.div>

        {/* Profile Image Block */}
        <motion.div 
          className="bento-item span-4 row-span-2"
          style={{ padding: 0, overflow: 'hidden', position: 'relative' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000} style={{ width: '100%', height: '100%' }}>
            <div className="glass" style={{ width: '100%', height: '100%', borderRadius: '32px', overflow: 'hidden' }}>
              <img 
                src={data.personal.profileImage} 
                alt={data.personal.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.1)' }}
              />
            </div>
          </Tilt>
        </motion.div>

        {/* Objective Block */}
        <motion.div 
          className="glass bento-item span-8 row-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.5rem)', lineHeight: 1.5, color: 'var(--text)' }}>
            "{data.objective}"
          </p>
        </motion.div>

        {/* CTAs Block */}
        <motion.div 
          className="glass bento-item span-8 row-span-1 hero-buttons"
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic strength={0.3}>
            <Button href="#projects" variant="primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
              View Work <ArrowRight size={20} />
            </Button>
          </Magnetic>
          
          <Magnetic strength={0.2}>
            <Button href="/Sejal_Chaware_Resume.docx" variant="glass" download style={{ padding: '1rem 2rem', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
              <FileText size={20} /> Resume
            </Button>
          </Magnetic>
        </motion.div>

      </div>
    </Section>
  );
}
