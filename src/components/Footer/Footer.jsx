import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Logo from "../../assets/logo01.png";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="sectionContainer container grid" data-aos="fade-up">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={Logo} alt="" className="Logo" />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <div>
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="">Explore</a>
            </li>

            <li>
              <a href="">Flight status</a>
            </li>

            <li>
              <a href="">Travel</a>
            </li>

            <li>
              <a href="">Check-In</a>
            </li>

            <li>
              <a href="">Manage your fight</a>
            </li>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Access</span>
          <div>
            <li>
              <a href="">More</a>
            </li>

            <li>
              <a href="">Travel</a>
            </li>

            <li>
              <a href="">Flight status</a>
            </li>

            <li>
              <a href="">Explore</a>
            </li>

            <li>
              <a href="">Manage your fight</a>
            </li>

            <li>
              <a href="">Check-In</a>
            </li>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">More Details</span>
          <div>
            <li>
              <a href="">Details</a>
            </li>

            <li>
              <a href="">Check-In</a>
            </li>

            <li>
              <a href="">Flight status</a>
            </li>

            <li>
              <a href="">Manage your fight</a>
            </li>

            <li>
              <a href="">Travel</a>
            </li>

            <li>
              <a href="">Explore</a>
            </li>
          </div>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          Home made Airline | Developed by
          <a href="https://www.github.com/Ashermuzic" target="_blank">
            Asher
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
