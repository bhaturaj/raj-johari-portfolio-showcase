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

  if (!content?.skills?.skills) {
    return null;
  }

  const skills = content.skills.skills;
  
  // Separate programming languages from other skills
  const programmingLanguages = skills.filter(skill => 
    skill.category === "Languages" || 
    ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "HTML", "CSS"].includes(skill.name)
  );
  
  const otherSkills = skills.filter(skill => !programmingLanguages.includes(skill));
  
  // Programming language logos
  const languageLogos = {
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  };

  const otherLogos = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  };

  return (
    <section id="skills" className="section-padding relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-32 w-72 h-72 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Skills</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300">
            Technologies and skills I've mastered through continuous learning and hands-on experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Programming Languages Carousel */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-12 text-white text-center">
              Programming Languages
            </h3>
            
            {/* Clean Logo Carousel */}
            <div className="relative overflow-hidden py-8">
              <div 
                className="flex gap-16 animate-scroll-infinite"
                style={{
                  width: 'max-content',
                  animationDuration: '30s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear'
                }}
              >
                {/* Triple the logos for seamless infinite loop */}
                {[...Array(3)].map((_, duplicateIndex) => (
                  <React.Fragment key={duplicateIndex}>
                    {programmingLanguages.map((skill) => (
                      <div 
                        key={`${skill.name}-${duplicateIndex}`}
                        className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 transition-all duration-300 group-hover:drop-shadow-2xl">
                            {languageLogos[skill.name] ? (
                              <img 
                                src={languageLogos[skill.name]} 
                                alt={skill.name}
                                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                                onError={(e) => {
                                  const target = e.currentTarget as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold bg-white/10 rounded-lg">
                                {skill.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <p className="text-white text-sm font-medium transition-all duration-300 group-hover:text-violet-300">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          {/* Other Skills Grid */}
          {otherSkills.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-12 text-white text-center">
                Technologies & Tools
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {otherSkills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-lg">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 mb-3">
                          {otherLogos[skill.name] ? (
                            <img 
                              src={otherLogos[skill.name]} 
                              alt={skill.name}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.style.display = 'none';
                                const nextElement = target.nextElementSibling as HTMLElement;
                                if (nextElement) {
                                  nextElement.style.display = 'block';
                                }
                              }}
                            />
                          ) : null}
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300" style={{display: otherLogos[skill.name] ? 'none' : 'block'}}>
                            {skill.icon || "⚡"}
                          </span>
                        </div>
                        
                        <span className="text-white font-medium text-sm text-center group-hover:text-violet-300 transition-colors">
                          {skill.name}
                        </span>
                        
                        <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                          <div
                            className="bg-gradient-to-r from-violet-500 to-indigo-500 h-1 rounded-full transition-all duration-300 group-hover:scale-105"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        
                        <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
          animation: scroll-infinite 30s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
