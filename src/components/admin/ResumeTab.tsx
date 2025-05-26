
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

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
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    
    // Create a temporary URL for the uploaded file
    const fileUrl = URL.createObjectURL(file);
    
    // Update the resume data with the new file URL
    setResumeData({
      ...resumeData,
      downloadLink: fileUrl,
      title: resumeData.title || file.name.replace('.pdf', '')
    });
    
    setUploading(false);
  };

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
            placeholder="e.g., My Professional Resume"
          />
        </div>
        
        <div>
          <Label htmlFor="resume-desc">Description</Label>
          <Textarea
            id="resume-desc"
            value={resumeData.description}
            onChange={(e) => setResumeData({...resumeData, description: e.target.value})}
            placeholder="Brief description about your resume"
          />
        </div>
        
        <div>
          <Label htmlFor="resume-link">Download Link (or upload file)</Label>
          <Input
            id="resume-link"
            value={resumeData.downloadLink}
            onChange={(e) => setResumeData({...resumeData, downloadLink: e.target.value})}
            placeholder="https://your-resume-link.com or upload below"
          />
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a resume file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  disabled={uploading}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
            {uploading && (
              <div className="mt-2">
                <div className="text-sm text-indigo-600">Uploading...</div>
              </div>
            )}
          </div>
        </div>
        
        {resumeData.downloadLink && (
          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
            <FileText className="h-5 w-5 text-green-600" />
            <span className="text-sm text-green-800">Resume file ready for download</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResumeTab;
