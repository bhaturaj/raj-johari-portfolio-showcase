import React, { useState, useEffect } from "react";
import { X, Settings, User, Code, Briefcase, FileText, Mail, Palette, Lock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";
import { useToast } from "@/hooks/use-toast";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const { content, loading, updateContent } = useWebsiteContent();
  const { toast } = useToast();

  // Local state for editing
  const [heroData, setHeroData] = useState({
    name: "",
    role: "",
    slogan: ""
  });

  const [aboutData, setAboutData] = useState({
    dateOfBirth: "",
    education: "",
    passion: "",
    careerGoals: "",
    profileImage: ""
  });

  const [educationData, setEducationData] = useState<Array<{
    level: string;
    institution: string;
    percentage: string;
    year: string;
    icon: string;
    color: string;
  }>>([]);

  const [skillsData, setSkillsData] = useState<Array<{
    name: string;
    category: string;
    level: number;
    icon: string;
  }>>([]);

  const [projectsData, setProjectsData] = useState({
    title: "",
    description: "",
    projects: [] as Array<{
      id: number;
      title: string;
      description: string;
      technologies: string[];
      link: string;
    }>
  });

  const [resumeData, setResumeData] = useState({
    title: "",
    description: "",
    downloadLink: ""
  });

  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
    socialLinks: {
      linkedin: "",
      github: "",
      leetcode: ""
    }
  });

  const [themeData, setThemeData] = useState({
    primaryColor: "",
    secondaryColor: "",
    accentColor: ""
  });

  // Load content into local state when content changes
  useEffect(() => {
    if (content) {
      setHeroData(content.hero);
      setAboutData(content.about);
      setEducationData(content.education?.educationData || []);
      setSkillsData(content.skills.skills);
      setProjectsData(content.projects);
      setResumeData(content.resume);
      setContactData(content.contact);
      setThemeData(content.theme);
    }
  }, [content]);

  // Authentication
  const handleLogin = () => {
    if (loginId === "Bhaturaj" && loginPassword === "8888176317") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const handleSaveChanges = async () => {
    try {
      await Promise.all([
        updateContent('hero', heroData),
        updateContent('about', aboutData),
        updateContent('education', { educationData }),
        updateContent('skills', { skills: skillsData }),
        updateContent('projects', projectsData),
        updateContent('resume', resumeData),
        updateContent('contact', contactData),
        updateContent('theme', themeData)
      ]);
      
      toast({
        title: "Success",
        description: "All changes saved successfully",
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save some changes",
        variant: "destructive",
      });
    }
  };

  const addNewEducation = () => {
    const newEducation = {
      level: "New Degree",
      institution: "Institution Name",
      percentage: "0%",
      year: "Year",
      icon: "School",
      color: "from-blue-400 to-indigo-500"
    };
    setEducationData([...educationData, newEducation]);
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducation = [...educationData];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducationData(updatedEducation);
  };

  const removeEducation = (index: number) => {
    setEducationData(educationData.filter((_, i) => i !== index));
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

  const handleClose = () => {
    setIsAuthenticated(false);
    setLoginId("");
    setLoginPassword("");
    setLoginError("");
    onClose();
  };

  if (loading) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="flex items-center justify-center p-8">
            <div className="text-center">Loading...</div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!isAuthenticated) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Admin Login
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="login-id">ID</Label>
              <Input
                id="login-id"
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                placeholder="Enter admin ID"
              />
            </div>
            <div>
              <Label htmlFor="login-password">Password</Label>
              <Input
                id="login-password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter password"
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            {loginError && (
              <p className="text-red-500 text-sm">{loginError}</p>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Admin Panel - Website Configuration
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="hero" className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Hero
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-1">
              <User className="w-4 h-4" />
              About
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-1">
              <GraduationCap className="w-4 h-4" />
              Education
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

          {/* Education Section Tab */}
          <TabsContent value="education" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Education Management
                  <Button onClick={addNewEducation} size="sm">Add Education</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {educationData.map((education, index) => (
                    <div key={index} className="grid grid-cols-6 gap-2 items-center p-4 border rounded">
                      <div>
                        <Label>Level</Label>
                        <Input
                          value={education.level}
                          onChange={(e) => updateEducation(index, 'level', e.target.value)}
                          placeholder="Degree level"
                        />
                      </div>
                      <div>
                        <Label>Institution</Label>
                        <Input
                          value={education.institution}
                          onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                          placeholder="Institution name"
                        />
                      </div>
                      <div>
                        <Label>Percentage/CGPA</Label>
                        <Input
                          value={education.percentage}
                          onChange={(e) => updateEducation(index, 'percentage', e.target.value)}
                          placeholder="Score"
                        />
                      </div>
                      <div>
                        <Label>Year</Label>
                        <Input
                          value={education.year}
                          onChange={(e) => updateEducation(index, 'year', e.target.value)}
                          placeholder="Year/Status"
                        />
                      </div>
                      <div>
                        <Label>Icon</Label>
                        <Input
                          value={education.icon}
                          onChange={(e) => updateEducation(index, 'icon', e.target.value)}
                          placeholder="Icon name"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label>Color</Label>
                        <Input
                          value={education.color}
                          onChange={(e) => updateEducation(index, 'color', e.target.value)}
                          placeholder="Gradient classes"
                          className="text-xs"
                        />
                        <Button 
                          onClick={() => removeEducation(index)} 
                          variant="destructive" 
                          size="sm"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
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
          <Button variant="outline" onClick={handleClose}>
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
