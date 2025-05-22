
import React from "react";

const SkillsSection = () => {
  const skills = [
    { name: "C", category: "Languages", level: 85 },
    { name: "C++", category: "Languages", level: 80 },
    { name: "Java", category: "Languages", level: 75 },
    { name: "Python", category: "Languages", level: 70 },
    { name: "DSA", category: "Core", level: 80 },
    { name: "DBMS", category: "Database", level: 85 },
    { name: "SQL", category: "Database", level: 80 },
    { name: "AI", category: "Technologies", level: 65 },
    { name: "MEAN Stack", category: "Web", level: 70 },
    { name: ".NET", category: "Framework", level: 75 },
  ];

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

  return (
    <section id="skills" className="section-padding bg-skills-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-40 w-64 h-64 rounded-full border-4 border-purple-300 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full border-4 border-indigo-300" 
             style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-violet-200 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Skills</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Here are the technologies and skills I've acquired through my
            education and projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div key={category} className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-violet-800">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="skill-pill hover:shadow-lg hover:shadow-purple-200/30 transition-all"
                      style={{
                        "--reveal-delay": index + skillIndex * 0.2
                      } as React.CSSProperties}
                    >
                      <div className="flex flex-col items-center w-full">
                        <span className="text-violet-800 font-medium mb-2">
                          {skill.name}
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`bg-gradient-to-r ${categoryColors[category] || "from-violet-500 to-indigo-500"} h-2.5 rounded-full relative`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute top-0 left-0 w-full h-full bg-shimmer opacity-50 animate-shimmer"></div>
                          </div>
                        </div>
                        <span className="text-xs text-violet-600 mt-1 font-medium">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
