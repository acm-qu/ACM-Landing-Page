import React from "react";
import RealWorld from '../assets/real-world.svg';
import TeamBased from '../assets/team-based.svg';
import Technical from '../assets/technical-training.svg';
import ResumeReady from '../assets/resume-ready.svg';
import Flexible from '../assets/flexible.svg';
import LongTerm from '../assets/long-term.svg';


const features = [
  {
    icon: RealWorld,
    title: "Real World Projects",
    description:
      "Interns develop practical solutions to real problems faced by Qatar university students and staff. Each project is campus-impactful and hosted on GitHub.",
  },
  {
    icon: TeamBased,
    title: "Team-Based Development",
    description:
      "Students work in small groups (3–5) with client roles like frontend/backend. Weekly syncs with mentors simulate real software team environments.",
  },
  {
    icon: Technical,
    title: "Technical Training",
    description:
      "Workshops cover GitHub workflows, frontend/backend basics, UI/UX, and soft skills like communication and résumé writing.",
  },
  {
    icon: ResumeReady,
    title: "Resume-Ready Outcomes",
    description:
      "Interns finish with a completed project, a GitHub portfolio, a certificate, and a reference letter—boosting chances for future internships.",
  },
  {
    icon: Flexible,
    title: "Flexible Format",
    description:
      "Runs for 5–6 weeks part-time during the semester, starting from the end of your freshman year. No prior internship experience required.",
  },
  {
    icon: LongTerm,
    title: "Long-Term Vision",
    description:
      "Projects contribute to a growing ACM QU GitHub hub, helping position ACM as a student-led innovation center and bridge to industry.",
  },
];

function FeatureCard({ icon, title, description }) {
  return (
    <div style={{ width: '300px', textAlign: 'left', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
        <img src={icon} alt={title} style={{ width: '20px', height: '20px' }} />
        <h3 style={{ fontWeight: '400', color: 'var(--gray)', lineHeight: '1.2', fontSize: '20px', marginBottom: '5px', fontFamily: 'Lexend, sans-serif' }}>
          {title}
        </h3>
      </div>
      <p style={{ fontSize: '16px', color: 'var(--gray)', lineHeight: '1.2', margin: 0, fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
        {description}
      </p>
    </div>
  );
}

export default function Internship() {
  return (
    <div
      id="internship"
      style={{
        maxWidth: '1120px',
        margin: '72px auto',
        padding: '64px 24px',
        textAlign: 'center',
        fontStyle: 'normal',
      }}
    >
      <h2 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '48px', fontFamily: 'Lexend, sans-serif', lineHeight: 1.2 }}>
        Internship Program
      </h2>
      <p style={{ fontSize: '16px', color: 'var(--gray)', maxWidth: '722px', margin: '0 auto', fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
        A hands-on software engineering internship for QU students to build real tech solutions,
        gain teamwork experience, and boost their careers.
      </p>

      <div style={{ marginTop: '24px' }}>
        <button
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--black)',
            fontWeight: '400',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '1px',
            padding: '5px 24px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Coming Soon
        </button>
      </div>

      <div style={{ marginTop: '60px' }}>
        {/* Diamond + Features heading */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--primary)',
              transform: 'rotate(45deg)',
            }}
          ></div>
          <h3
            style={{
              fontWeight: '500',
              fontSize: '20px',
              color: 'var(--black)',
              fontFamily: 'Lexend, sans-serif',
              letterSpacing: '5px',
              margin: 0,
            }}
          >
            Features
          </h3>
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--primary)',
              transform: 'rotate(45deg)',
            }}
          ></div>
        </div>

        {/* Responsive grid for all features */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            justifyItems: 'center',
            marginTop: '3rem',
          }}
        >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}