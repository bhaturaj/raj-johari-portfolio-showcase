
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

  // Divide skills into 3 rows
  const row1Skills = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" }
  ];

  const row2Skills = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
  ];

  const row3Skills = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" }
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

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Row 1 - Left to Right */}
          <div className="relative overflow-hidden py-8">
            <div 
              className="flex gap-16 animate-scroll-left"
              style={{
                width: 'max-content',
                animationDuration: '30s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            >
              {[...Array(4)].map((_, duplicateIndex) => (
                <React.Fragment key={duplicateIndex}>
                  {row1Skills.map((skill, index) => (
                    <div 
                      key={`${skill.name}-${duplicateIndex}`}
                      className="flex-shrink-0 group cursor-pointer transition-all duration-500 hover:scale-125"
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-500 filter hover:brightness-110 hover:drop-shadow-2xl"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative overflow-hidden py-8">
            <div 
              className="flex gap-16 animate-scroll-right"
              style={{
                width: 'max-content',
                animationDuration: '35s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            >
              {[...Array(4)].map((_, duplicateIndex) => (
                <React.Fragment key={duplicateIndex}>
                  {row2Skills.map((skill, index) => (
                    <div 
                      key={`${skill.name}-${duplicateIndex}`}
                      className="flex-shrink-0 group cursor-pointer transition-all duration-500 hover:scale-125"
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-500 filter hover:brightness-110 hover:drop-shadow-2xl"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Row 3 - Left to Right */}
          <div className="relative overflow-hidden py-8">
            <div 
              className="flex gap-16 animate-scroll-left"
              style={{
                width: 'max-content',
                animationDuration: '40s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            >
              {[...Array(4)].map((_, duplicateIndex) => (
                <React.Fragment key={duplicateIndex}>
                  {row3Skills.map((skill, index) => (
                    <div 
                      key={`${skill.name}-${duplicateIndex}`}
                      className="flex-shrink-0 group cursor-pointer transition-all duration-500 hover:scale-125"
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-500 filter hover:brightness-110 hover:drop-shadow-2xl"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
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
              { number: "12+", label: "Technologies" },
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
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left var(--duration, 30s) linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right var(--duration, 35s) linear infinite;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
