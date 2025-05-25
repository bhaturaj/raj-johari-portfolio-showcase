
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ResumeData {
  title: string;
  description: string;
  downloadLink: string;
}

interface ResumeTabProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

const ResumeTab = ({ resumeData, setResumeData }: ResumeTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Section Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="resume-title">Resume Title</Label>
          <Input
            id="resume-title"
            value={resumeData.title}
            onChange={(e) => setResumeData({...resumeData, title: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="resume-desc">Description</Label>
          <Textarea
            id="resume-desc"
            value={resumeData.description}
            onChange={(e) => setResumeData({...resumeData, description: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="resume-link">Download Link</Label>
          <Input
            id="resume-link"
            value={resumeData.downloadLink}
            onChange={(e) => setResumeData({...resumeData, downloadLink: e.target.value})}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeTab;
