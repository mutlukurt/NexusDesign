import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const CustomCursor: React.FC = () => {
  const { cursorType, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for smooth movement
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Styles based on cursor type
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'rgba(250, 248, 245, 0.9)',
      border: '0px solid transparent',
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(250, 248, 245, 1)',
      mixBlendMode: 'difference' as const,
    },
    view: {
      width: 90,
      height: 90,
      backgroundColor: 'var(--orange-accent)',
      borderColor: 'var(--orange-accent)',
      color: '#050506',
    },
    project: {
      width: 70,
      height: 70,
      backgroundColor: 'transparent',
      border: '2px solid var(--orange-accent)',
    },
    none: {
      width: 0,
      height: 0,
      opacity: 0,
    }
  };

  if (!isVisible || cursorType === 'none' || isMobile) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9999,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        fontWeight: '700',
        fontFamily: 'var(--font-syne)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}
      animate={cursorType}
      variants={variants}
      transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.2 }}
    >
      {cursorType === 'view' && cursorText}
    </motion.div>
  );
};
