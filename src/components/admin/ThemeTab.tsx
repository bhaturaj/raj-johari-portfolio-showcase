
import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ThemeData {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

interface ThemeTabProps {
  themeData: ThemeData;
  setThemeData: (data: ThemeData) => void;
}

const ThemeTab = ({ themeData, setThemeData }: ThemeTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Colors</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="theme-primary">Primary Color</Label>
          <div className="flex gap-2">
            <Input
              id="theme-primary"
              type="color"
              value={themeData.primaryColor}
              onChange={(e) => setThemeData({...themeData, primaryColor: e.target.value})}
              className="w-20"
            />
            <Input
              value={themeData.primaryColor}
              onChange={(e) => setThemeData({...themeData, primaryColor: e.target.value})}
              placeholder="#8B5CF6"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="theme-secondary">Secondary Color</Label>
          <div className="flex gap-2">
            <Input
              id="theme-secondary"
              type="color"
              value={themeData.secondaryColor}
              onChange={(e) => setThemeData({...themeData, secondaryColor: e.target.value})}
              className="w-20"
            />
            <Input
              value={themeData.secondaryColor}
              onChange={(e) => setThemeData({...themeData, secondaryColor: e.target.value})}
              placeholder="#6366F1"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="theme-accent">Accent Color</Label>
          <div className="flex gap-2">
            <Input
              id="theme-accent"
              type="color"
              value={themeData.accentColor}
              onChange={(e) => setThemeData({...themeData, accentColor: e.target.value})}
              className="w-20"
            />
            <Input
              value={themeData.accentColor}
              onChange={(e) => setThemeData({...themeData, accentColor: e.target.value})}
              placeholder="#EC4899"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeTab;
