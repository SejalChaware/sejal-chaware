import React from 'react';
import { Section } from '../layout/Section';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../../data.json';

export function Projects() {
  return (
    <Section id="projects">
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2>Selected Projects</h2>
        <p>A showcase of my recent work</p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {data.projects.map((project, index) => (
          <GlassCard key={index} style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px', minHeight: '250px', background: 'var(--glass-border)' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flex: '1 1 300px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ marginBottom: '1.5rem' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.75rem',
                        background: 'var(--accent)',
                        color: 'var(--accent-text)',
                        borderRadius: '999px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, width: 'fit-content' }}
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
