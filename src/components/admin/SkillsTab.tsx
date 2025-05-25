
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
}

interface SkillsTabProps {
  skillsData: Skill[];
  setSkillsData: (data: Skill[]) => void;
}

const SkillsTab = ({ skillsData, setSkillsData }: SkillsTabProps) => {
  const addNewSkill = () => {
    const newSkill = {
      name: "New Skill",
      category: "Languages",
      level: 50,
      icon: "⭐"
    };
    setSkillsData([...skillsData, newSkill]);
  };

  const updateSkill = (index: number, field: string, value: string | number) => {
    const updatedSkills = [...skillsData];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    setSkillsData(updatedSkills);
  };

  const removeSkill = (index: number) => {
    setSkillsData(skillsData.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Skills Management
          <Button onClick={addNewSkill} size="sm">Add Skill</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {skillsData.map((skill, index) => (
            <div key={index} className="grid grid-cols-6 gap-2 items-center p-2 border rounded">
              <Input
                value={skill.name}
                onChange={(e) => updateSkill(index, 'name', e.target.value)}
                placeholder="Skill name"
              />
              <Input
                value={skill.category}
                onChange={(e) => updateSkill(index, 'category', e.target.value)}
                placeholder="Category"
              />
              <Input
                type="number"
                value={skill.level}
                onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
                placeholder="Level"
                min="0"
                max="100"
              />
              <Input
                value={skill.icon}
                onChange={(e) => updateSkill(index, 'icon', e.target.value)}
                placeholder="Icon"
              />
              <span className="text-sm text-gray-500">{skill.level}%</span>
              <Button 
                onClick={() => removeSkill(index)} 
                variant="destructive" 
                size="sm"
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsTab;
