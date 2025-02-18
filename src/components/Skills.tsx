import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
    { name: 'Next.js', color: 'from-gray-600 to-gray-900' },
    { name: 'TailwindCSS', color: 'from-cyan-400 to-teal-500' },
    { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML5', color: 'from-orange-400 to-red-500' },
    { name: 'CSS3', color: 'from-blue-400 to-blue-600' },
    { name: 'Git', color: 'from-orange-500 to-red-600' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' },
    { name: 'Docker', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' },
    { name: 'GraphQL', color: 'from-pink-400 to-pink-600' },
    { name: 'Redux', color: 'from-purple-400 to-purple-600' }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="backdrop-blur-lg bg-white/10 p-12 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-white mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{
                animation: `float 6s ease-in-out infinite ${index * 0.2}s`,
                transform: `translateY(${Math.sin(index) * 10}px)`
              }}
            >
              <div
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${skill.color} 
                  transform hover:scale-110 transition-all duration-300
                  hover:shadow-lg hover:shadow-white/20 cursor-pointer
                  group-hover:animate-pulse`}
              >
                <span className="text-white font-semibold">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;