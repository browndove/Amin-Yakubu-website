import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-700 text-sm mb-2">© 2024 Amin Yakubu Foundation. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <p href="#" className="text-gray-700 hover:text-blue-500">
              Privacy Policy
            </p>
            <span className="text-gray-700">|</span>
            <p href="" className="text-gray-700 hover:text-blue-500">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
