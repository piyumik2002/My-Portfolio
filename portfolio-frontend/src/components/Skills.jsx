// src/components/Skills.jsx
import React from 'react';

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Node.js", "Express.js", "PHP"] },
  { category: "Database", items: ["MongoDB","MySQL"] },
  { category: "Tools & APIs", items: ["Git", "Postman", "OpenStreetMap","RESTful API","WhatsApp API"] }
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">| Technical Skills |</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
            <ul className="space-y-2">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="text-slate-300 flex items-center">
                  <span className="mr-2 text-blue-500">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;