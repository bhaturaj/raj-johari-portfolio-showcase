
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-72 md:w-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                {/* Profile image placeholder - would be replaced with an actual image */}
                <img 
                  src="/placeholder.svg" 
                  alt="Raj Bhaiya Johari" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-medium text-sm">Born: April 17, 2003</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Raj Bhaiya Johari</h3>
            
            <p className="text-muted-foreground mb-6">
              I am a passionate tech enthusiast and developer with a strong foundation in programming and software development. My journey in technology began with a curiosity about how things work in the digital world, which led me to pursue formal education in computer science and develop various technical skills.
            </p>
            
            <p className="text-muted-foreground mb-6">
              With a focus on both frontend and backend technologies, I enjoy creating efficient, user-friendly solutions. I'm particularly interested in AI, database systems, and full-stack development. My goal is to work in the IT field where I can contribute to innovative projects and continue growing my skills.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Card className="flex-1 min-w-[150px]">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-primary">Education</h4>
                  <p className="text-sm text-muted-foreground mt-2">Computer Science Background</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[150px]">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-primary">Passion</h4>
                  <p className="text-sm text-muted-foreground mt-2">Technology & Innovation</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[150px]">
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-xl text-primary">Goal</h4>
                  <p className="text-sm text-muted-foreground mt-2">IT Career Growth</p>
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
