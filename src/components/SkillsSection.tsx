
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
    ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "HTML", "CSS", "PHP", "Go", "Rust"].includes(skill.name)
  );
  
  const otherSkills = skills.filter(skill => !programmingLanguages.includes(skill));
  
  // Programming language logos with high-quality CDN links
  const languageLogos = {
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "Go": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    "Rust": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
  };

  const techLogos = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    "Vue": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
  };

  return (
    <section id="skills" className="section-padding relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-violet-400 opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-400 opacity-5 blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-400 opacity-3 blur-3xl animate-pulse" style={{animationDelay: "4s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Technologies and programming languages I've mastered through continuous learning and hands-on experience
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {/* Programming Languages Dynamic Carousel */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-16 text-white text-center">
              Programming Languages
            </h3>
            
            <div className="relative overflow-hidden py-12">
              <div 
                className="flex gap-20 animate-scroll-infinite"
                style={{
                  width: 'max-content',
                  animationDuration: '40s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear'
                }}
              >
                {[...Array(4)].map((_, duplicateIndex) => (
                  <React.Fragment key={duplicateIndex}>
                    {programmingLanguages.map((skill) => (
                      <div 
                        key={`${skill.name}-${duplicateIndex}`}
                        className="flex-shrink-0 group cursor-pointer transition-all duration-500 hover:scale-125"
                      >
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-20 h-20 md:w-24 md:h-24 transition-all duration-500 group-hover:drop-shadow-2xl group-hover:filter group-hover:brightness-110">
                            {languageLogos[skill.name] ? (
                              <img 
                                src={languageLogos[skill.name]} 
                                alt={skill.name}
                                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  const target = e.currentTarget as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl">
                                {skill.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <p className="text-white text-base font-semibold transition-all duration-500 group-hover:text-violet-300 group-hover:scale-110">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Enhanced gradient fade effects */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          {/* Technologies & Tools Dynamic Carousel */}
          {otherSkills.length > 0 && (
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-16 text-white text-center">
                Technologies & Tools
              </h3>
              
              <div className="relative overflow-hidden py-12">
                <div 
                  className="flex gap-20 animate-scroll-infinite-reverse"
                  style={{
                    width: 'max-content',
                    animationDuration: '50s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear'
                  }}
                >
                  {[...Array(4)].map((_, duplicateIndex) => (
                    <React.Fragment key={duplicateIndex}>
                      {otherSkills.map((skill) => (
                        <div 
                          key={`${skill.name}-${duplicateIndex}`}
                          className="flex-shrink-0 group cursor-pointer transition-all duration-500 hover:scale-125"
                        >
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 md:w-24 md:h-24 transition-all duration-500 group-hover:drop-shadow-2xl group-hover:filter group-hover:brightness-110">
                              {techLogos[skill.name] ? (
                                <img 
                                  src={techLogos[skill.name]} 
                                  alt={skill.name}
                                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                                  onError={(e) => {
                                    const target = e.currentTarget as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl">
                                  {skill.icon || skill.name.charAt(0)}
                                </div>
                              )}
                            </div>
                            <p className="text-white text-base font-semibold transition-all duration-500 group-hover:text-indigo-300 group-hover:scale-110">
                              {skill.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* Enhanced gradient fade effects */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
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
            transform: translateX(-25%);
          }
        }
        
        @keyframes scroll-infinite-reverse {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }
        
        .animate-scroll-infinite-reverse {
          animation: scroll-infinite-reverse 50s linear infinite;
        }
        
        .animate-scroll-infinite:hover,
        .animate-scroll-infinite-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
