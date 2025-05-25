
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, University } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      level: "SSC (Secondary School Certificate)",
      institution: "S A Mission English Medium School",
      percentage: "81.20%",
      year: "Completed",
      icon: School,
      color: "from-green-400 to-emerald-500"
    },
    {
      level: "HSC (Higher Secondary Certificate)",
      institution: "New High School and Junior College",
      percentage: "79.33%",
      year: "Completed",
      icon: GraduationCap,
      color: "from-blue-400 to-indigo-500"
    },
    {
      level: "B.Tech (Information Technology)",
      institution: "Parul University, Vadodara, Gujarat",
      percentage: "CGPA 6.32",
      year: "Currently Pursuing",
      icon: University,
      color: "from-purple-400 to-violet-500"
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title gradient-text">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            My academic journey and educational achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${edu.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                              {edu.level}
                            </h3>
                            <p className="text-gray-600 font-medium mb-1">
                              {edu.institution}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {edu.year}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white font-bold shadow-md`}>
                              {edu.percentage}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
