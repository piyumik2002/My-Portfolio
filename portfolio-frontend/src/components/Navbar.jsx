import { useState } from 'react';

export default function Navbar() {
  // State to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap justify-between items-center py-6 px-6 md:px-10 bg-slate-900 text-white shadow-md">
      {/* Name on the left */}
      <h1 className="text-2xl font-bold text-blue-400">Piyumi K Ranasingha</h1>

      {/* Hamburger menu button for mobile */}
      <button 
        className="md:hidden flex flex-col gap-1.5" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Links - Hidden on mobile by default, shown when isOpen is true */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 gap-4 md:space-x-8 text-sm md:text-base text-center`}>
        <a href="#about" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#projects" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>PROJECTS</a>
        <a href="#skills" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>TECHNICAL SKILLS</a>
        <a href="#certificates" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>CERTIFICATION</a>
        <a href="#contact" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
}