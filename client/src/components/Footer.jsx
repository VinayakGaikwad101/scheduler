import React from "react";
import "./Footer.css"; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer text-black py-4 w-full fixed bottom-0 left-0 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-3xl">Made By:</p>
          <p className="text-2xl">Vinayak Vishwanath Gaikwad (2023BCS022)</p>
          <p className="text-2xl">Vedant Milind Khete (2023BCS024)</p>
          <p className="text-2xl">Rohan Vinod Nimkar (2023BCS025)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
