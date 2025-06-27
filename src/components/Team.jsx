import React from "react";
import placeholder from '../assets/placeholder.svg'; 

const teamMembers = [
  { name: "Anas Rustom", role: "President", image: placeholder, borderColor: "border-teal-400" },
  { name: "Noor Soueid", role: "Vice-President", image: placeholder, borderColor: "border-teal-400" },
  { name: "I forgor", role: "Head of the PR Department", image: placeholder, borderColor: "border-purple-400" },
  { name: "Amna Bushra", role: "Head of the Creative Department", image: placeholder, borderColor: "border-blue-400" },
  { name: "TBD", role: "Head of the Tech Department", image: placeholder, borderColor: "border-red-400" },
  { name: "Moaz Jemmieh & Sham Alkhais", role: "Head of the Event Planning Department", image: placeholder, borderColor: "border-green-400" },
];

function TeamMemberCard({ name, role, image, borderColor }) {
  return (
    <div
      style={{
        textAlign: 'center',
        minWidth: '320px', // base width
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 12px',
      }}
    >
      <div
        className={`w-24 h-24 rounded-full border-4 ${borderColor} overflow-hidden mb-3`}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <h4
        style={{
          fontSize: '28px',
          fontWeight: 400,
          fontFamily: 'Lexend, sans-serif',
          textAlign: 'center',
          marginBottom: '5px',
          marginTop: '30px'
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



export default function Team() {
  return (
    <section
      style={{
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '1147px',
        padding: '1rem',
      }}
    >
      <h2 style={{ fontSize: '28px', fontWeight: 400, fontFamily: 'Lexend, sans-serif', lineHeight: 1.2 }}>
        Team & Departments
      </h2>
      <img src="https://www.svgrepo.com/show/6970/user.svg" alt="user" />


      {/* First row with 2 members centered */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '92px',
          marginBottom: '3rem',

        }}
      >
        {teamMembers.slice(0, 2).map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </div>

      {/* Second row with 4 members centered */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'nowrap', 
        }}
      >
        {teamMembers.slice(2).map((member, i) => (
          <TeamMemberCard key={i + 2} {...member} />
        ))}
      </div>
    </section>
  );
}

