
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
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-300 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-300 opacity-20 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-40 left-40 w-40 h-40 rounded-full bg-violet-400 opacity-10 blur-2xl animate-float"></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 rounded-full bg-blue-300 opacity-10 blur-2xl animate-float" style={{animationDelay: "1.5s"}}></div>
        
        {/* Light effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-purple-glow opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-animation" style={{"--reveal-delay": "1"} as React.CSSProperties}>
            <span className="inline-block text-white font-medium mb-4 py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">Hello, I'm</span>
          </div>
          
          <div className="name-container reveal-animation" style={{"--reveal-delay": "2"} as React.CSSProperties}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-white name-animation">
              <span className="name-text relative inline-block">
                Bhaturaj <span className="highlight-text bg-gradient-to-r from-violet-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">Johari</span>
              </span>
            </h1>
            <div className="name-shadow absolute left-1/2 transform -translate-x-1/2 opacity-30 blur-md -z-10"></div>
          </div>
          
          <div className="h-1.5 w-32 bg-gradient-to-r from-violet-400 via-pink-500 to-indigo-500 mx-auto my-6 reveal-animation rounded-full shadow-glow" style={{"--reveal-delay": "3"} as React.CSSProperties}></div>
          
          <h2 className="text-xl md:text-2xl font-medium text-purple-100 mb-8 reveal-animation" style={{"--reveal-delay": "4"} as React.CSSProperties}>
            Developer & Tech Enthusiast
          </h2>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 reveal-animation italic" style={{"--reveal-delay": "5"} as React.CSSProperties}>
            "Dream Big, Lead Bold"
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center reveal-animation" style={{"--reveal-delay": "6"} as React.CSSProperties}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 pulse-effect"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 glowing-border"
            >
              <a href="#about">Discover More</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-purple-200 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>

      <style jsx>{`
        .name-animation {
          animation: text-shimmer 3s infinite;
        }
        
        .name-text:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          height: 4px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          transform: translateX(-100%);
          animation: light-slide 3s infinite;
        }
        
        .highlight-text {
          text-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
          animation: pulse-text 2s infinite alternate;
        }
        
        @keyframes light-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-text {
          0% { opacity: 0.9; }
          100% { opacity: 1; text-shadow: 0 0 20px rgba(139, 92, 246, 0.8); }
        }
        
        @keyframes text-shimmer {
          0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.1); }
          50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
          100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.1); }
        }
        
        .shadow-glow {
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
