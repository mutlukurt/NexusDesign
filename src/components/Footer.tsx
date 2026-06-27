import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const Footer: React.FC = () => {
  const { setCursorType } = useCursor();
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Coordinates for magnetic pull
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      
      // Calculate relative coordinates from center of the button
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const relX = clientX - centerX;
      const relY = clientY - centerY;
      
      // Apply a fraction of the distance for magnetic effect
      setPosition({ x: relX * 0.35, y: relY * 0.35 });
    }
  };

  const handleMouseLeave = () => {
    setCursorType('default');
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--bg-darker)',
        paddingTop: '140px',
        paddingBottom: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--gray-border)',
      }}
      className="container-padding"
    >
      {/* Decorative lines / grid elements from reference */}
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >
        <h2
          className="heading-large"
          style={{
            fontSize: 'clamp(32px, 6vw, 72px)',
            color: 'var(--cream)',
            lineHeight: '1',
            letterSpacing: '0.02em',
          }}
        >
          EVERY RELATIONSHIP
        </h2>
        <h2
          className="heading-large text-accent"
          style={{
            fontSize: 'clamp(32px, 6vw, 72px)',
            lineHeight: '1',
            letterSpacing: '0.02em',
            marginBottom: '40px',
          }}
        >
          BEGINS WITH CONVERSATION
        </h2>

        {/* Bracket paragraph from reference */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '650px',
            margin: '0 auto',
          }}
        >
          <span style={{ fontSize: '40px', color: 'var(--orange-accent)', fontFamily: 'var(--font-syne)', fontWeight: 300 }}>[</span>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              color: 'var(--gray-text)',
              lineHeight: '1.6',
            }}
          >
            A calling for ambitious agencies, innovative clients, or futuristic collaborators. Let's create the next industry standard together.
          </p>
          <span style={{ fontSize: '40px', color: 'var(--orange-accent)', fontFamily: 'var(--font-syne)', fontWeight: 300 }}>]</span>
        </div>
      </div>

      {/* Magnetic Contact Button */}
      <div
        style={{
          height: '240px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: '80px',
        }}
      >
        <motion.div
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setCursorType('hover')}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            backgroundColor: 'var(--orange-accent)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'none',
            boxShadow: '0 10px 30px rgba(255, 90, 0, 0.3)',
          }}
        >
          <motion.a
            href="mailto:hello@nexusdesign.co"
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: '13px',
              color: '#050506',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            CONTACT US
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Footer details */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--gray-border)',
          paddingTop: '40px',
          color: 'var(--gray-text)',
          fontFamily: 'var(--font-inter)',
          fontSize: '12px',
        }}
      >
        <span>&copy; {new Date().getFullYear()} NEXUS DESIGN. ALL RIGHTS RESERVED.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a
            href="#"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
            style={{ transition: 'color 0.3s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--gray-text)')}
          >
            INSTAGRAM
          </a>
          <a
            href="#"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
            style={{ transition: 'color 0.3s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--gray-text)')}
          >
            LINKEDIN
          </a>
          <a
            href="#"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
            style={{ transition: 'color 0.3s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--gray-text)')}
          >
            BEHANCE
          </a>
        </div>
      </div>
    </section>
  );
};
