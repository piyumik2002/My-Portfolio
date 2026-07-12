// src/components/Contact.jsx
import React from 'react';
import { Phone, Mail } from 'lucide-react'; // Importing modern icons

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">| Contact Me |</h2>
      <p className="text-slate-400 mb-10">I am currently looking for internship opportunities!</p>
      
      <div className="grid md:grid-cols-2 gap-8 justify-center">
        {/* Phone numbers section with icons */}
        <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
          <div className="flex justify-center mb-4 text-blue-400">
            <Phone size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Phone Numbers</h3>
          <p className="text-slate-300">+94 77 145 3892</p>
          <p className="text-slate-300">+94 72 425 7304</p>
        </div>
        
        {/* Email address section with clickable mailto link */}
        <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
          <div className="flex justify-center mb-4 text-blue-400">
            <Mail size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Email Address</h3>
          <a 
            href="mailto:piyumik2002@gmail.com" 
            className="text-slate-300 hover:text-blue-400 transition underline"
          >
            piyumik2002@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;