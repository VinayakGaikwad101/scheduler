// import React from "react";
import "./Footer.css"; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer text-black py-4 w-full h-1/10 fixed bottom-0 left-0 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-white">
          <p className="text-2xl">Developed By:</p>
          <p className="text-xl">Vinayak Vishwanath Gaikwad (2023BCS022), Vedant Milind Khete (2023BCS024), Rohan Vinod Nimkar (2023BCS025)</p>
        </div>
        <div className="flex justify-end w-full">
          <p className="text-white">2024 © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
