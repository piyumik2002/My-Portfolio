import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ title, desc, tech, githubLink }) {
  return (
    <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl hover:border-blue-500 transition-all duration-300 group">
      {/* Project Title */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-400 mb-4 leading-relaxed">
        {desc}
      </p>
      
      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span key={index} className="bg-slate-800 text-blue-300 text-xs px-3 py-1 rounded-full border border-slate-700">
            {item}
          </span>
        ))}
      </div>
      
      {/* GitHub Link */}
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white hover:text-blue-400 font-semibold transition"
      >
        <FaGithub /> View Code
      </a>
    </div>
  );
}