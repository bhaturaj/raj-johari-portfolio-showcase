import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const AboutSection = () => {
  const { content, loading } = useWebsiteContent();

  if (loading) {
    return (
      <section id="about" className="section-padding relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-40 right-32 w-80 h-80 rounded-full bg-purple-300 opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-96 h-96 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-violet-400 opacity-5 blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-blue-300 opacity-5 blur-2xl animate-float" style={{animationDelay: "1.5s"}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
            <p className="text-gray-300 mt-4">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!content?.about) {
    return null;
  }

  const { dateOfBirth, education, passion, careerGoals } = content.about;

  return (
    <section id="about" className="section-padding relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-32 w-80 h-80 rounded-full bg-purple-300 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-violet-400 opacity-5 blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-blue-300 opacity-5 blur-2xl animate-float" style={{animationDelay: "1.5s"}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="w-64 h-72 md:w-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden interactive-border relative z-10">
                <img 
                  src="/lovable-uploads/b4c1a83b-ed2e-4d1d-9b7d-398da2f0f393.png" 
                  alt="Bhaturaj Johari" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300 z-20">
                <p className="font-medium text-sm text-white">Born: {dateOfBirth}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Bhaturaj Johari</h3>
            
            <p className="text-gray-300 mb-6">
              I am a passionate tech enthusiast and developer with a strong foundation in programming and software development. My journey in technology began with a curiosity about how things work in the digital world, which led me to pursue formal education in computer science and develop various technical skills.
            </p>
            
            <p className="text-gray-300 mb-6">
              With a focus on both frontend and backend technologies, I enjoy creating efficient, user-friendly solutions. I'm particularly interested in AI, database systems, and full-stack development. My goal is to work in the IT field where I can contribute to innovative projects and continue growing my skills.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Card className="flex-1 min-w-[150px] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-white">Education</h4>
                  <p className="text-sm text-gray-300 mt-2">{education}</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[150px] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-white">Passion</h4>
                  <p className="text-sm text-gray-300 mt-2">{passion}</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[150px] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-white">Goal</h4>
                  <p className="text-sm text-gray-300 mt-2">{careerGoals}</p>
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
