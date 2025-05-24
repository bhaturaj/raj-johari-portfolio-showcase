
import React, { useState } from "react";
import { X, Settings, User, Code, Briefcase, FileText, Mail, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  // Hero Section State
  const [heroData, setHeroData] = useState({
    name: "Bhaturaj Johari",
    role: "Developer & Tech Enthusiast",
    slogan: "Dream Big, Lead Bold"
  });

  // About Section State
  const [aboutData, setAboutData] = useState({
    dateOfBirth: "April 17, 2003",
    education: "Computer Science Background",
    passion: "Technology & Innovation",
    careerGoals: "IT Career Growth",
    profileImage: "/lovable-uploads/e503cca6-5f90-49b2-9dcb-327021bcfec5.png"
  });

  // Skills State
  const [skillsData, setSkillsData] = useState([
    { name: "C", category: "Languages", level: 85, icon: "⚡" },
    { name: "C++", category: "Languages", level: 80, icon: "⚡" },
    { name: "Java", category: "Languages", level: 75, icon: "☕" },
    { name: "Python", category: "Languages", level: 70, icon: "🐍" },
    { name: "DSA", category: "Core", level: 80, icon: "🧠" },
    { name: "DBMS", category: "Database", level: 85, icon: "🗄️" },
    { name: "SQL", category: "Database", level: 80, icon: "🗄️" },
    { name: "AI", category: "Technologies", level: 65, icon: "🤖" },
    { name: "MEAN Stack", category: "Web", level: 70, icon: "🌐" },
    { name: ".NET", category: "Framework", level: 75, icon: "🔧" },
  ]);

  // Projects State
  const [projectsData, setProjectsData] = useState({
    title: "My Projects",
    description: "Here are some of the projects I've worked on that showcase my skills and interests",
    projects: [
      {
        id: 1,
        title: "City Explorer App",
        description: "An interactive application that helps users navigate and discover points of interest in different cities.",
        technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
        link: "#"
      },
      {
        id: 2,
        title: "AI-based Question Generator",
        description: "A smart system that generates relevant questions based on educational content for teachers and students.",
        technologies: ["Python", "TensorFlow", "Flask", "NLP"],
        link: "#"
      }
    ]
  });

  // Resume State
  const [resumeData, setResumeData] = useState({
    title: "Bhaturaj Johari - Resume",
    description: "Complete details of my technical background and projects",
    downloadLink: "#"
  });

  // Contact State
  const [contactData, setContactData] = useState({
    email: "johariraj70@gmail.com",
    phone: "+91 8888176317",
    socialLinks: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      leetcode: "https://leetcode.com/"
    }
  });

  // Theme State
  const [themeData, setThemeData] = useState({
    primaryColor: "#8B5CF6",
    secondaryColor: "#6366F1",
    accentColor: "#EC4899"
  });

  const handleSaveChanges = () => {
    // In a real application, this would save to a database
    console.log("Saving changes:", {
      hero: heroData,
      about: aboutData,
      skills: skillsData,
      projects: projectsData,
      resume: resumeData,
      contact: contactData,
      theme: themeData
    });
    alert("Changes saved successfully! (Note: This is a demo - changes won't persist)");
    onClose();
  };

  const addNewSkill = () => {
    const newSkill = {
      name: "New Skill",
      category: "Languages",
      level: 50,
      icon: "⭐"
    };
    setSkillsData([...skillsData, newSkill]);
  };

  const updateSkill = (index: number, field: string, value: string | number) => {
    const updatedSkills = [...skillsData];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    setSkillsData(updatedSkills);
  };

  const removeSkill = (index: number) => {
    setSkillsData(skillsData.filter((_, i) => i !== index));
  };

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Admin Panel - Website Configuration
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="hero" className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Hero
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-1">
              <User className="w-4 h-4" />
              About
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-1">
              <Code className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="resume" className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Resume
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              Contact
            </TabsTrigger>
            <TabsTrigger value="theme" className="flex items-center gap-1">
              <Palette className="w-4 h-4" />
              Theme
            </TabsTrigger>
          </TabsList>

          {/* Hero Section Tab */}
          <TabsContent value="hero" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="hero-name">Name</Label>
                  <Input
                    id="hero-name"
                    value={heroData.name}
                    onChange={(e) => setHeroData({...heroData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="hero-role">Role</Label>
                  <Input
                    id="hero-role"
                    value={heroData.role}
                    onChange={(e) => setHeroData({...heroData, role: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="hero-slogan">Slogan</Label>
                  <Input
                    id="hero-slogan"
                    value={heroData.slogan}
                    onChange={(e) => setHeroData({...heroData, slogan: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Section Tab */}
          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>About Section Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="about-dob">Date of Birth</Label>
                  <Input
                    id="about-dob"
                    value={aboutData.dateOfBirth}
                    onChange={(e) => setAboutData({...aboutData, dateOfBirth: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="about-education">Education</Label>
                  <Input
                    id="about-education"
                    value={aboutData.education}
                    onChange={(e) => setAboutData({...aboutData, education: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="about-passion">Passion</Label>
                  <Input
                    id="about-passion"
                    value={aboutData.passion}
                    onChange={(e) => setAboutData({...aboutData, passion: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="about-goals">Career Goals</Label>
                  <Input
                    id="about-goals"
                    value={aboutData.careerGoals}
                    onChange={(e) => setAboutData({...aboutData, careerGoals: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="about-image">Profile Image URL</Label>
                  <Input
                    id="about-image"
                    value={aboutData.profileImage}
                    onChange={(e) => setAboutData({...aboutData, profileImage: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Section Tab */}
          <TabsContent value="skills" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Skills Management
                  <Button onClick={addNewSkill} size="sm">Add Skill</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="grid grid-cols-6 gap-2 items-center p-2 border rounded">
                      <Input
                        value={skill.name}
                        onChange={(e) => updateSkill(index, 'name', e.target.value)}
                        placeholder="Skill name"
                      />
                      <Input
                        value={skill.category}
                        onChange={(e) => updateSkill(index, 'category', e.target.value)}
                        placeholder="Category"
                      />
                      <Input
                        type="number"
                        value={skill.level}
                        onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
                        placeholder="Level"
                        min="0"
                        max="100"
                      />
                      <Input
                        value={skill.icon}
                        onChange={(e) => updateSkill(index, 'icon', e.target.value)}
                        placeholder="Icon"
                      />
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                      <Button 
                        onClick={() => removeSkill(index)} 
                        variant="destructive" 
                        size="sm"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Section Tab */}
          <TabsContent value="projects" className="space-y-4">
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
          </TabsContent>

          {/* Resume Section Tab */}
          <TabsContent value="resume" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Resume Section Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="resume-title">Resume Title</Label>
                  <Input
                    id="resume-title"
                    value={resumeData.title}
                    onChange={(e) => setResumeData({...resumeData, title: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="resume-desc">Description</Label>
                  <Textarea
                    id="resume-desc"
                    value={resumeData.description}
                    onChange={(e) => setResumeData({...resumeData, description: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="resume-link">Download Link</Label>
                  <Input
                    id="resume-link"
                    value={resumeData.downloadLink}
                    onChange={(e) => setResumeData({...resumeData, downloadLink: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Section Tab */}
          <TabsContent value="contact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input
                    id="contact-phone"
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-linkedin">LinkedIn URL</Label>
                  <Input
                    id="contact-linkedin"
                    value={contactData.socialLinks.linkedin}
                    onChange={(e) => setContactData({
                      ...contactData, 
                      socialLinks: {...contactData.socialLinks, linkedin: e.target.value}
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-github">GitHub URL</Label>
                  <Input
                    id="contact-github"
                    value={contactData.socialLinks.github}
                    onChange={(e) => setContactData({
                      ...contactData, 
                      socialLinks: {...contactData.socialLinks, github: e.target.value}
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-leetcode">LeetCode URL</Label>
                  <Input
                    id="contact-leetcode"
                    value={contactData.socialLinks.leetcode}
                    onChange={(e) => setContactData({
                      ...contactData, 
                      socialLinks: {...contactData.socialLinks, leetcode: e.target.value}
                    })}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Theme Section Tab */}
          <TabsContent value="theme" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Theme Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="theme-primary">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="theme-primary"
                      type="color"
                      value={themeData.primaryColor}
                      onChange={(e) => setThemeData({...themeData, primaryColor: e.target.value})}
                      className="w-20"
                    />
                    <Input
                      value={themeData.primaryColor}
                      onChange={(e) => setThemeData({...themeData, primaryColor: e.target.value})}
                      placeholder="#8B5CF6"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="theme-secondary">Secondary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="theme-secondary"
                      type="color"
                      value={themeData.secondaryColor}
                      onChange={(e) => setThemeData({...themeData, secondaryColor: e.target.value})}
                      className="w-20"
                    />
                    <Input
                      value={themeData.secondaryColor}
                      onChange={(e) => setThemeData({...themeData, secondaryColor: e.target.value})}
                      placeholder="#6366F1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="theme-accent">Accent Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="theme-accent"
                      type="color"
                      value={themeData.accentColor}
                      onChange={(e) => setThemeData({...themeData, accentColor: e.target.value})}
                      className="w-20"
                    />
                    <Input
                      value={themeData.accentColor}
                      onChange={(e) => setThemeData({...themeData, accentColor: e.target.value})}
                      placeholder="#EC4899"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;
