// src/components/Certificates.jsx
import React from 'react';

const certificates = [
{
    title: "React Basics",
    issuer: "Meta / Coursera",
    date: "April 25, 2026",
    link: "https://www.coursera.org/account/accomplishments/verify/LPTHCIRU85NG"
  },
  {
    title: "Backend Development and API Creation",
    issuer: "Packt / Coursera",
    date: "April 29, 2026",
    link: "https://www.coursera.org/account/accomplishments/verify/WADP3I90L81M"
  },
  {
    title: "Frontend Development with React",
    issuer: "Packt / Coursera",
    date: "May 2, 2026",
    link: "https://www.coursera.org/account/accomplishments/verify/EAQ7CQZNAMZM"
  },
  {
    title: "Learn Next.js",
    issuer: "Scrimba / Coursera",
    date: "June 28, 2026",
    link: "https://www.coursera.org/account/accomplishments/verify/YM37SN9UXI7T"
  },
  
];

const Certificates = () => {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">| Certifications |</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-blue-400 text-sm">{cert.issuer}</p>
              <p className="text-xs text-slate-500 mt-2 mb-4">{cert.date}</p>
            </div>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm transition-colors"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;