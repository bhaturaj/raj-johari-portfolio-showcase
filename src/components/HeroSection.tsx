
import React, { useState, useEffect } from "react";
import { ArrowDown, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const taglines = [
    "Dream Big, Lead Bold",
    "Code the Future",
    "Innovate with Purpose",
    "Build Tomorrow Today",
    "Transform Ideas into Reality"
  ];
  
  const [currentTagline, setCurrentTagline] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Realistic typing animation with variable speeds
  useEffect(() => {
    const currentText = taglines[taglineIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    // Variable typing speeds for more realistic effect
    const typeSpeed = isDeleting 
      ? Math.random() * 50 + 30  // 30-80ms for deleting
      : Math.random() * 100 + 80; // 80-180ms for typing

    if (!isDeleting && charIndex === currentText.length) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentTagline(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setCurrentTagline(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, taglineIndex, taglines, isPaused]);

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
            <span className="inline-block text-white font-medium mb-4 py-3 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <span className="bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent font-semibold">
                Hello, I'm
              </span>
            </span>
          </div>
          
          <div className="name-container reveal-animation" style={{"--reveal-delay": "2"} as React.CSSProperties}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white name-animation">
              <span className="name-text relative inline-block">
                Bhaturaj <span className="highlight-text bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">Johari</span>
              </span>
            </h1>
          </div>
          
          <div className="h-1.5 w-32 bg-gradient-to-r from-violet-400 via-pink-500 to-indigo-500 mx-auto my-8 reveal-animation rounded-full shadow-glow" style={{"--reveal-delay": "3"} as React.CSSProperties}></div>
          
          <h2 className="text-xl md:text-2xl font-medium text-purple-100 mb-8 reveal-animation" style={{"--reveal-delay": "4"} as React.CSSProperties}>
            Developer & Tech Enthusiast
          </h2>
          
          {/* Coding-style Animated Tagline */}
          <div className="text-2xl md:text-3xl font-bold text-white mb-12 reveal-animation h-12 flex items-center justify-center" style={{"--reveal-delay": "5"} as React.CSSProperties}>
            <div className="relative font-mono">
              <span className="text-green-400">&gt;</span>
              <span className="text-yellow-300 ml-2">echo</span>
              <span className="text-white ml-2">"</span>
              <span className="text-cyan-300">{currentTagline}</span>
              <span className="text-white">"|</span>
              <span className="animate-pulse text-white bg-white w-0.5 h-6 inline-block ml-1 coding-cursor"></span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center reveal-animation" style={{"--reveal-delay": "6"} as React.CSSProperties}>
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-violet-500/25 border-0 px-10 py-4 rounded-full text-lg font-semibold"
            >
              <a href="#contact" className="flex items-center gap-3 relative z-10">
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                Get In Touch
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden bg-white/5 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-white/10 px-10 py-4 rounded-full text-lg font-semibold"
            >
              <a href="#about" className="flex items-center gap-3 relative z-10">
                <User className="w-5 h-5 group-hover:animate-pulse" />
                Learn More
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-purple-200 transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm">
          <ArrowDown size={24} />
        </a>
      </div>

      <style>{`
        .name-animation {
          animation: text-shimmer 4s infinite;
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
          animation: light-slide 4s infinite;
        }
        
        .highlight-text {
          text-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
          animation: pulse-text 3s infinite alternate;
        }
        
        .coding-cursor {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
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
