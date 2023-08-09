import React, { useEffect } from "react";

import imageGrid from "../../assets/lounge.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid" data-aos="fade-left">
        <div className="imgDiv">
          <img src={imageGrid} alt="" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid" data-aos="fade-left">
            <div className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                You can also call airlines form your phone and book flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call airlines form your phone and book flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call airlines form your phone and book flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Chauffeur-drive service </span>
              <p>
                You can also call airlines form your phone and book flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
