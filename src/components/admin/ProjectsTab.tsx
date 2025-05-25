
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

interface ProjectsData {
  title: string;
  description: string;
  projects: Project[];
}

interface ProjectsTabProps {
  projectsData: ProjectsData;
  setProjectsData: (data: ProjectsData) => void;
}

const ProjectsTab = ({ projectsData, setProjectsData }: ProjectsTabProps) => {
  const addNewProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      description: "Project description",
      technologies: ["Technology"],
      link: "#"
    };
    setProjectsData({
      ...projectsData,
      projects: [...projectsData.projects, newProject]
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Projects Management
          <Button onClick={addNewProject} size="sm">Add Project</Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="projects-title">Section Title</Label>
          <Input
            id="projects-title"
            value={projectsData.title}
            onChange={(e) => setProjectsData({...projectsData, title: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="projects-desc">Section Description</Label>
          <Textarea
            id="projects-desc"
            value={projectsData.description}
            onChange={(e) => setProjectsData({...projectsData, description: e.target.value})}
          />
        </div>
        <div className="space-y-4 max-h-64 overflow-y-auto">
          {projectsData.projects.map((project, index) => (
            <div key={project.id} className="border rounded p-4">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Input
                  value={project.title}
                  onChange={(e) => {
                    const updatedProjects = [...projectsData.projects];
                    updatedProjects[index].title = e.target.value;
                    setProjectsData({...projectsData, projects: updatedProjects});
                  }}
                  placeholder="Project title"
                />
                <Input
                  value={project.link}
                  onChange={(e) => {
                    const updatedProjects = [...projectsData.projects];
                    updatedProjects[index].link = e.target.value;
                    setProjectsData({...projectsData, projects: updatedProjects});
                  }}
                  placeholder="Project link"
                />
              </div>
              <Textarea
                value={project.description}
                onChange={(e) => {
                  const updatedProjects = [...projectsData.projects];
                  updatedProjects[index].description = e.target.value;
                  setProjectsData({...projectsData, projects: updatedProjects});
                }}
                placeholder="Project description"
                className="mb-2"
              />
              <Input
                value={project.technologies.join(", ")}
                onChange={(e) => {
                  const updatedProjects = [...projectsData.projects];
                  updatedProjects[index].technologies = e.target.value.split(", ");
                  setProjectsData({...projectsData, projects: updatedProjects});
                }}
                placeholder="Technologies (comma separated)"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsTab;
