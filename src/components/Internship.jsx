import React from "react";

const features = [
  {
    icon: "🛠️",
    title: "Real World Projects",
    description:
      "Interns develop practical solutions to real problems faced by Qatar university students and staff. Each project is campus-impactful and hosted on GitHub."
  },
  {
    icon: "👥",
    title: "Team-Based Development",
    description:
      "Students work in small groups (3–5) with client roles like frontend/backend. Weekly syncs with mentors simulate real software team environments."
  },
  {
    icon: "💻",
    title: "Technical Training",
    description:
      "Workshops cover GitHub workflows, frontend/backend basics, UI/UX, and soft skills like communication and résumé writing."
  },
  {
    icon: "📂",
    title: "Resume-Ready Outcomes",
    description:
      "Interns finish with a completed project, a GitHub portfolio, a certificate, and a reference letter—boosting chances for future internships."
  },
  {
    icon: "🕒",
    title: "Flexible Format",
    description:
      "Runs for 5–6 weeks part-time during the semester, starting from the end of your freshman year. No prior internship experience required."
  },
  {
    icon: "🌐",
    title: "Long-Term Vision",
    description:
      "Projects contribute to a growing ACM QU GitHub hub, helping position ACM as a student-led innovation center and bridge to industry."
  }
];

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Internship() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-16 max-w-7xl mx-auto">
      {/* Internship Section */}
      <section className="text-center mb-24">
        <h2 className="text-3xl font-bold mb-2">Internship Program</h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          A hands-on software engineering internship for QU students to build real tech solutions,
          gain teamwork experience, and boost their careers.
        </p>
        <div className="mt-6">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full transition">
            Waitlist Now ➞
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-base font-semibold text-gray-700 mb-8">★ Features ★</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>
      </div>
      );
}