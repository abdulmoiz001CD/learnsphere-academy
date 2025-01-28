import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-[3rem]">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abdul Moiz. All rights reserved.
        </p>
      
      </div>
    </footer>
  );
};

export default Footer;
