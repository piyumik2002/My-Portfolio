import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero/About Section */}
      <Hero />

      {/* 3. Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">| Selected Projects |</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            title=" Event-Management-and-Ticketing-Platform" 
            desc="A secure MERN-stack event management and ticketing platform featuring role-based workflows for Admins, Organizers, and Customers. It includes an advanced analytics dashboard with real-time tracking, dynamic seat booking, and full JWT security." 
            tech={['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Recharts', 'Lucide React']}
            githubLink="https://github.com/piyumik2002/Event-Management-and-Ticketing-Platform"
          />
          <ProjectCard 
            title="LankaRealEstate" 
            desc="A secure MERN-stack real estate platform featuring a dynamic admin dashboard for streamlined property management with live search and filtering. Integrated with OpenStreetMap API for automated geolocation mapping and optimized via MongoDB Aggregation Pipelines for interaction-based listing sorting." 
            tech={['React', 'Node.js', 'Express.js', 'MongoDB','Tailwind CSS', 'OpenStreetMap','CORS / Cookie-Parser','FileReader API']}
            githubLink="https://github.com/piyumik2002/Real-estate-system"
          />
          <ProjectCard 
            title="Library Locator System" 
            desc="Library Locator is a full-stack digital solution designed to modernize library archive management. By providing a real-time cataloging and mapping system, it empowers users to locate physical resources effortlessly, replacing manual search processes with a seamless digital interface." 
            tech={['React', 'Node.js', 'Express.js', 'MongoDB','Tailwind CSS', 'Axios','React Context API','Search & Mapping API']}
            githubLink="https://github.com/piyumik2002/Library-Locator"
          />
          <ProjectCard 
            title="Animal Rescue & Adoption Web Platform" 
            desc=" A MERN-stack web platform that connects animal rescuers with adopters. It features secure user authentication with strict post-deletion controls, real-time localized filtering, and integrated WhatsApp/phone links to enable instant, one-click communication for faster pet adoptions." 
            tech={['React', 'Node.js', 'Express.js', 'MongoDB','Tailwind CSS', 'Axios/ Fetch API', 'JWT Cookies', 'WhatsApp API']}
            githubLink="https://github.com/piyumik2002/animal-recues-and-adoption"
          />
          <ProjectCard 
            title="Student Feedback & Lecturer Evaluation System" 
            desc="A university-wide platform for students to provide transparent, anonymous feedback on teaching methodologies and course coverage. It bridges the communication gap between students and faculty, driving improvements in academic quality." 
            tech={['PHP', 'MySQL', 'HTML5', 'CSS3','File-based routing',]}
            githubLink="https://github.com/piyumik2002/Student-Feedback-and-Lecturer-Evaluation-System-"
          />
          {/* You can add more projects here following the same structure */}
        </div>
      </section>

      <Skills />
      <Certificates />
      <Contact />

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;