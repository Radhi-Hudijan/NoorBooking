import React from "react";
import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerList}>
          <div className={`${style.headerListItem} ${style.active}`}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
            <span>Attractions</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>

        <h1 className={style.headerTitle}>Find your next stay</h1>
        <p className={style.headerDesc}>
          Search low prices on hotels, homes and much more...
        </p>
        <button className={style.headerButton}> Sign in / Register</button>
      </div>
    </div>
  );
};

export default Header;
