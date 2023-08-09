import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import paris from "../../assets/girl03.jpg";
import dubai from "../../assets/girls01.jpg";
import rome from "../../assets/girl06.jpg";
import wild from "../../assets/girl05.jpg";

import traveler1 from "../../assets/prof05.jpg";
import traveler2 from "../../assets/prof01.jpg";
import traveler3 from "../../assets/prof05.jpg";
import traveler4 from "../../assets/prof01.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Isaac",
    socialLink: "@Issac24",
    delay: 0,
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: "Newton",
    socialLink: "@Newton73",
    delay: 250,
  },
  {
    id: 3,
    destinationImage: rome,
    travelerImage: traveler3,
    travelerName: "Albert",
    socialLink: "@Albert52",
    delay: 500,
  },
  {
    id: 4,
    destinationImage: wild,
    travelerImage: traveler4,
    travelerName: "Einstein",
    socialLink: "@Einstein99",
    delay: 750,
  },
];

const Traveler = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month</h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
              delay,
            }) => {
              return (
                /* single passenger card */

                <div
                  key={id}
                  className="singleTraveler"
                  data-aos="fade-down"
                  data-aos-delay={delay}
                >
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelersDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>

                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p className="socialLink">{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Traveler;
