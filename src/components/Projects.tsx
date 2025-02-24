import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import airbnb from "../assests/AB .jpg";
import jobportal from "../assests/Job.jpg";
import weather from "../assests/WA.jpg"

const Projects = () => {
  const projects = [
    {
      title: "AirBnb",
      description: "A modern web application built with EJS and Node.js",
      image: airbnb,
      technologies: ["EJS", "Node.js", "MongoDB"],
      demoUrl: "https://my-air-bnb-tar5.vercel.app/listings",
      githubUrl: "https://github.com/RishavK1/MY-AirBnb",
    },
    {
      title: "Content AI ",
      description: "AI-powered content generation dashboard.",
      image: weather,
      technologies: ["Typescript", "Tailwind CSS", "Supabase", "Generative AI"],
      demoUrl: "https://content-ai-neon.vercel.app/",
      githubUrl: "https://github.com/RishavK1/Content-AI",
    },
    {
      title: "ApniJob - Job Portal",
      description: "A modern web application built with React and Node.js",
      image: jobportal,
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Redux",
        "MongoDB",
        "ShadCN UI",
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/RishavK1/ApniJob",
    },
    {
      title: "Weather App",
      description: "A real time weather forcasting web-app",
      image: weather,
      technologies: ["React.js", "CSS"],
      demoUrl: "https://weather-app-sigma-sooty-11.vercel.app/",
      githubUrl: "https://github.com/RishavK1/Weather-App",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="backdrop-blur-lg bg-white/10 p-12 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target='blank'
                    className="flex items-center space-x-2 text-white hover:text-pink-200 transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target='blank'
                    className="flex items-center space-x-2 text-white hover:text-pink-200 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;