
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-animation" style={{"--reveal-delay": "1"} as React.CSSProperties}>
            <span className="inline-block text-primary font-medium mb-4">Hello, I'm</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 reveal-animation" style={{"--reveal-delay": "2"} as React.CSSProperties}>
            Bhaturaj Johari
          </h1>
          
          <div className="h-1 w-20 bg-primary mx-auto my-6 reveal-animation" style={{"--reveal-delay": "3"} as React.CSSProperties}></div>
          
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 reveal-animation" style={{"--reveal-delay": "4"} as React.CSSProperties}>
            Developer & Tech Enthusiast
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 reveal-animation" style={{"--reveal-delay": "5"} as React.CSSProperties}>
            "Dream Big, Lead Bold"
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center reveal-animation" style={{"--reveal-delay": "6"} as React.CSSProperties}>
            <Button asChild size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#about">Discover More</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
