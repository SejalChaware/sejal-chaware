import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, .magnetic')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Avoid rendering custom cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return <div className="noise"></div>;
  }

  return (
    <>
      <div className="noise"></div>
      
      {/* Background Spotlight */}
      <motion.div 
        className="spotlight"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      />
      
      {/* Custom Cursor Ring */}
      <motion.div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', mass: 0.1, stiffness: 100, damping: 10 }}
      />
      
      {/* Custom Cursor Dot */}
      <motion.div
        className="custom-cursor-dot"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
    </>
  );
}
