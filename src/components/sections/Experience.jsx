import React from 'react';
import { Section } from '../layout/Section';
import { GlassCard } from '../ui/GlassCard';
import data from '../../data.json';

export function Experience() {
  return (
    <Section id="experience">
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2>Experience & Education</h2>
        <p>My academic and professional journey</p>
      </div>
      
      <div className="grid-2">
        <div>
          <h3 style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '4px solid var(--accent)' }}>Certifications</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.certifications.map((cert, index) => (
              <GlassCard key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{cert.title}</h4>
                    <span style={{ color: 'var(--text-secondary)' }}>{cert.institute}</span>
                  </div>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    background: 'var(--glass-bg)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '999px',
                    fontSize: '0.875rem'
                  }}>
                    {cert.year}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{cert.description}</p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span>Duration: {cert.duration}</span>
                  <span>•</span>
                  <span>Mode: {cert.mode}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '4px solid var(--accent)' }}>Education</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.education.map((edu, index) => (
              <GlassCard key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                    <span style={{ color: 'var(--text-secondary)' }}>{edu.institution}</span>
                  </div>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    background: 'var(--glass-bg)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '999px',
                    fontSize: '0.875rem'
                  }}>
                    {edu.year}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span>Score: {edu.score}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
