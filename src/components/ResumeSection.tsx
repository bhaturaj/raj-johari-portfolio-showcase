
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground mb-8">
            Download my resume to learn more about my education, experience, and qualifications
          </p>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Bhaturaj Johari - Resume</h3>
                <p className="text-muted-foreground">
                  Complete details of my technical background and projects
                </p>
              </div>
              
              <Button className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            The resume includes my education history, technical skills, projects, and professional interests.
            <br />Please feel free to reach out if you need any additional information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
