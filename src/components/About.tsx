import React from 'react';

import myImage from "../assests/linkedin image.png"
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="backdrop-blur-lg bg-white/10 p-12 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img src={myImage} alt="Profile"  />
          </div>
          <div>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">
              I'm a Full Stack Developer skilled in the MERN stack, Redux, and
              modern web technologies. I love crafting clean, scalable, and
              user-friendly applications that enhance digital experiences.
            </p>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">
              With strong expertise in front-end and back-end development, I
              specialize in building high-performance applications. My
              experience spans React, Node.js, Express, MongoDB, and cloud
              deployment.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Beyond coding, I enjoy contributing to open-source projects,
              mentoring developers, and staying updated with the latest tech
              trends. I thrive on solving challenges and building innovative
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;