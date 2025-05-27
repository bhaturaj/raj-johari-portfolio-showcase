
import React, { useState, useEffect } from "react";
import { Settings, User, Code, Briefcase, FileText, Mail, Palette, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "./admin/LoginForm";
import HeroTab from "./admin/HeroTab";
import AboutTab from "./admin/AboutTab";
import EducationTab from "./admin/EducationTab";
import SkillsTab from "./admin/SkillsTab";
import ProjectsTab from "./admin/ProjectsTab";
import ResumeTab from "./admin/ResumeTab";
import ContactTab from "./admin/ContactTab";
import ThemeTab from "./admin/ThemeTab";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { content, loading, updateContent, refreshContent } = useWebsiteContent();
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

  // Default education data
  const defaultEducationData = [
    {
      level: "Bachelor of Technology (B.Tech)",
      institution: "SRM Institute of Science and Technology",
      percentage: "8.5 CGPA",
      year: "2021-2025",
      icon: "University",
      color: "from-blue-400 to-indigo-500"
    },
    {
      level: "Higher Secondary (12th)",
      institution: "DAV Public School",
      percentage: "92%",
      year: "2021",
      icon: "School",
      color: "from-purple-400 to-pink-500"
    },
    {
      level: "Secondary School (10th)",
      institution: "DAV Public School",
      percentage: "95%",
      year: "2019",
      icon: "GraduationCap",
      color: "from-green-400 to-blue-500"
    }
  ];

  const [educationData, setEducationData] = useState<Array<{
    level: string;
    institution: string;
    percentage: string;
    year: string;
    icon: string;
    color: string;
  }>>(defaultEducationData);

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
    email: "johariraj70@gmail.com",
    phone: "+91 8888176317",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bhaturaj-johari-74b18124a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/bhaturaj",
      leetcode: "https://leetcode.com/u/raj_johari_4141/"
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
      console.log('Loading content into admin panel:', content);
      setHeroData(content.hero);
      setAboutData(content.about);
      setEducationData(content.education?.educationData?.length > 0 
        ? content.education.educationData 
        : defaultEducationData);
      setSkillsData(content.skills.skills);
      setProjectsData(content.projects);
      setResumeData(content.resume);
      setContactData(content.contact);
      setThemeData(content.theme);
    }
  }, [content]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSaveChanges = async () => {
    try {
      console.log('Saving changes...', {
        heroData,
        aboutData,
        educationData,
        skillsData,
        projectsData,
        resumeData,
        contactData,
        themeData
      });

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
      
      // Refresh content to make sure it's updated
      await refreshContent();
      
      toast({
        title: "Success",
        description: "All changes saved successfully",
      });
      
      onClose();
    } catch (error) {
      console.error('Error saving changes:', error);
      toast({
        title: "Error",
        description: "Failed to save some changes",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setIsAuthenticated(false);
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
      <LoginForm 
        isOpen={isOpen} 
        onClose={handleClose} 
        onLogin={handleLogin} 
      />
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

          <TabsContent value="hero" className="space-y-4">
            <HeroTab heroData={heroData} setHeroData={setHeroData} />
          </TabsContent>

          <TabsContent value="about" className="space-y-4">
            <AboutTab aboutData={aboutData} setAboutData={setAboutData} />
          </TabsContent>

          <TabsContent value="education" className="space-y-4">
            <EducationTab educationData={educationData} setEducationData={setEducationData} />
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <SkillsTab skillsData={skillsData} setSkillsData={setSkillsData} />
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <ProjectsTab projectsData={projectsData} setProjectsData={setProjectsData} />
          </TabsContent>

          <TabsContent value="resume" className="space-y-4">
            <ResumeTab resumeData={resumeData} setResumeData={setResumeData} />
          </TabsContent>

          <TabsContent value="contact" className="space-y-4">
            <ContactTab contactData={contactData} setContactData={setContactData} />
          </TabsContent>

          <TabsContent value="theme" className="space-y-4">
            <ThemeTab themeData={themeData} setThemeData={setThemeData} />
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
