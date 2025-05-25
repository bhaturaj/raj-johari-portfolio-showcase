
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const ResumeSection = () => {
  const { content, loading } = useWebsiteContent();

  if (loading) {
    return (
      <section id="resume" className="section-padding relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-40 right-32 w-72 h-72 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Resume</h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 mb-8">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!content?.resume) {
    return null;
  }

  const { title, description, downloadLink } = content.resume;

  return (
    <section id="resume" className="section-padding relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-32 w-72 h-72 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-purple-400 opacity-5 blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full bg-violet-300 opacity-5 blur-2xl animate-float" style={{animationDelay: "1.5s"}}></div>
        
        {/* Document symbols */}
        <div className="absolute top-24 left-24 text-blue-300 opacity-10 text-3xl animate-pulse">📄</div>
        <div className="absolute bottom-24 right-24 text-indigo-300 opacity-10 text-2xl animate-pulse" style={{animationDelay: "0.5s"}}>📋</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Resume</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 mb-8">
            Download my resume to learn more about my education, experience, and qualifications
          </p>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-8 mb-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-300">
                  {description}
                </p>
              </div>
              
              <Button 
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={() => {
                  if (downloadLink && downloadLink !== "#") {
                    window.open(downloadLink, "_blank");
                  }
                }}
                disabled={!downloadLink || downloadLink === "#"}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            The resume includes my education history, technical skills, projects, and professional interests.
            <br />Please feel free to reach out if you need any additional information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
