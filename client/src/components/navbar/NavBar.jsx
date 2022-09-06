import React from "react";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div className={style.navContainer}>
        <span className={style.logo}>NoorBooking</span>
        <div className={style.navItems}>
          <button className={style.navButton}>Register</button>
          <button className={style.navButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
