import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const Awards: React.FC = () => {
  const { setCursorType } = useCursor();

  const awardsList = [
    { name: 'Good design award', count: 32 },
    { name: 'Engineering excellence trophy', count: 19 },
    { name: 'Reddot design award', count: 27 },
    { name: 'IF design award', count: 25 },
    { name: 'Industrial designers society', count: 12 },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-dark)',
        paddingTop: '100px',
        paddingBottom: '100px',
        width: '100%',
      }}
      className="container-padding"
    >
      <div
        className="awards-grid"
        style={{
          display: 'grid',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* Left Side: Massive Number */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(100px, 16vw, 240px)',
              lineHeight: '0.8',
              color: 'var(--orange-accent)',
            }}
          >
            260+
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(18px, 3vw, 28px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--cream)',
              marginTop: '10px',
              letterSpacing: '0.05em',
            }}
          >
            Awards for <br /> Digital Innovation
          </span>
        </div>

        {/* Right Side: Awards List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {awardsList.map((award, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
              whileHover={{ x: 10 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid var(--gray-border)',
                cursor: 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: 'var(--cream-muted)',
                  textTransform: 'capitalize',
                }}
              >
                {award.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--orange-accent)',
                }}
              >
                {award.count}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
