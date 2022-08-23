import React from "react";

import Logo from "./Logo";

import { Nav, Contain } from "../styled/HeaderStyle";

const NavBar = () => {
  return (
    <Nav>
      <Logo />
      <Contain>
        <p>Login</p>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-discord"></i>
      </Contain>
    </Nav>
  );
};

export default NavBar;
