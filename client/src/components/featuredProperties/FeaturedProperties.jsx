import React from "react";
import style from "./FeaturedProperties.module.css";

const FeaturedProperties = () => {
  return (
    <div className={style.fp}>
      <div className={style.fpItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max300/85115609.webp?k=90816ff754bd5f7e63b76bd431f4971784bc1ed8f70801f8a882818771f00115&o="
          alt=""
          className={style.fpImg}
        />
        <span className={style.fpName}> Henderson Beach Resort</span>
        <span className={style.fpCity}> Destin, United States</span>
        <span className={style.fpPrice}>Starting from 120$ </span>

        <div className={style.fpRating}>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className={style.fpItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max300/78771218.webp?k=e982edd9b768b5841a0376d27ebb2049dafd99348797428c48a1daefff1b2d78&o="
          alt=""
          className={style.fpImg}
        />
        <span className={style.fpName}>
          Embarc Sandestin by Diamond Resorts
        </span>
        <span className={style.fpCity}> Miramar Beach, Destin</span>
        <span className={style.fpPrice}>Starting from 160$ </span>

        <div className={style.fpRating}>
          <button>9.2</button>
          <span>Superb</span>
        </div>
      </div>

      <div className={style.fpItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max300/233068046.webp?k=34ed1e299a89f4f8eb08d8bc51e7195bfaaccc214bf2b20343a5b6e713431a30&o="
          alt=""
          className={style.fpImg}
        />
        <span className={style.fpName}> HSterling Shores</span>
        <span className={style.fpCity}> Destin, United States</span>
        <span className={style.fpPrice}>Starting from 190$ </span>

        <div className={style.fpRating}>
          <button>8.9</button>
          <span>Fabulous</span>
        </div>
      </div>

      <div className={style.fpItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max300/214984019.webp?k=ed84265bac428ff1fdb1d90730fff5abbd16ef85f8ec3090661eb4bcd76da40e&o="
          alt=""
          className={style.fpImg}
        />
        <span className={style.fpName}> Plantation West Resort II</span>
        <span className={style.fpCity}> Gulf Shores, United States</span>
        <span className={style.fpPrice}>Starting from 70$ </span>

        <div className={style.fpRating}>
          <button>7.5</button>
          <span>Good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
