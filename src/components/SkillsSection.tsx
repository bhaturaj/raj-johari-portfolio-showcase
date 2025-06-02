
import React from "react";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const SkillsSection = () => {
  const { content, loading } = useWebsiteContent();

  if (loading) {
    return (
      <section id="skills" className="section-padding relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-40 right-32 w-72 h-72 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Skills</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-gray-300">Loading skills...</p>
          </div>
        </div>
      </section>
    );
  }

  // Professional skills array with proper logos
  const professionalSkills = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" }
  ];

  return (
    <section id="skills" className="section-padding relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-violet-400 opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-400 opacity-5 blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-400 opacity-3 blur-3xl animate-pulse" style={{animationDelay: "4s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            My <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-10 rounded-full"></div>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build innovative and scalable solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Professional Skills Carousel */}
          <div className="relative overflow-hidden py-16">
            <div 
              className="flex gap-20 animate-scroll-infinite"
              style={{
                width: 'max-content',
                animationDuration: '40s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            >
              {[...Array(3)].map((_, duplicateIndex) => (
                <React.Fragment key={duplicateIndex}>
                  {professionalSkills.map((skill, index) => (
                    <div 
                      key={`${skill.name}-${duplicateIndex}`}
                      className="flex-shrink-0 group cursor-pointer transition-all duration-700 hover:scale-110"
                    >
                      <div className="flex flex-col items-center gap-6 transition-all duration-700">
                        <div className="relative">
                          <div className="w-28 h-28 md:w-32 md:h-32 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700"></div>
                            <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-700">
                              <img 
                                src={skill.logo} 
                                alt={skill.name}
                                className="w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-700 filter group-hover:brightness-110 group-hover:drop-shadow-2xl"
                                onError={(e) => {
                                  const target = e.currentTarget as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-white text-lg font-bold transition-all duration-700 group-hover:text-violet-300 group-hover:scale-110">
                            {skill.name}
                          </p>
                          <div className="w-0 h-0.5 bg-gradient-to-r from-violet-400 to-indigo-400 mx-auto mt-2 group-hover:w-full transition-all duration-700"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Professional Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: "14+", label: "Technologies" },
              { number: "100+", label: "Hours Coding" },
              { number: "Multiple", label: "Projects" },
              { number: "Always", label: "Learning" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
