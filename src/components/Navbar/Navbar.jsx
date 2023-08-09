import React, { useState } from "react";

//For icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

//For images
import logo from "../../assets/logo01.png";

const Navbar = () => {
  // remove Navbar in the small screen
  const [active, setActive] = useState("navBarMenu");

  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };
  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  //add a background color to second Navbar
  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };

  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Language
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Up</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} alt="logo" className="Logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              Support
            </li>
            <li onClick={removeNavBar} className="listItem">
              Info
            </li>
            <li onClick={removeNavBar} className="listItem">
              Lounge
            </li>
            <li onClick={removeNavBar} className="listItem">
              Travelers
            </li>
          </ul>

          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
