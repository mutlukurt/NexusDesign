import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const About: React.FC = () => {
  const { setCursorType } = useCursor();

  const metrics = [
    { value: '37', label: 'Years Experience', highlight: false },
    { value: '80+', label: 'Team Members', highlight: true },
    { value: '3', label: 'Studio Locations', highlight: false },
    { value: '260+', label: 'Industry Projects', highlight: false },
  ];

  const brands = [
    'DISNEY', 'DOLBY', 'SIEMENS', 'ELECTROLUX', 'TOYOTA',
    'YAMAHA', 'HONEYWELL', 'FUJITSU', 'EPSON', 'SAMSUNG'
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--bg-darker)',
        paddingTop: '120px',
        paddingBottom: '120px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="container-padding"
    >
      {/* Narrative Section: Text + Massive Letters */}
      <div
        className="about-narrative-grid"
        style={{
          display: 'grid',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '100px',
        }}
      >
        {/* Typographic "ABOUT US" layout: ABOUT horizontally, US vertically */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            lineHeight: '0.85',
            userSelect: 'none',
          }}
        >
          {/* ABO (white) */}
          <span
            className="heading-huge"
            style={{
              fontSize: 'clamp(90px, 12vw, 160px)',
              color: 'var(--cream)',
            }}
          >
            ABO
          </span>

          {/* U & S (orange) stacked vertically in the center */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'var(--orange-accent)',
            }}
          >
            <span
              className="heading-huge"
              style={{
                fontSize: 'clamp(90px, 12vw, 160px)',
              }}
            >
              U
            </span>
            <span
              className="heading-huge"
              style={{
                fontSize: 'clamp(90px, 12vw, 160px)',
              }}
            >
              S
            </span>
          </div>

          {/* T (white) */}
          <span
            className="heading-huge"
            style={{
              fontSize: 'clamp(90px, 12vw, 160px)',
              color: 'var(--cream)',
            }}
          >
            T
          </span>
        </div>

        {/* Narrative Paragraph */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            paddingTop: '20px',
          }}
        >
          <p
            className="text-body"
            style={{
              maxWidth: '600px',
              fontSize: '18px',
              lineHeight: '1.7',
              marginBottom: '30px',
              textAlign: 'left',
            }}
          >
            Nexus Design is a pioneer in the industry, founded on the principle that the most ambitious design solutions require deep physical and digital engineering. We assemble multidisciplinary teams of designers, researchers, and engineers to build concepts that push technology forward.
          </p>
          <p
            className="text-body"
            style={{
              maxWidth: '600px',
              fontSize: '15px',
              color: 'var(--gray-text)',
              lineHeight: '1.6',
              marginBottom: '40px',
              textAlign: 'left',
            }}
          >
            We bring together the perfect blend of deep technical expertise, beautiful design and optimised usability to execute next-generation products.
          </p>

          {/* Read More button */}
          <div style={{ display: 'flex' }}>
            <motion.a
              href="#about"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                padding: '12px 28px',
                border: '1px solid var(--cream)',
                color: 'var(--cream)',
                textTransform: 'uppercase',
              }}
            >
              READ MORE
            </motion.a>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          width: '100%',
          marginBottom: '100px',
        }}
      >
        {metrics.map((metric, index) => (
          <div
            key={index}
            style={{
              border: metric.highlight ? 'none' : '1px solid var(--gray-border)',
              backgroundColor: metric.highlight ? 'var(--cream)' : 'transparent',
              color: metric.highlight ? 'var(--bg-darker)' : 'var(--cream)',
              padding: '40px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              height: '220px',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 500,
                color: metric.highlight ? 'rgba(5, 5, 6, 0.6)' : 'var(--gray-text)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {metric.label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '72px',
                fontWeight: 700,
                lineHeight: '1',
              }}
            >
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      {/* Brands Logo Grid */}
      <div
        style={{
          borderTop: '1px solid var(--gray-border)',
          borderBottom: '1px solid var(--gray-border)',
          paddingTop: '60px',
          paddingBottom: '60px',
          width: '100%',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--gray-text)',
            textAlign: 'center',
            marginBottom: '40px',
            textTransform: 'uppercase',
          }}
        >
          WE'VE WORKED WITH AMAZING BRANDS
        </h3>

        <div
          className="about-brands-grid"
          style={{
            display: 'grid',
            gap: '30px',
            rowGap: '40px',
            width: '100%',
            opacity: 0.6,
          }}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'var(--font-bebas)',
                fontSize: '24px',
                color: 'var(--cream)',
                letterSpacing: '0.15em',
                transition: 'color 0.3s, opacity 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--orange-accent)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--cream)';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
