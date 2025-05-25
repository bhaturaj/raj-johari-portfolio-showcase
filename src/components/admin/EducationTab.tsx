
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface EducationItem {
  level: string;
  institution: string;
  percentage: string;
  year: string;
  icon: string;
  color: string;
}

interface EducationTabProps {
  educationData: EducationItem[];
  setEducationData: (data: EducationItem[]) => void;
}

const EducationTab = ({ educationData, setEducationData }: EducationTabProps) => {
  const addNewEducation = () => {
    const newEducation = {
      level: "New Degree",
      institution: "Institution Name",
      percentage: "0%",
      year: "Year",
      icon: "School",
      color: "from-blue-400 to-indigo-500"
    };
    setEducationData([...educationData, newEducation]);
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducation = [...educationData];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducationData(updatedEducation);
  };

  const removeEducation = (index: number) => {
    setEducationData(educationData.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Education Management
          <Button onClick={addNewEducation} size="sm">Add Education</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {educationData.map((education, index) => (
            <div key={index} className="grid grid-cols-6 gap-2 items-center p-4 border rounded">
              <div>
                <Label>Level</Label>
                <Input
                  value={education.level}
                  onChange={(e) => updateEducation(index, 'level', e.target.value)}
                  placeholder="Degree level"
                />
              </div>
              <div>
                <Label>Institution</Label>
                <Input
                  value={education.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  placeholder="Institution name"
                />
              </div>
              <div>
                <Label>Percentage/CGPA</Label>
                <Input
                  value={education.percentage}
                  onChange={(e) => updateEducation(index, 'percentage', e.target.value)}
                  placeholder="Score"
                />
              </div>
              <div>
                <Label>Year</Label>
                <Input
                  value={education.year}
                  onChange={(e) => updateEducation(index, 'year', e.target.value)}
                  placeholder="Year/Status"
                />
              </div>
              <div>
                <Label>Icon</Label>
                <Input
                  value={education.icon}
                  onChange={(e) => updateEducation(index, 'icon', e.target.value)}
                  placeholder="Icon name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Color</Label>
                <Input
                  value={education.color}
                  onChange={(e) => updateEducation(index, 'color', e.target.value)}
                  placeholder="Gradient classes"
                  className="text-xs"
                />
                <Button 
                  onClick={() => removeEducation(index)} 
                  variant="destructive" 
                  size="sm"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationTab;
