import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  image: string;
}

export const News: React.FC = () => {
  const { setCursorType } = useCursor();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking cursor within the news section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth following
  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: '15 Dec 2025',
      category: '[Infrastructure]',
      title: 'Launch hydrogen energy storage system demonstration site in Logansport, Indiana.',
      image: '/assets/energy_storage.webp',
    },
    {
      id: 2,
      date: '11 Dec 2025',
      category: '[Infrastructure]',
      title: 'Odin surgically mixed reality navigation system receives FDA clearance.',
      image: '/assets/security_vehicle.webp',
    },
    {
      id: 3,
      date: '08 Dec 2025',
      category: '[Design]',
      title: 'Semi-autonomous development of a trans-uterine robot pump system.',
      image: '/assets/news_transuterine.webp',
    },
    {
      id: 4,
      date: '23 Nov 2025',
      category: '[Robotics]',
      title: 'Nect secures $22.5 million seed round funding for autonomous rovers.',
      image: '/assets/pizza_pod.webp',
    },
    {
      id: 5,
      date: '18 Nov 2025',
      category: '[Awards]',
      title: 'Red dot design award winners announced: Nuon smart generator design details.',
      image: '/assets/flying_car.webp',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (containerRef.current && window.innerWidth >= 1024) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate relative coordinates to container
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="news"
      ref={containerRef}
      style={{
        backgroundColor: 'var(--bg-darker)',
        paddingTop: '120px',
        paddingBottom: '120px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="container-padding"
    >
      {/* Header */}
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
          LATEST NEWS
        </h2>
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            color: 'var(--gray-text)',
          }}
        >
          UPDATES & INSIGHTS
        </span>
      </div>

      {/* Floating Image Portal */}
      <AnimatePresence>
        {hoveredIdx !== null && !isMobile && (
          <motion.div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              x: floatX,
              y: floatY,
              translateX: '-50%',
              translateY: '-50%',
              pointerEvents: 'none',
              zIndex: 10,
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--orange-accent)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <img
              src={newsItems[hoveredIdx].image}
              alt="Preview"
              loading="lazy"
              decoding="async"
              width={180}
              height={180}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* News Rows List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          borderTop: '1px solid var(--gray-border)',
        }}
      >
        {newsItems.map((item, index) => {
          const isHovered = hoveredIdx === index;
          return (
            <div
              key={item.id}
              onMouseEnter={() => {
                if (!isMobile) {
                  setCursorType('none');
                  setHoveredIdx(index);
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setCursorType('default');
                  setHoveredIdx(null);
                }
              }}
              className="news-row"
              style={{
                display: 'grid',
                gap: '20px',
                paddingTop: '32px',
                paddingBottom: '32px',
                borderBottom: '1px solid var(--gray-border)',
                alignItems: 'center',
                textAlign: 'left',
                position: 'relative',
                transition: 'background-color 0.3s ease',
                backgroundColor: isHovered ? '#121217' : 'transparent',
                paddingLeft: '20px',
                paddingRight: '20px',
                zIndex: 2,
                cursor: isMobile ? 'default' : 'none',
              }}
            >
              {/* Date */}
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  color: isHovered ? 'var(--orange-accent)' : 'var(--gray-text)',
                  transition: 'color 0.3s ease',
                }}
              >
                {item.date}
              </span>

              {/* Category */}
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: isHovered ? 'var(--cream)' : 'var(--gray-text)',
                  transition: 'color 0.3s ease',
                }}
              >
                {item.category}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(15px, 1.8vw, 19px)',
                  fontWeight: isHovered ? 500 : 300,
                  lineHeight: '1.4',
                  color: isHovered ? 'var(--orange-accent)' : 'var(--cream)',
                  transition: 'color 0.3s ease, font-weight 0.1s ease',
                }}
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};
