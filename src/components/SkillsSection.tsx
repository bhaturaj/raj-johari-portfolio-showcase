
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

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Here are the technologies and skills I've acquired through my
            education and projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div key={category} className="mb-10">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.name} 
                      className="skill-pill"
                      style={{
                        "--reveal-delay": index
                      } as React.CSSProperties}
                    >
                      <div className="flex flex-col items-center w-full">
                        <span className="text-foreground font-medium mb-2">
                          {skill.name}
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
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
