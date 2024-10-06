import React from "react";
import UserManual from "../../public/UserManual.pdf";
import "./DownloadBtn.css";
import circle from "../images/circle.png";
import diamond from "../images/diamond.png";
import star from "../images/star.png";
import triangle from "../images/triangle.png";

const DownloadBtn = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = UserManual;
    link.download = "UserManual.pdf";
    link.click();
  };

  return (
    <div className="downloadBtn">
      <button onClick={handleClick} className="button">
        <div className="button__content">
          <span className="button__text">Download User Manual</span>
          <i className="ri-download-cloud-fill button__icon"></i>
          <div className="button__reflection-1"></div>
          <div className="button__reflection-2"></div>
        </div>
        <img src="assets/img/star.png" alt="" className="button__star-1" />
        <img src={star} alt="" className="button__star-2" />
        <img src="assets/img/circle.png" alt="" className="button__circle-1" />
        <img src={circle} alt="" className="button__circle-2" />
        <img src={diamond} alt="" className="button__diamond" />
        <img src={triangle} alt="" className="button__triangle" />
        <div className="button__shadow"></div>
      </button>
    </div>
  );
};

export default DownloadBtn;
