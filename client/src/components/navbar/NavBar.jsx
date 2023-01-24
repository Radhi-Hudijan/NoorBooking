import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div className={style.navContainer}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className={style.logo}>NoorBooking</span>{" "}
        </Link>
        <div className={style.navItems}>
          <button className={style.navButton}>Register</button>
          <button className={style.navButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
