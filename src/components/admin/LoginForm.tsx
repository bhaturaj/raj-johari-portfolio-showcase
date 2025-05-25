
import React, { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginForm = ({ isOpen, onClose, onLogin }: LoginFormProps) => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    if (loginId === "Bhaturaj" && loginPassword === "8888176317") {
      onLogin();
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const handleClose = () => {
    setLoginId("");
    setLoginPassword("");
    setLoginError("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Admin Login
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="login-id">ID</Label>
            <Input
              id="login-id"
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              placeholder="Enter admin ID"
            />
          </div>
          <div>
            <Label htmlFor="login-password">Password</Label>
            <Input
              id="login-password"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Enter password"
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          {loginError && (
            <p className="text-red-500 text-sm">{loginError}</p>
          )}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleLogin}>
              Login
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
