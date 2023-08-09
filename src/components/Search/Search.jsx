import React, { useEffect } from "react";

import { GrLocation } from "react-icons/Gr";
import { GrCar } from "react-icons/Gr";

import Aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="search container">
      <div
        className="sectionContainer grid"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div
          className="searchInputs flex"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <GrLocation />
            </div>

            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Add destination" />
            </div>
          </div>

          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <GrCar />
            </div>

            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder="Add guests" />
            </div>
          </div>

          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <GrLocation />
            </div>

            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <GrLocation />
            </div>

            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <button className="btn btnBlock flex">Search Flight</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
