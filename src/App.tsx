import React, { useEffect } from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, Mail } from 'lucide-react';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight * 0.75) &&
          rect.bottom >= (window.innerHeight * 0.25)
        );
        section.classList.toggle('visible', isVisible);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="h-20 backdrop-blur-md bg-black/5 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex items-center justify-between h-full">
                <h1 className="text-2xl font-bold text-white">Rishav Kamboj</h1>
                <div className="flex space-x-8">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                  <a href="#skills" className="nav-link">
                    Skills
                  </a>
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />

          <footer className="py-8 mt-16">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/RishavK1"
                target="blank"
                className="text-white hover:text-pink-200 transition-all duration-300 transform hover:scale-110"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishav-kamboj-766171253/"
                target="blank"
                className="text-white hover:text-pink-200 transition-all duration-300 transform hover:scale-110"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/rishavkamboj75"
                target='blank'
                className="text-white hover:text-pink-200 transition-all duration-300 transform hover:scale-110"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              
            </div>
            <p className="text-center text-white mt-4">
              © 2024 Rishav. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;