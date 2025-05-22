
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg font-bold">
              Raj<span className="text-primary">Johari</span>
            </p>
            <p className="text-sm text-gray-400">
              Developer & Tech Enthusiast
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Raj Bhaiya Johari. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
