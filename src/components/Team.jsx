import placeholder from '../assets/placeholder.svg';
import lady from '/lady.jpg'
import anas from '/anas.jpg'
import moaz from '/moaz.jpg'

const teamMembers = [
  { name: "Anas Rustom", role: "President", image: anas, borderColor: 'var(--primary)' },
  { name: "Noor Soueid", role: "Vice-President", image: lady, borderColor: 'var(--primary)' },
  { name: "Sifna Nasar", role: "Head of the PR Department", image: lady, borderColor: 'linear-gradient(to right, #e803fc, #e7b3f2)' },
  { name: "Amna Bushra", role: "Head of the Creative Department", image: lady, borderColor: 'linear-gradient(to top right, #84e0fa, #c0e1fc)' },
  { name: "Moaz Jemmieh & Sham Alkhais", role: "Head of the Event Planning Department", image: moaz, borderColor: 'linear-gradient(to top right,#67fa4d, #c2f29b)' },
];

function TeamMemberCard({ name, role, image, borderColor }) {
  return (
    <div
      style={{
        textAlign: 'center',
        width: 'fit-content',
        minWidth: '320px', // base width
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 12px',
        flex: 1,
      }}
    >
      <div
        style={{
          width: '168px',              // w-24 = 6rem
          height: '168px',             // h-24 = 6rem
          borderRadius: '50%',     // rounded-full
          borderWidth: '1px',         // border-4
          overflow: 'hidden',         // overflow-hidden
          marginBottom: '20px',    // mb-3 = 0.75rem
          background: borderColor,
          padding: '3px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div
          style={{
            width: '144px',              // w-24 = 6rem
            height: '144px',             // h-24 = 6rem
            borderRadius: '50%',     // rounded-full
            overflow: 'hidden',         // overflow-hidden
            background: `url(${image})`,
            backgroundSize: "contain",
            padding: '12px'
          }}
        >
        </div>
      </div>

      <h4
        style={{
          fontSize: '28px',
          fontWeight: 400,
          fontFamily: 'Lexend, sans-serif',
          textAlign: 'center',
          marginBottom: '5px',
        }}
      >
        {name}
      </h4>

      <p
        style={{
          fontSize: '14px',
          fontWeight: 400,
          fontFamily: 'Poppins, sans-serif',
          letterSpacing: '1px',
          textAlign: 'center',
        }}
      >
        {role}
      </p>
    </div>
  );
}



const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  justifyItems: 'center',
  gap: '2rem 3rem', // row-gap 2rem, column-gap 3rem
  maxWidth: '1147px',
  margin: '92px auto 3rem',
};

export default function Team() {
  const firstRowStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    placeItems: 'center',
    rowGap: '2rem',
    columnGap: '100px',  // smaller horizontal gap for first row
    maxWidth: '600px',    // narrower max width so cards are closer
    margin: '94px auto 3rem',
  };

  const secondRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem 0px',      // row gap 2rem, column gap 3rem for second row
    maxWidth: '1147px',    // wider max width for more space
    margin: '0 auto 3rem',
  };

  return (
    <section
      id="team"
      style={{
        textAlign: 'center',
        margin: '0 auto',
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
        {teamMembers.slice(0, 2).map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </div>

      {/* Second row: 4 members */}
      <div style={secondRowStyle}>
        {teamMembers.slice(2).map((member, i) => (
          <TeamMemberCard key={i + 2} {...member} />
        ))}
      </div>
    </section>
  );
}