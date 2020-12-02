import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section>
      <div className="title">
        <h1>Order of ___</h1>        
      </div>
      <div className="header_background"></div>     
      <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="activeRoute"
            activeStyle={{ textDecoration: "underline" }}
          >
            Blog
          </NavLink>
        </li>
        <li>:</li>
        <li>
          <NavLink
            to="/gallery"
            activeClassName="activeRoute"
            activeStyle={{ textDecoration: "underline" }}
          >
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav> 
    </section>     
    </header> 
  );
};
export default Header;
