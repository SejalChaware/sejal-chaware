
import { Section } from '../layout/Section';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import data from '../../data.json';
import { Magnetic } from '../ui/Magnetic';

export function Projects() {
  return (
    <Section id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ marginBottom: '6rem' }}
      >
        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1 }}>FEATURED<br/>WORK</h2>
      </motion.div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        {data.projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={1500} style={{ transformStyle: "preserve-3d" }}>
              <GlassCard className={`project-card ${index % 2 === 0 ? 'even' : 'odd'}`}>
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, filter: 'grayscale(20%)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: index % 2 === 0 ? 'linear-gradient(to right, transparent, var(--glass-bg))' : 'linear-gradient(to left, transparent, var(--glass-bg))' }}></div>
                </div>
                <div className="project-content-container">
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>{project.title}</h3>
                  <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{project.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        style={{
                          fontSize: '0.875rem',
                          padding: '0.5rem 1rem',
                          border: '1px solid var(--glass-border)',
                          borderRadius: '999px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Magnetic strength={0.2}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-glass"
                      style={{ width: 'fit-content' }}
                    >
                      View Live <ExternalLink size={20} />
                    </a>
                  </Magnetic>
                </div>
              </GlassCard>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
