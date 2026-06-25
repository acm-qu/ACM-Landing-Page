import './team.css'

import { PRESIDENTS, HEADS, PAST_PRESIDENTS, PAST_HEADS } from './content';
import { TeamMemberCard } from './_components/card';
import { AnimatePresence, motion, cubicBezier } from 'motion/react';

import { useState, useMemo } from 'react';

export default function Team() {

  const secondRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem 0px',      // row gap 2rem, column gap 3rem for second row
    margin: '0 auto 3rem',
  };

  const firtRowStyle = {
    ...secondRowStyle,
    margin: '94px auto 6rem',
  }

  const [currentYear, setCurrentYear] = useState("2026");

  const presidents = useMemo(() => PAST_PRESIDENTS[currentYear] || PRESIDENTS, [currentYear]);
  const heads = useMemo(() => PAST_HEADS[currentYear] || HEADS, [currentYear]);

  const pastYears = Object.keys(PAST_PRESIDENTS).toSorted((a, b) => +b - +a); // Sort years in descending order

  return (
    <section
      id="team"
      style={{
        textAlign: 'center',
        margin: '96px auto 0px auto',
        maxWidth: '1147px',
        padding: '1rem',
      }}
    >
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 400,
          fontFamily: 'Lexend, sans-serif',
          lineHeight: 1.2,
        }}
      >
        Our Team
      </h2>
      {/* Past year selection */}
      <AnimatePresence>
        {currentYear !== "2026" && (
          <motion.div style={{
            display: "flex",
            gap: "8px",
            width: "fit-content",
            margin: "16px auto",
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: cubicBezier(0.00, 0.60, 0.01, 0.99) }}
          >
            <motion.div 
              style={{
                position: "absolute",
                height: "40px",
                borderRadius: "99px",
                width: "100px",
                background: "var(--primary-dark)"
              }} 
              initial={{ x: pastYears.indexOf(currentYear) * 108 }}
              animate={{ x: pastYears.indexOf(currentYear) * 108 }}
              transition={{
                duration: 1,
                ease: cubicBezier(0.66, 0.01, 0.01, 0.99),
              }}
            />
            {
              pastYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setCurrentYear(year)}
                  style={{
                    all: "unset", 
                    position: "relative",
                    zIndex: 2,
                    borderRadius: "9999px",
                    color: currentYear === year ? "var(--white)" : "var(--primary-dark)",
                    width: "100px",
                    height: "40px",
                    cursor: "pointer",
                    transition: "1s cubic-bezier(0.51, 0.00, 0.01, 0.99)",
                  }}
                >
                  {year}
                </button>
              ))
            }

          </motion.div>
        )}
      </AnimatePresence>
      

      {/* First row: presidents */}
      <motion.div layout style={firtRowStyle}>
        <AnimatePresence mode="wait">
          {presidents.map((member) => (
            <TeamMemberCard 
              key={member.name + (currentYear !== "2026" ? "-past" : "-current")} 
              animKey={member.name + (currentYear !== "2026" ? "-past" : "-current")} 
              {...member} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Second row: heads */}
      <motion.div layout style={secondRowStyle}>
        <AnimatePresence mode="wait">
          {heads.map((member) => (
            <TeamMemberCard 
              key={member.name + (currentYear !== "2026" ? "-past" : "-current")} 
              animKey={member.name + (currentYear !== "2026" ? "-past" : "-current")} 
              {...member} />
          ))}
        </AnimatePresence>
      </motion.div>
      <a 
      href="#team"
      style={{
        all: "unset",
        padding: "8px 32px",
        borderRadius: "9999px",
        border: "2px solid var(--primary-dark)",
        color: "var(--primary-dark)",
        margin: "24px 0",
        cursor: "pointer",
      }}
        onClick={() => setCurrentYear(prev => prev === "2026" ? "2025" : "2026")}
      >
        {currentYear === "2026" ? "View Past Team Leaders" : "View Current Team"}
      </a>
    </section>
  );
}