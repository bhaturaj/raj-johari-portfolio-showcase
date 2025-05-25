
import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface AboutData {
  dateOfBirth: string;
  education: string;
  passion: string;
  careerGoals: string;
  profileImage: string;
}

interface AboutTabProps {
  aboutData: AboutData;
  setAboutData: (data: AboutData) => void;
}

const AboutTab = ({ aboutData, setAboutData }: AboutTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Section Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="about-dob">Date of Birth</Label>
          <Input
            id="about-dob"
            value={aboutData.dateOfBirth}
            onChange={(e) => setAboutData({...aboutData, dateOfBirth: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="about-education">Education</Label>
          <Input
            id="about-education"
            value={aboutData.education}
            onChange={(e) => setAboutData({...aboutData, education: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="about-passion">Passion</Label>
          <Input
            id="about-passion"
            value={aboutData.passion}
            onChange={(e) => setAboutData({...aboutData, passion: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="about-goals">Career Goals</Label>
          <Input
            id="about-goals"
            value={aboutData.careerGoals}
            onChange={(e) => setAboutData({...aboutData, careerGoals: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="about-image">Profile Image URL</Label>
          <Input
            id="about-image"
            value={aboutData.profileImage}
            onChange={(e) => setAboutData({...aboutData, profileImage: e.target.value})}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutTab;
