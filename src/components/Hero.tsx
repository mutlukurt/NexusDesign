import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const Hero: React.FC = () => {
  const { setCursorType } = useCursor();

  // Mouse positions for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for parallax
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  // Parallax transform bindings
  const sculptureX = useTransform(springX, [0, window.innerWidth], [-40, 40]);
  const sculptureY = useTransform(springY, [0, window.innerHeight], [-40, 40]);
  
  const textX = useTransform(springX, [0, window.innerWidth], [20, -20]);
  const textY = useTransform(springY, [0, window.innerHeight], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'var(--bg-darker)',
        overflow: 'hidden',
        userSelect: 'none',
      }}
      className="container-padding"
    >
      {/* Background 3D Sculpture with Parallax */}
      <motion.div
        className="hero-sculpture"
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
          x: sculptureX,
          y: sculptureY,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src="/assets/hero_sculpture.webp"
          alt="Nexus Design Fluid Sculpture"
          fetchPriority="high"
          width={1050}
          height={1050}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7))',
          }}
        />
      </motion.div>

      {/* Hero Typography */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        {/* DESIGN (White, Left aligned) */}
        <motion.h1
          className="heading-huge"
          style={{
            alignSelf: 'flex-start',
            color: 'var(--cream)',
            x: textX,
            y: textY,
          }}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          DESIGN
        </motion.h1>

        {/* Floating Narrative text */}
        <motion.div
          style={{
            width: 'clamp(280px, 35vw, 420px)',
            alignSelf: 'center',
            margin: '20px 0',
            textAlign: 'left',
            pointerEvents: 'auto',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={() => setCursorType('default')}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              lineHeight: '1.6',
              fontWeight: 400,
              color: 'var(--cream-muted)',
              borderLeft: '2px solid var(--orange-accent)',
              paddingLeft: '16px',
            }}
          >
            A high-end creative workshop at the intersection of digital excellence and physical hardware execution. We design products, spaces, and narratives.
          </p>
        </motion.div>

        {/* INDUSTRY (Orange, Right aligned) */}
        <motion.h1
          className="heading-huge text-accent"
          style={{
            alignSelf: 'flex-end',
            x: textX,
            y: textY,
          }}
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          INDUSTRY
        </motion.h1>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'auto',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onMouseEnter={() => setCursorType('hover')}
        onMouseLeave={() => setCursorType('default')}
      >
        <a
          href="#work"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--cream-muted)',
          }}
        >
          SCROLL TO EXPLORE
        </a>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: '2px',
            height: '24px',
            backgroundColor: 'var(--orange-accent)',
          }}
        />
      </motion.div>
    </section>
  );
};
