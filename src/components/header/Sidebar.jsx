import React from "react";
import { slide as Menu } from "react-burger-menu";
import WhiteLogo from "../../assets/ic-white-logo-1.svg";
import "./sidebar.css";

function Sidebar(props) {
  return (
    <div>
      <Menu {...props}>
        <div className="sidebar-nav-logo">
        <div className="white-logo">
          <a href="http://">
            <img src={WhiteLogo} alt="logo" />
          </a>
        </div>
          <div className="login-signUp">
            <div className="login-btn">Login</div>
            <span>/</span>
            <div className="login-btn">Signup</div>
          </div>
        </div>
        <div className="menu-items">
          <a className="menu-item" href="/">
            Consult a doctor
          </a>

          <a className="menu-item" href="/about">
            Choose a doctor
          </a>

          <a className="menu-item" href="/services">
            Explore articles
          </a>

          <a className="menu-item" href="/contact">
            Medical Q&A
          </a>
          <a className="menu-item" href="/contact">
            Choose a specialty
          </a>
          <a className="menu-item" href="/contact">
            Medical Second Opinion
          </a>
          <a className="menu-item" href="/contact">
            Find a doctor
          </a>
          <a className="menu-item" href="/contact">
            Symptom Checker
          </a>
          <a className="menu-item" href="/contact">
            Deals & Offers
          </a>
          <a className="menu-item" href="/contact">
            Health tools
          </a>
          <a className="menu-item" href="/contact">
            Get iCliniq App
          </a>
          <a className="menu-item" href="/contact">
            For doctors & hospitals
          </a>
          <a className="menu-item" href="/contact">
            About us
          </a>
          <a className="menu-item" href="/contact">
            Contact
          </a>
        </div>
      </Menu>
    </div>
  );
}

export default Sidebar;
