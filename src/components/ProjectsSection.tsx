
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "City Explorer App",
      description: "An interactive application that helps users navigate and discover points of interest in different cities.",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      image: "/placeholder.svg",
      link: "#",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "AI-based Question Generator",
      description: "A smart system that generates relevant questions based on educational content for teachers and students.",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      image: "/placeholder.svg",
      link: "#",
      color: "from-violet-600 to-purple-500"
    },
    {
      title: "Database Management System",
      description: "A custom DBMS for efficient data storage and retrieval with advanced querying capabilities.",
      technologies: ["SQL", "Java", "Spring Boot", "Redis"],
      image: "/placeholder.svg",
      link: "#",
      color: "from-emerald-600 to-green-500"
    },
    {
      title: "E-learning Platform",
      description: "A comprehensive platform for online education with interactive lessons and progress tracking.",
      technologies: ["MEAN Stack", ".NET", "Azure"],
      image: "/placeholder.svg",
      link: "#",
      color: "from-pink-600 to-rose-500"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-violet-400"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 rounded-full bg-indigo-400"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-purple-400"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title gradient-text">My Projects</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Here are some of the projects I've worked on that showcase my skills and interests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group hover:shadow-lg hover:shadow-purple-100">
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-violet-50 text-violet-600 px-2 py-1 rounded-full border border-violet-100 transition-all duration-300 hover:bg-violet-100 hover:text-violet-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  asChild 
                  className="group relative overflow-hidden bg-gradient-to-r from-white to-purple-50 hover:from-purple-50 hover:to-violet-100 border-violet-200"
                >
                  <a href={project.link} className="flex items-center gap-2 z-10 relative">
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-violet-100/40 to-indigo-100/40 transition-all duration-300 group-hover:w-full -z-10"></span>
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
