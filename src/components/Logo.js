import React from "react";
import { Upper } from "../styled/HeaderStyle";

const Logo = () => {
  return (
    <Upper>
      <img src="./images/logo.png" alt="logo" className="Logo"></img>
      <img src="./images/Earn.png" alt="Earn" className="Earn"></img>
      <img src="./images/Alince.png" alt="Alliance" className="Alliance"></img>
    </Upper>
  );
};

export default Logo;
