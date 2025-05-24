
import React, { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminPanel from "./AdminPanel";

const AdminButton = () => {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  return (
    <>
      {/* Floating Admin Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsAdminPanelOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          size="icon"
        >
          <Settings className="w-6 h-6 text-white animate-spin-slow" />
        </Button>
      </div>

      {/* Admin Panel Modal */}
      <AdminPanel 
        isOpen={isAdminPanelOpen} 
        onClose={() => setIsAdminPanelOpen(false)} 
      />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </>
  );
};

export default AdminButton;
