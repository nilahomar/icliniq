import React from "react";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { slide as Slide } from "react-burger-menu";
import Logo from "../../assets/ic-white-logo.svg";
import WhiteLogo from "../../assets/ic-white-logo-1.svg";
import { navbarMenuItems, burgerMenuItems } from "./menu.js";

import "./header.css";

// Create Burgermenu using react-burger-menu library
function BurgerMenu(props) {
  return (
    <div>
      <Slide {...props}>
        <div className="sidebar-nav-logo">
          <div className="white-logo">
            <a href="/#">
              <img src={WhiteLogo} alt="logo" />
            </a>
          </div>
          <div className="login-signUp">
            <div className="login-btn">Login</div>
            <span>/</span>
            <div className="login-btn">Signup</div>
          </div>
        </div>
        {/* loop through the list of menu items for the Burgermenu */}
        {/* Two separate lists are available in order to dynamycally make visible some items on different screen sizes */}
        <div className="menu-items">
          {navbarMenuItems.map((item) => (
            <li key={item.id} className="burger-menu-nav-items">
              <a className="menu-item" href={item.link}>
                {item.text}
              </a>
            </li>
          ))}
          {burgerMenuItems.map((item) => (
            <li key={item.id} className="burger-menu-items">
              <a className="menu-item" href={item.link}>
                {item.text}
              </a>
            </li>
          ))}
        </div>
      </Slide>
    </div>
  );
}

// display navbar items from the list
function NavMenu() {
  return (
    <div className="navbar-menu-items">
      {navbarMenuItems.map((item) => (
        <li key={item.id}>
          <a className="nav-menu-item" href={item.link}>
            {item.text}
          </a>
        </li>
      ))}
    </div>
  );
}

function Nav() {
  // this state is used for manipulating css property
  const [menuOpenState, setMenuOpenState] = useState(false);
  return (
    <div>
      <div>
        <a href="/#">
          <div
            className="symptom-check"
            style={{ background: menuOpenState ? "none" : "#1341a3", zIndex: menuOpenState ? "100" : "999"}}
          >
            Possible causes of symptoms in 3 mins
            <AiOutlineArrowRight className="symptom-check-arrow" />
          </div>
        </a>
      </div>

      <div className="nav-top">
        <div className="hamburger-menu">
          {/* initialising hamburgermenu */}
          <span
            className="hamburger"
            onClick={() => setMenuOpenState(!menuOpenState)}
          >
            <BurgerMenu />
          </span>
        </div>
        <div className="nav-bar-menu">
          <div className="logo">
            <a href="/#">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="nav-bar-list">
            <NavMenu />
          </div>
        </div>

        <div className="search-button hide-small">
          <IoSearchOutline />
        </div>

        <div className="login-signUp-nav hide-small">
          <div className="login-btn-nav">Login</div>
          <span className="login-btn-nav">/</span>
          <div className="login-btn-nav">Signup</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
