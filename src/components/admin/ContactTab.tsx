
import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ContactData {
  email: string;
  phone: string;
  socialLinks: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
}

interface ContactTabProps {
  contactData: ContactData;
  setContactData: (data: ContactData) => void;
}

const ContactTab = ({ contactData, setContactData }: ContactTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            value={contactData.email}
            onChange={(e) => setContactData({...contactData, email: e.target.value})}
            placeholder="johariraj70@gmail.com"
          />
        </div>
        <div>
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            value={contactData.phone}
            onChange={(e) => setContactData({...contactData, phone: e.target.value})}
            placeholder="+91 8888176317"
          />
        </div>
        <div>
          <Label htmlFor="contact-linkedin">LinkedIn URL</Label>
          <Input
            id="contact-linkedin"
            value={contactData.socialLinks.linkedin}
            onChange={(e) => setContactData({
              ...contactData, 
              socialLinks: {...contactData.socialLinks, linkedin: e.target.value}
            })}
            placeholder="https://www.linkedin.com/in/bhaturaj-johari-74b18124a"
          />
        </div>
        <div>
          <Label htmlFor="contact-github">GitHub URL</Label>
          <Input
            id="contact-github"
            value={contactData.socialLinks.github}
            onChange={(e) => setContactData({
              ...contactData, 
              socialLinks: {...contactData.socialLinks, github: e.target.value}
            })}
            placeholder="https://github.com/bhaturaj"
          />
        </div>
        <div>
          <Label htmlFor="contact-leetcode">LeetCode URL</Label>
          <Input
            id="contact-leetcode"
            value={contactData.socialLinks.leetcode}
            onChange={(e) => setContactData({
              ...contactData, 
              socialLinks: {...contactData.socialLinks, leetcode: e.target.value}
            })}
            placeholder="https://leetcode.com/u/raj_johari_4141/"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactTab;
