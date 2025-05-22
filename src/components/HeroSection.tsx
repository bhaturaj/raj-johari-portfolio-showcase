
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-animation" style={{"--reveal-delay": "1"} as React.CSSProperties}>
            <span className="inline-block text-primary font-medium mb-4 py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm">Hello, I'm</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 reveal-animation text-white" style={{"--reveal-delay": "2"} as React.CSSProperties}>
            Bhaturaj <span className="gradient-text">Johari</span>
          </h1>
          
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto my-6 reveal-animation" style={{"--reveal-delay": "3"} as React.CSSProperties}></div>
          
          <h2 className="text-xl md:text-2xl font-medium text-blue-100 mb-8 reveal-animation" style={{"--reveal-delay": "4"} as React.CSSProperties}>
            Developer & Tech Enthusiast
          </h2>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 reveal-animation italic" style={{"--reveal-delay": "5"} as React.CSSProperties}>
            "Dream Big, Lead Bold"
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center reveal-animation" style={{"--reveal-delay": "6"} as React.CSSProperties}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <a href="#about">Discover More</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-blue-200 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
