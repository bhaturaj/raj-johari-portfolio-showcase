
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <p className="text-lg font-bold">
              Made with ❤️ by Bhaturaj<span className="text-primary">Johari</span>
            </p>
            <p className="text-sm text-gray-400">
              Developer & AI Enthusiast
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Bhaturaj Johari. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
