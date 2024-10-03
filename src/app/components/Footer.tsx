import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-gray-400">
          &copy; {new Date().getFullYear()} {"Sakeena's Portfolio. All rights reserved."}
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/sakeena-majeed-86b58732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-200">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/SakeenaMajeed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-200">
            <FaGithub className="h-6 w-6" />
          </a>
        
          <a href="https://www.instagram.com/_sakeena_majeed/?igsh=cHZ4MHl3MTF4dDcz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-200">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/sukaina.majeed.98?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-200">
            <FaFacebook className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          Designed by Sakeena Majeed ❤️.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
