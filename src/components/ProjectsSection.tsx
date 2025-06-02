
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "City Explorer App",
      description: "An interactive application that helps users navigate and discover points of interest in different cities.",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=300&fit=crop&auto=format",
      link: "#",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "AI-based Question Generator",
      description: "A smart system that generates relevant questions based on educational content for teachers and students.",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&auto=format",
      link: "#",
      color: "from-violet-600 to-purple-500"
    },
    {
      title: "Database Management System",
      description: "A custom DBMS for efficient data storage and retrieval with advanced querying capabilities.",
      technologies: ["SQL", "Java", "Spring Boot", "Redis"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format",
      link: "#",
      color: "from-emerald-600 to-green-500"
    },
    {
      title: "E-learning Platform",
      description: "A comprehensive platform for online education with interactive lessons and progress tracking.",
      technologies: ["MEAN Stack", ".NET", "Azure"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&auto=format",
      link: "#",
      color: "from-pink-600 to-rose-500"
    },
  ];

  return (
    <section id="projects" className="section-padding relative min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-violet-300 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-purple-400 opacity-5 blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-pink-300 opacity-5 blur-2xl animate-float" style={{animationDelay: "1.5s"}}></div>
        
        {/* Tech symbols floating */}
        <div className="absolute top-32 left-32 text-purple-300 opacity-10 text-2xl animate-pulse">&lt;/&gt;</div>
        <div className="absolute top-48 right-48 text-indigo-300 opacity-10 text-3xl animate-pulse" style={{animationDelay: "0.5s"}}>{ }</div>
        <div className="absolute bottom-32 left-1/3 text-violet-300 opacity-10 text-xl animate-pulse" style={{animationDelay: "1s"}}>&lt;html&gt;</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300">
            Here are some of the projects I've worked on that showcase my skills and interests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-all duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-violet-500/20 text-violet-300 px-2 py-1 rounded-full border border-violet-400/30 transition-all duration-300 hover:bg-violet-400/30 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  asChild 
                  className="group relative overflow-hidden bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300"
                >
                  <a href={project.link} className="flex items-center gap-2 z-10 relative">
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 transition-all duration-300 group-hover:w-full -z-10"></span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
