
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface WebsiteContent {
  hero: {
    name: string;
    role: string;
    slogan: string;
  };
  about: {
    dateOfBirth: string;
    education: string;
    passion: string;
    careerGoals: string;
    profileImage: string;
  };
  education: {
    educationData: Array<{
      level: string;
      institution: string;
      percentage: string;
      year: string;
      icon: string;
      color: string;
    }>;
  };
  skills: {
    skills: Array<{
      name: string;
      category: string;
      level: number;
      icon: string;
    }>;
  };
  projects: {
    title: string;
    description: string;
    projects: Array<{
      id: number;
      title: string;
      description: string;
      technologies: string[];
      link: string;
    }>;
  };
  resume: {
    title: string;
    description: string;
    downloadLink: string;
  };
  contact: {
    email: string;
    phone: string;
    socialLinks: {
      linkedin: string;
      github: string;
      leetcode: string;
    };
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
}

const getDefaultContent = (): WebsiteContent => ({
  hero: {
    name: "Bhaturaj Johari",
    role: "Full Stack Developer",
    slogan: "Creating innovative solutions with code"
  },
  about: {
    dateOfBirth: "April 15, 2003",
    education: "B.Tech Computer Science",
    passion: "Technology & Innovation",
    careerGoals: "Software Engineer",
    profileImage: "/lovable-uploads/e1d62208-1d51-40fa-85df-f10f02304d02.png"
  },
  education: {
    educationData: [
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
    ]
  },
  skills: {
    skills: [
      { name: "React", category: "Frontend", level: 90, icon: "⚛️" },
      { name: "JavaScript", category: "Languages", level: 85, icon: "📜" },
      { name: "Node.js", category: "Backend", level: 80, icon: "🚀" },
      { name: "Python", category: "Languages", level: 75, icon: "🐍" },
      { name: "SQL", category: "Database", level: 70, icon: "🗄️" }
    ]
  },
  projects: {
    title: "My Projects",
    description: "Here are some of the projects I've worked on",
    projects: [
      {
        id: 1,
        title: "City Explorer App",
        description: "An interactive application that helps users navigate and discover points of interest in different cities.",
        technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
        link: "#"
      }
    ]
  },
  resume: {
    title: "My Resume",
    description: "Download my professional resume",
    downloadLink: ""
  },
  contact: {
    email: "johariraj70@gmail.com",
    phone: "+91 8888176317",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bhaturaj-johari-74b18124a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/bhaturaj",
      leetcode: "https://leetcode.com/u/raj_johari_4141/"
    }
  },
  theme: {
    primaryColor: "#3B82F6",
    secondaryColor: "#8B5CF6",
    accentColor: "#10B981"
  }
});

export const useWebsiteContent = () => {
  const [content, setContent] = useState<WebsiteContent>(getDefaultContent());
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('website_content')
        .select('section, content');

      if (error) throw error;

      if (data && data.length > 0) {
        const contentObj: any = getDefaultContent();
        data.forEach((item) => {
          contentObj[item.section] = { ...contentObj[item.section], ...item.content };
        });
        setContent(contentObj as WebsiteContent);
      }
    } catch (error) {
      console.error('Error loading content:', error);
      toast({
        title: "Error",
        description: "Failed to load website content",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (section: string, newContent: any) => {
    try {
      const { error } = await supabase
        .from('website_content')
        .upsert({
          section,
          content: newContent,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'section'
        });

      if (error) throw error;

      // Update local state immediately
      setContent(prev => ({
        ...prev,
        [section]: newContent
      }));

      toast({
        title: "Success",
        description: "Content updated successfully",
      });
    } catch (error) {
      console.error('Error updating content:', error);
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return { content, loading, updateContent, refreshContent: loadContent };
};
