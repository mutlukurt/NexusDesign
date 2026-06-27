import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface Project {
  id: string;
  title: string;
  category: string;
  services: string;
  description: string;
  image: string;
}

export const Projects: React.FC = () => {
  const { setCursorType, setCursorText } = useCursor();
  const [activeIdx, setActiveIdx] = useState<number | null>(1); // Default to second item like reference

  const projects: Project[] = [
    {
      id: '01',
      title: 'FUTURE DELIVERY PIZZA POD',
      category: 'Autonomous Vehicle / Robotic Concept',
      services: 'Research / Concept Development / Electronic Prototype / Chassis Design',
      description: 'A modular, high-efficiency autonomous delivery platform engineered to optimize local delivery logistics and food temperature control.',
      image: '/assets/pizza_pod.webp',
    },
    {
      id: '02',
      title: 'HYDROGEN ENERGY STORAGE SYSTEM',
      category: 'Green Tech Infrastructure',
      services: 'Industrial Architecture / System Engineering / Prototype',
      description: 'A revolutionary zero-emission energy storage unit utilising advanced solid-state hydrogen storage chemistry for high-density storage.',
      image: '/assets/energy_storage.webp',
    },
    {
      id: '03',
      title: 'AUTONOMOUS SECURITY VEHICLE',
      category: 'Robotics & AI Surveillance',
      services: 'Firmware / Industrial Design',
      description: 'An AI-driven mobile security system equipped with LiDAR and computer vision for 24/7 autonomous facility patrol and hazard detection.',
      image: '/assets/security_vehicle.webp',
    },
    {
      id: '04',
      title: 'DRIVABLE EVTOL FLYING CAR',
      category: 'Aerospace Concept',
      services: 'Propulsion Systems / Aerodynamics / Prototype',
      description: 'A personal transportation concept combining street-legal driving capabilities with vertical takeoff and landing flight controls.',
      image: '/assets/flying_car.webp',
    },
  ];

  return (
    <section
      id="work"
      style={{
        backgroundColor: 'var(--bg-dark)',
        paddingTop: '120px',
        paddingBottom: '120px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="container-padding"
    >
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '60px',
          borderBottom: '1px solid var(--gray-border)',
          paddingBottom: '20px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '14px',
            letterSpacing: '0.2em',
            color: 'var(--orange-accent)',
            fontWeight: 700,
          }}
        >
          LATEST PROJECTS
        </h2>
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            color: 'var(--gray-text)',
          }}
        >
          SELECTED WORKS 2025 - 2026
        </span>
      </div>

      {/* Accordion Projects List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          borderTop: '1px solid var(--gray-border)',
        }}
      >
        {projects.map((project, index) => {
          const isActive = activeIdx === index;
          return (
            <div
              key={project.id}
              onMouseEnter={() => {
                setCursorType('view');
                setCursorText('VIEW');
                setActiveIdx(index);
              }}
              onMouseLeave={() => {
                setCursorType('default');
                setCursorText('');
              }}
              onClick={() => setActiveIdx(activeIdx === index ? null : index)}
              style={{
                position: 'relative',
                width: '100%',
                borderBottom: '1px solid var(--gray-border)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'background-color 0.5s ease',
                backgroundColor: isActive ? 'var(--orange-accent)' : 'transparent',
              }}
            >
              {/* Background Image Reveal on Hover/Active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'none',
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={800}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%)',
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main row content container */}
              <motion.div
                animate={{
                  paddingTop: isActive ? '50px' : '30px',
                  paddingBottom: isActive ? '50px' : '30px',
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                }}
              >
                {/* Title and Index Row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  {/* Left dash & Index */}
                  <span
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '14px',
                      color: isActive ? '#050506' : 'var(--gray-text)',
                      fontWeight: 500,
                    }}
                  >
                    {isActive ? '— ' : ''}{project.id}
                  </span>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: 'clamp(28px, 5vw, 64px)',
                      color: isActive ? '#050506' : 'var(--cream)',
                      textAlign: 'center',
                      flex: 1,
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Right dash */}
                  <span
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '14px',
                      color: isActive ? '#050506' : 'var(--gray-text)',
                      fontWeight: 500,
                    }}
                  >
                    {isActive ? ' —' : ''}
                  </span>
                </div>

                {/* Subtitle & details expanded content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      style={{
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '20px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#050506',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: '8px',
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '11px',
                          color: 'rgba(5, 5, 6, 0.7)',
                          letterSpacing: '0.05em',
                          textAlign: 'center',
                          maxWidth: '700px',
                          lineHeight: '1.5',
                          marginBottom: '16px',
                        }}
                      >
                        {project.services}
                      </span>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '14px',
                          color: '#050506',
                          textAlign: 'center',
                          maxWidth: '600px',
                          fontWeight: 400,
                          lineHeight: '1.6',
                        }}
                      >
                        {project.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '60px',
        }}
      >
        <motion.a
          href="#work"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={() => setCursorType('default')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            padding: '16px 36px',
            border: '1px solid var(--gray-border-light)',
            color: 'var(--cream)',
            textTransform: 'uppercase',
            transition: 'border-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--cream)')}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--gray-border-light)')}
        >
          VIEW ALL
        </motion.a>
      </div>
    </section>
  );
};
