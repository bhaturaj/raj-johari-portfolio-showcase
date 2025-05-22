
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
    },
    {
      title: "AI-based Question Generator",
      description: "A smart system that generates relevant questions based on educational content for teachers and students.",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Database Management System",
      description: "A custom DBMS for efficient data storage and retrieval with advanced querying capabilities.",
      technologies: ["SQL", "Java", "Spring Boot", "Redis"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "E-learning Platform",
      description: "A comprehensive platform for online education with interactive lessons and progress tracking.",
      technologies: ["MEAN Stack", ".NET", "Azure"],
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Here are some of the projects I've worked on that showcase my skills and interests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" asChild className="group">
                  <a href={project.link} className="flex items-center gap-2">
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
