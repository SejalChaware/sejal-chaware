import React from 'react';
import { Section } from '../layout/Section';
import { GlassCard } from '../ui/GlassCard';
import data from '../../data.json';

export function About() {
  return (
    <Section id="about">
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2>About Me</h2>
        <p>Skills & Personal Details</p>
      </div>
      
      <div className="grid-2">
        <GlassCard>
          <h3>Technical Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
            {data.skills.map((skill, index) => (
              <span 
                key={index}
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>
        
        <GlassCard>
          <h3>Personal Details</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Location</span>
              <span style={{ fontWeight: 500 }}>{data.personal.location}</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Languages</span>
              <span style={{ fontWeight: 500 }}>{data.personal.languages.join(', ')}</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Email</span>
              <span style={{ fontWeight: 500 }}>{data.personal.email}</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Phone</span>
              <span style={{ fontWeight: 500 }}>{data.personal.phone}</span>
            </li>
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
}
