
import React from "react";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const SkillsSection = () => {
  const { content, loading } = useWebsiteContent();

  if (loading) {
    return (
      <section id="skills" className="section-padding relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 overflow-hidden">
        {/* Background Elements */}
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
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));
  
  // Custom colors for different categories
  const categoryColors = {
    "Languages": "from-violet-500 to-indigo-500",
    "Core": "from-blue-500 to-cyan-500",
    "Database": "from-pink-500 to-rose-500",
    "Technologies": "from-amber-500 to-orange-500",
    "Web": "from-emerald-500 to-green-500",
    "Framework": "from-purple-500 to-fuchsia-500"
  };

  // Real programming language logos and symbols
  const languageLogos = {
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
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
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-purple-400 opacity-5 blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-violet-300 opacity-5 blur-2xl animate-float" style={{animationDelay: "1.5s"}}></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-20 left-20 text-blue-300 opacity-10 text-2xl animate-pulse">{"</>"}</div>
        <div className="absolute bottom-20 right-20 text-indigo-300 opacity-10 text-xl animate-pulse" style={{animationDelay: "0.5s"}}>{"{ }"}</div>
        <div className="absolute top-1/2 left-10 text-purple-300 opacity-10 text-lg animate-pulse" style={{animationDelay: "1s"}}>{"[ ]"}</div>
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
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-16 overflow-hidden">
              <h3 className="text-2xl font-bold mb-8 text-white text-center flex items-center justify-center gap-3">
                <div className={`w-2 h-8 bg-gradient-to-b ${categoryColors[category] || "from-violet-500 to-indigo-500"} rounded-full`}></div>
                {category}
                <div className={`w-2 h-8 bg-gradient-to-b ${categoryColors[category] || "from-violet-500 to-indigo-500"} rounded-full`}></div>
              </h3>
              
              {/* Enhanced scrolling container with blur on both sides */}
              <div className="relative">
                <div 
                  className={`flex gap-6 ${
                    categoryIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'
                  }`}
                  style={{
                    width: 'max-content',
                    animationDuration: '25s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear'
                  }}
                >
                  {/* Duplicate the skills for continuous scrolling */}
                  {[...Array(4)].map((_, duplicateIndex) => (
                    <React.Fragment key={duplicateIndex}>
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill, skillIndex) => (
                          <div 
                            key={`${skill.name}-${duplicateIndex}`}
                            className="skill-card flex-shrink-0 w-72 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                          >
                            <div className="flex flex-col items-center w-full">
                              <div className="flex items-center gap-3 mb-4">
                                {languageLogos[skill.name] ? (
                                  <img 
                                    src={languageLogos[skill.name]} 
                                    alt={skill.name}
                                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
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
                                <span className="text-2xl group-hover:scale-110 transition-transform duration-300" style={{display: languageLogos[skill.name] ? 'none' : 'block'}}>
                                  {skill.icon || "💻"}
                                </span>
                                <span className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
                                  {skill.name}
                                </span>
                              </div>
                              
                              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden mb-3">
                                <div
                                  className={`bg-gradient-to-r ${categoryColors[category] || "from-violet-500 to-indigo-500"} h-3 rounded-full relative transition-all duration-1000 group-hover:scale-105`}
                                  style={{ width: `${skill.level}%` }}
                                >
                                  <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center w-full">
                                <span className="text-sm text-gray-300 font-medium">Proficiency</span>
                                <span className="text-lg text-white font-bold group-hover:text-blue-300 transition-colors">{skill.level}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* Enhanced gradient fade effects on both sides */}
                <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent pointer-events-none z-10"></div>
              </div>
            </div>
          ))}
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
          animation: scroll-left 25s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .skill-card:hover .animate-pulse {
          animation-duration: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
