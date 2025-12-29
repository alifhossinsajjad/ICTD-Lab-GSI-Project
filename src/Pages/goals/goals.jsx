import React from "react";

const goals = [
  {
    title: "Promotion of quality education",
    description:
      "Improving the quality of education and developing skilled human resources",
  },
  {
    title: "Capacity building and self reliance",
    description:
      "Creating opportunities for students to become proficient in ICT and to become self-reliant",
  },
  {
    title: "Increasing efficiency in ICT",
    description: "Increase efficiency of students and teachers in the field of ICT",
  },
  {
    title: "School of Future (SOF)",
    description:
      "Developing ICTD School of Future & Preparing Digital Content",
  },
  {
    title: "Seminar",
    description:
      "Organizing seminars to create awareness and interest in ICT through publicity and exchange of experiences",
  },
  {
    title: "Netiquette & Cyber Security",
    description: "Creating good ambience for Netiquette and Cyber Security",
  },
  {
    title: "Vasha Guru APP",
    description: "Increase the efficiency of foreign language learning software",
  },
  {
    title: "Sustainability",
    description:
      "Future plans for sustainable project outcomes through supervision, monitoring, evaluation and research",
  },
];

const GoalsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Goals and Objectives
        </h2>
        <p className="text-gray-600 mb-12">
          Goals and Objectives of ICTD Digital Lab Project
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {goal.title}
              </h3>
              <p className="text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
