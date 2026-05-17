import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from '../../store';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../../lib/utils';
import data from '../../data.json';

export function Navbar() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass' : 'bg-transparent'
      )}
      style={{
        padding: '1rem 2rem',
        borderRadius: scrolled ? '0 0 24px 24px' : '0',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        margin: '0 auto',
        maxWidth: scrolled ? '1200px' : '100%',
        marginTop: scrolled ? '1rem' : '0'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
          {data.personal.name.split(' ')[0]}<span style={{ color: 'var(--text-secondary)' }}>.</span>
        </a>
        
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#about" style={{ fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
          <a href="#experience" style={{ fontWeight: 500 }}>Experience</a>
          <button 
            onClick={toggleTheme}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '50%'
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
