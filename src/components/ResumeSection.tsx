
import React from "react";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const ResumeSection = () => {
  const { content, loading } = useWebsiteContent();

  const handleDownload = () => {
    const resumeLink = content?.resume?.downloadLink;
    if (resumeLink) {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = resumeLink;
      link.download = 'Bhaturaj_Johari_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback: open email if no resume link
      window.location.href = 'mailto:johariraj70@gmail.com?subject=Resume Request&body=Hi, I would like to request your resume.';
    }
  };

  const handleViewOnline = () => {
    const resumeLink = content?.resume?.downloadLink;
    if (resumeLink) {
      // Open PDF in new tab for viewing
      window.open(resumeLink, '_blank');
    } else {
      // Fallback: open email if no resume link
      window.location.href = 'mailto:johariraj70@gmail.com?subject=Resume Request&body=Hi, I would like to view your resume online.';
    }
  };

  if (loading) {
    return (
      <section id="resume" className="section-padding relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  const resumeData = {
    title: content?.resume?.title || "My Professional Resume",
    description: content?.resume?.description || "Download my resume to learn more about my experience and skills",
    downloadLink: content?.resume?.downloadLink || ""
  };

  return (
    <section id="resume" className="section-padding relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 right-32 w-80 h-80 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-violet-400 opacity-5 blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-300 opacity-5 blur-2xl animate-float" style={{animationDelay: "1.5s"}}></div>
        
        {/* Floating icons */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-blue-400 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-indigo-400 opacity-20 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-violet-400 opacity-20 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-ping opacity-20"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {resumeData.title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                {resumeData.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={handleDownload}
                  size="lg" 
                  className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                
                <Button 
                  onClick={handleViewOnline}
                  variant="outline" 
                  size="lg"
                  className="group bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Online
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
