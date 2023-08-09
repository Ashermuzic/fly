import React from "react";
import img1 from "../assets/sta01.jpg";
import img2 from "../assets/sta02.jpg";
import img3 from "../assets/sta03.jpg";
import "../main.css";

const Stacked = () => {
  return (
    <div className="StackedContainer">
      <div className="stacked_img">
        <img src={img1} className="single" />
        <img src={img2} className="single" />
        <img src={img3} className="single" />
      </div>
    </div>
  );
};

export default Stacked;
