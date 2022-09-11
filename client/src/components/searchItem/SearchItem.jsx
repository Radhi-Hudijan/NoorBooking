import React from "react";
import style from "./SearchItem.module.css";

const SearchItem = () => {
  return (
    <div className={style.searchItem}>
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square200/177954582.webp?k=d67fb9245e8cf926fc217ffdfa86be220d76728e4c2f3e72b904639e705da70a&o=&s=1"
        alt=""
        className={style.siImg}
      />
      <div className={style.siDesc}>
        <h1 className={style.siTitle}> Tower Street Apartment</h1>
        <span className={style.siDistance}>500m from center</span>
        <span className={style.siTaxiOp}>Free Airport taxi</span>
        <span className={style.siSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={style.siFeatures}>
          Entire studio . 1 bedroom . 21m2 1 full bed
        </span>
        <span className={style.siCancelOp}>FREE cancellation</span>
        <span className={style.siCancelationSubtitle}>
          You can cancel later, so lock in this grate price today!
        </span>
      </div>

      <div className={style.siDetails}>
        <div className={style.siRating}>
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        <div className={style.siDetailTexts}>
          <span className={style.siPrice}>$1244</span>
          <span className={style.siTaxOp}>Includes taxes and charges</span>
          <button className={style.siCheckButton}>
            See Availability {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
