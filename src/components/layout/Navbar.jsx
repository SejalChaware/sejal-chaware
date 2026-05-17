import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import data from '../../data.json';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass' : 'bg-transparent'
      )}
      style={{
        padding: '1rem 2rem',
        borderRadius: scrolled ? '0 0 32px 32px' : '0',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        margin: '0 auto',
        maxWidth: scrolled ? '1400px' : '100%',
        marginTop: scrolled ? '1rem' : '0'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {data.personal.name.split(' ')[0]}<span style={{ color: 'var(--text-secondary)' }}>.</span>
        </a>
        
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#about" style={{ fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>About</a>
          <a href="#projects" style={{ fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects</a>
          <a href="#experience" style={{ fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>Hire Me</a>
        </nav>
      </div>
    </header>
  );
}
