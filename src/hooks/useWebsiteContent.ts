
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

export const useWebsiteContent = () => {
  const [content, setContent] = useState<WebsiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('website_content')
        .select('section, content');

      if (error) throw error;

      if (data) {
        const contentObj: any = {};
        data.forEach((item) => {
          contentObj[item.section] = item.content;
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

      // Update local state
      setContent(prev => prev ? {
        ...prev,
        [section]: newContent
      } : null);

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
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return { content, loading, updateContent, refreshContent: loadContent };
};
