
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import data from '../../data.json';

export function Experience() {
  return (
    <Section id="experience">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ marginBottom: '6rem' }}
      >
        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1 }}>THE<br/>JOURNEY</h2>
      </motion.div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        
        {/* Certifications Timeline */}
        <div>
          <h3 style={{ marginBottom: '3rem', fontSize: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Certifications</h3>
          <div style={{ position: 'relative', borderLeft: '1px solid var(--glass-border)', paddingLeft: '2rem', marginLeft: '1rem' }}>
            {data.certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ position: 'relative', marginBottom: '4rem' }}
              >
                <div style={{ 
                  position: 'absolute', 
                  left: '-2.35rem', 
                  top: '0.25rem', 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: 'var(--text)',
                  boxShadow: '0 0 10px var(--text)'
                }} />
                
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{cert.year}</span>
                <h4 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '0.25rem' }}>{cert.title}</h4>
                <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>{cert.institute}</div>
                <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 style={{ marginBottom: '3rem', fontSize: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Education</h3>
          <div style={{ position: 'relative', borderLeft: '1px solid var(--glass-border)', paddingLeft: '2rem', marginLeft: '1rem' }}>
            {data.education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ position: 'relative', marginBottom: '4rem' }}
              >
                <div style={{ 
                  position: 'absolute', 
                  left: '-2.35rem', 
                  top: '0.25rem', 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: 'var(--text)',
                  boxShadow: '0 0 10px var(--text)'
                }} />
                
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{edu.year}</span>
                <h4 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>{edu.institution}</div>
                <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '999px', fontSize: '0.875rem' }}>
                  Score: {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
