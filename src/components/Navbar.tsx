import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const Navbar: React.FC = () => {
  const { setCursorType } = useCursor();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleMouseEnter = () => setCursorType('hover');
  const handleMouseLeave = () => setCursorType('default');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'NEWS', href: '#news' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  const navLinksVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { y: 80, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px clamp(20px, 6vw, 120px)',
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: '20px',
            letterSpacing: '0.15em',
            color: 'var(--cream)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 102,
            mixBlendMode: 'difference',
          }}
        >
          <span style={{ color: 'var(--orange-accent)' }}>NEXUS</span>
          <span>DESIGN</span>
        </a>

        {/* Desktop Menu */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '32px', mixBlendMode: 'difference' }}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 500,
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: 'var(--cream-muted)',
                  transition: 'color 0.3s ease',
                  padding: '6px 0',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--cream-muted)')}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              zIndex: 102,
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              padding: 0,
            }}
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '28px',
                height: '2px',
                backgroundColor: 'var(--cream)',
              }}
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                width: '28px',
                height: '2px',
                backgroundColor: 'var(--cream)',
              }}
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '28px',
                height: '2px',
                backgroundColor: 'var(--cream)',
              }}
            />
          </button>
        )}
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'var(--bg-darker)',
              zIndex: 101,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
            }}
          >
            {/* Background elements */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at center, rgba(255, 90, 0, 0.05) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />

            {/* Menu Links */}
            <motion.nav
              variants={navLinksVariants}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {navItems.map((item) => (
                <div key={item.label} style={{ overflow: 'hidden' }}>
                  <motion.a
                    variants={linkVariants}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '60px',
                      color: 'var(--cream)',
                      letterSpacing: '0.05em',
                      transition: 'color 0.2s',
                      display: 'block',
                      lineHeight: '1.2',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--orange-accent)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                  >
                    {item.label}
                  </motion.a>
                </div>
              ))}
            </motion.nav>

            {/* Footer inside mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                position: 'absolute',
                bottom: '40px',
                fontFamily: 'var(--font-syne)',
                fontSize: '11px',
                color: 'var(--gray-text)',
                letterSpacing: '0.1em',
              }}
            >
              HELLO@NEXUSDESIGN.CO
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
