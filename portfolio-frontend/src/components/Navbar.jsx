// src/components/Navbar.jsx
export default function Navbar() {
  return (
    /* 
       Added 'sticky top-0 z-50' to keep the navbar visible while scrolling.
       Added 'shadow-md' to create a subtle separation effect.
    */
    <nav className="sticky top-0 z-50 flex justify-between items-center py-6 px-10 bg-slate-900 text-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">Piyumi K Ranasingha</h1>
      <div className="space-x-8">
        <a href="#about" className="hover:text-blue-400 transition">ABOUT</a>
        <a href="#projects" className="hover:text-blue-400 transition">PROJECTS</a>
        <a href="#skills" className="hover:text-blue-400 transition">TECHNICAL SKILLS</a>
        <a href="#certificates" className="hover:text-blue-400 transition">CERTIFICATION</a>
        <a href="#contact" className="hover:text-blue-400 transition">CONTACT</a>
      </div>
    </nav>
  );
}