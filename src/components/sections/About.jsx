
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import data from '../../data.json';
import { MapPin, Globe, Mail } from 'lucide-react';

export function About() {
  return (
    <Section id="about">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ marginBottom: '6rem' }}
      >
        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1 }}>BEHIND THE<br/>CODE</h2>
      </motion.div>
      
      <div className="bento-grid">
        
        {/* Scrolling Ticker for Skills */}
        <motion.div 
          className="glass bento-item"
          style={{ gridColumn: 'span 12', padding: '3rem 0', overflow: 'hidden', display: 'flex', alignItems: 'center' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', width: 'max-content', animation: 'scroll 20s linear infinite' }}>
            {/* Double the array for seamless scrolling */}
            {[...data.skills, ...data.skills, ...data.skills, ...data.skills].map((skill, index) => (
              <span 
                key={index}
                style={{
                  fontSize: 'clamp(2rem, 4vw, 4rem)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  textTransform: 'uppercase',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255,255,255,0.5)',
                  marginRight: '3rem',
                  whiteSpace: 'nowrap'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Location Bento */}
        <motion.div 
          className="glass bento-item"
          style={{ gridColumn: 'span 4', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <MapPin size={48} style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }} />
          <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>BASE</h4>
          <span style={{ fontSize: '1.5rem', fontWeight: 500 }}>{data.personal.location}</span>
        </motion.div>

        {/* Languages Bento */}
        <motion.div 
          className="glass bento-item"
          style={{ gridColumn: 'span 4', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Globe size={48} style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }} />
          <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>LANGUAGES</h4>
          <span style={{ fontSize: '1.5rem', fontWeight: 500 }}>{data.personal.languages.join(' • ')}</span>
        </motion.div>

        {/* Email Bento */}
        <motion.div 
          className="glass bento-item"
          style={{ gridColumn: 'span 4', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Mail size={48} style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }} />
          <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>COMMUNICATION</h4>
          <span style={{ fontSize: '1.25rem', fontWeight: 500 }}>{data.personal.email}</span>
        </motion.div>

      </div>
    </Section>
  );
}
