import profileImg from '../assets/hero.jpeg'; // Ensure the path is correct
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left side: Profile Image with professional styling */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img 
          src={profileImg} 
          alt="K.M.A.G.P.K Ranasingha" 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-800 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-all duration-300"
        />
      </div>

      {/* Right side: Professional Details */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <p className="text-blue-400 font-semibold mb-4 tracking-widest uppercase text-sm">
          Undergraduate student specializing in BICT(HONS)
        </p>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> K.M.A.G.P.K Ranasingha</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
          Enthusiastic Intern Full-Stack Developer with hands-on experience in the MERN stack(MongoDB, Express.js, React, and Node.js). 
          Dedicated to building user-centric web applications and leveraging technical skills to contribute to real-world development pipelines.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {/* Download CV Button: Added download attribute to trigger file download */}
          <a 
            href="/Piyumi_K_Ranasingha_CV.pdf" 
            download="Piyumi_Ranasingha_CV.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full transition"
          >
            <FaDownload /> Download CV
          </a>
          {/* GitHub Link */}
          <a 
            href="https://github.com/piyumik2002" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full transition"
          >
            <FaGithub /> GitHub
          </a>
          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/in/piyumi-k-ranasingha-39b762389/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
      
    </section>
  );
}