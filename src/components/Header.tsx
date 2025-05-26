
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="text-xl font-bold font-heading text-primary flex items-center gap-3">
          Bhaturaj<span className="text-foreground">Johari</span>
          <div className="relative">
            <svg 
              className="w-8 h-8 text-primary" 
              style={{
                animation: 'rotate-horizontal 3s linear infinite',
                filter: 'drop-shadow(0 0 10px rgba(123, 97, 255, 0.8))'
              }}
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              {/* Diamond shape with better proportions */}
              <path d="M12 2L5 9L12 22L19 9Z" fill="url(#diamondGradient)" stroke="currentColor" strokeWidth="0.5"/>
              
              {/* Top facets */}
              <path d="M5 9L12 4L19 9L12 2Z" fill="rgba(255,255,255,0.6)"/>
              <path d="M8 9L12 5L16 9L12 4Z" fill="rgba(255,255,255,0.8)"/>
              
              {/* Side facets */}
              <path d="M5 9L9 15L12 4Z" fill="rgba(255,255,255,0.3)"/>
              <path d="M19 9L15 15L12 4Z" fill="rgba(255,255,255,0.3)"/>
              
              {/* Bottom facets */}
              <path d="M5 9L9 15L12 22Z" fill="rgba(0,0,0,0.2)"/>
              <path d="M19 9L15 15L12 22Z" fill="rgba(0,0,0,0.2)"/>
              <path d="M9 15L12 18L15 15L12 22Z" fill="rgba(0,0,0,0.3)"/>
              
              {/* Center highlight */}
              <path d="M10 5L12 3L14 5L12 7Z" fill="rgba(255,255,255,0.9)"/>
              
              <defs>
                <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="20%" stopColor="rgba(123, 97, 255, 0.9)" />
                  <stop offset="60%" stopColor="rgba(139, 92, 246, 1)" />
                  <stop offset="100%" stopColor="rgba(99, 102, 241, 1)" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Enhanced glow effects */}
            <div className="absolute inset-0 w-8 h-8 bg-primary/50 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute inset-0 w-8 h-8 bg-primary/30 rounded-full blur-md animate-pulse" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur-lg animate-pulse" style={{animationDelay: "1s"}}></div>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild>
            <a href="#resume">Resume</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="#resume">Resume</a>
            </Button>
          </nav>
        </div>
      )}
      
      <style>{`
        @keyframes rotate-horizontal {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
