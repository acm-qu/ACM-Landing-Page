import './team.css'

import { PRESIDENTS, HEADS } from './content';
import { TeamMemberCard } from './_components/card';

export default function Team() {
  const firstRowStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    placeItems: 'center',
    rowGap: '2rem',
    columnGap: '100px',  // smaller horizontal gap for first row
    maxWidth: '600px',    // narrower max width so cards are closer
    margin: '94px auto 4rem',
  };

  const secondRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem 0px',      // row gap 2rem, column gap 3rem for second row
    margin: '0 auto 3rem',
  };

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

      {/* First row: 2 members */}
      <div style={firstRowStyle}>
        {PRESIDENTS.map((member, i) => (
          <TeamMemberCard key={i + member.name} {...member} />
        ))}
      </div>

      {/* Second row: 4 members */}
      <div style={secondRowStyle}>
        {HEADS.map((member, i) => (
          <TeamMemberCard key={i + member.name} {...member} />
        ))}
      </div>
    </section>
  );
}