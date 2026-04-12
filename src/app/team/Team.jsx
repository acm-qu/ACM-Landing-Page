import './team.css'

import { PRESIDENTS, HEADS, PAST_PRESIDENTS, PAST_HEADS } from './content';
import { TeamMemberCard } from './_components/card';
import { AnimatePresence, motion } from 'motion/react';

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

  const [isPastMembers, setIsPastMembers] = useState(false);

  const presidents = useMemo(() => isPastMembers ? PAST_PRESIDENTS : PRESIDENTS, [isPastMembers]);
  const heads = useMemo(() => isPastMembers ? PAST_HEADS : HEADS, [isPastMembers]);

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
        Team & Departments
      </h2>
      <button style={{
        all: "unset",
        padding: "8px 32px",
        borderRadius: "9999px",
        backgroundColor: "var(--primary)",
        color: "var(--black)",
        margin: "24px 0",
        cursor: "pointer",
      }}
        onClick={() => setIsPastMembers(prev => !prev)}
      >
        {isPastMembers ? "View Current Team" : "View Past Team"}
      </button>

      {/* First row: presidents */}
      <motion.div layout style={firtRowStyle}>
        <AnimatePresence mode="wait">
          {presidents.map((member, i) => (
            <TeamMemberCard key={member.name + (isPastMembers ? "-past" : "-current")} animKey={member.name + (isPastMembers ? "-past" : "-current")} {...member} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Second row: heads */}
      <motion.div layout style={secondRowStyle}>
        <AnimatePresence mode="wait">
          {heads.map((member, i) => (
            <TeamMemberCard key={member.name + (isPastMembers ? "-past" : "-current")} animKey={member.name + (isPastMembers ? "-past" : "-current")} {...member} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}