import React from 'react';
import { ArrowDownIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/10 p-12 rounded-2xl shadow-xl max-w-3xl w-full">
        <h1 className="text-6xl font-bold text-white mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-200">Rishav Kamboj</span>
        </h1>
        <p className="text-2xl text-white/90 mb-8">
          A Creative Developer & Designer crafting beautiful digital experiences
        </p>
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowDownIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-white/90 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;