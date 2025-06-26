import React from "react";

const teamMembers = [
  {
    name: "Anas Rustom",
    role: "President",
    image: "https://i.imgur.com/2yaf2wb.png",
    borderColor: "border-teal-400"
  },
  {
    name: "Noor Soueid",
    role: "Vice-President",
    image: "https://i.imgur.com/2yaf2wb.png",
    borderColor: "border-teal-400"
  },
  {
    name: "I forgor",
    role: "Head of the PR Department",
    image: "https://i.imgur.com/2yaf2wb.png",
    borderColor: "border-purple-400"
  },
  {
    name: "I forgor",
    role: "Head of the Creative Department",
    image: "https://i.imgur.com/2yaf2wb.png",
    borderColor: "border-blue-400"
  },
  {
    name: "TBD",
    role: "Head of the Tech Department",
    image: "https://i.imgur.com/2yaf2wb.png",
    borderColor: "border-red-400"
  },
  {
    name: "Moaz Jemmieh & Sham",
    role: "Head of the Event Planning Department",
    image: "https://i.imgur.com/2yaf2wb.png",
    borderColor: "border-green-400"
  }
];

function TeamMemberCard({ name, role, image, borderColor }) {
  return (
    <div className="text-center">
      <div className={`w-24 h-24 rounded-full border-4 ${borderColor} mx-auto overflow-hidden mb-3`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-gray-800 text-sm md:text-base">{name}</h4>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  );
}


export default function Team() {
  return (
    <section className="text-center">
    <h2 className="text-2xl font-bold mb-12">Team & Departments</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-6 max-w-4xl mx-auto">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  </section>
  );
}
