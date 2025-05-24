
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const AboutSection = () => {
  const { content, loading } = useWebsiteContent();

  if (loading) {
    return (
      <section id="about" className="section-padding bg-about-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="section-title gradient-text">About Me</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
            <p className="text-muted-foreground mt-4">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!content?.about) {
    return null;
  }

  const { dateOfBirth, education, passion, careerGoals, profileImage } = content.about;

  return (
    <section id="about" className="section-padding bg-about-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="w-64 h-72 md:w-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden interactive-border relative z-10">
                <img 
                  src={profileImage || "/lovable-uploads/e1d62208-1d51-40fa-85df-f10f02304d02.png"} 
                  alt="Bhaturaj Johari" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg glass-card group-hover:shadow-xl transition-all duration-300 z-20">
                <p className="font-medium text-sm gradient-text">Born: {dateOfBirth}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Bhaturaj Johari</h3>
            
            <p className="text-muted-foreground mb-6">
              I am a passionate tech enthusiast and developer with a strong foundation in programming and software development. My journey in technology began with a curiosity about how things work in the digital world, which led me to pursue formal education in computer science and develop various technical skills.
            </p>
            
            <p className="text-muted-foreground mb-6">
              With a focus on both frontend and backend technologies, I enjoy creating efficient, user-friendly solutions. I'm particularly interested in AI, database systems, and full-stack development. My goal is to work in the IT field where I can contribute to innovative projects and continue growing my skills.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Card className="flex-1 min-w-[150px] hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-primary">Education</h4>
                  <p className="text-sm text-muted-foreground mt-2">{education}</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[150px] hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-primary">Passion</h4>
                  <p className="text-sm text-muted-foreground mt-2">{passion}</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[150px] hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-primary">Goal</h4>
                  <p className="text-sm text-muted-foreground mt-2">{careerGoals}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
