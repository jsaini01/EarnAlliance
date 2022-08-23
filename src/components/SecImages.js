import React from "react";

import { SecNav, Imges } from "../styled/HeaderStyle";

const SecImages = () => {
  return (
    <SecNav>
      <img
        src="./images/centerlogo.png"
        alt="centerLogo"
        className="centerImg"
      />
      <Imges>
        <img src="./images/lefterrow.png" alt="lefterrow" className="left" />
        <h1>
          DISCOVER OUR <span>UNIVERSE</span>
        </h1>
        <img src="./images/righterrow.png" alt="righterrow" className="right" />
      </Imges>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
        hendrerit
        <br /> pharetra. Integer sodales mi libero, sollicitudin euismod tortor
        vestibulum ut. In
        <br /> lobortis at justo in efficitur.
      </p>
    </SecNav>
  );
};

export default SecImages;
