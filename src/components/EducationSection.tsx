
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
    <section id="education" className="section-padding relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 right-40 w-72 h-72 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 rounded-full bg-indigo-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-purple-400 opacity-5 blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 rounded-full bg-violet-300 opacity-5 blur-2xl animate-float" style={{animationDelay: "1.5s"}}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 opacity-20 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-indigo-400 opacity-20 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
          <p className="text-gray-300 mt-4">
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
                  className="group bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${edu.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                              {edu.level}
                            </h3>
                            <p className="text-gray-300 font-medium mb-1">
                              {edu.institution}
                            </p>
                            <p className="text-sm text-gray-400">
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
