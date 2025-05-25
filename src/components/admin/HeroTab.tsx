
import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface HeroData {
  name: string;
  role: string;
  slogan: string;
}

interface HeroTabProps {
  heroData: HeroData;
  setHeroData: (data: HeroData) => void;
}

const HeroTab = ({ heroData, setHeroData }: HeroTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Section Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="hero-name">Name</Label>
          <Input
            id="hero-name"
            value={heroData.name}
            onChange={(e) => setHeroData({...heroData, name: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="hero-role">Role</Label>
          <Input
            id="hero-role"
            value={heroData.role}
            onChange={(e) => setHeroData({...heroData, role: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="hero-slogan">Slogan</Label>
          <Input
            id="hero-slogan"
            value={heroData.slogan}
            onChange={(e) => setHeroData({...heroData, slogan: e.target.value})}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroTab;
