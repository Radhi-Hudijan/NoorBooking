import React from "react";
import style from "./Featured.module.css";

const Featured = () => {
  return (
    <div className={style.featured}>
      <div className={style.featuredItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/170335205.jpg?k=d93f0fd679117580857507c964cdd3cea26571923cda7c21871f9bd9acc2b241&o="
          alt=""
          className={style.featureImg}
        />
        <div className={style.featuredTitles}>
          <h1>Manchester</h1>
          <h2>1223 properties</h2>
        </div>
      </div>

      <div className={style.featuredItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/167587831.jpg?k=31e6256fc044ff9b127babfafcde346ded92aa66545f925fa84b749a8226dc30&o="
          alt=""
          className={style.featureImg}
        />
        <div className={style.featuredTitles}>
          <h1>Leeds</h1>
          <h2>144 properties</h2>
        </div>
      </div>

      <div className={style.featuredItem}>
        <img
          src="https://t-cf.bstatic.com/xdata/images/xphoto/540x405/167616822.jpg?k=31bae8840b12db441ce925b86f3f5149fda3f9851de6dfbd48cfff89a6680b74&o="
          alt=""
          className={style.featureImg}
        />
        <div className={style.featuredTitles}>
          <h1>Reading</h1>
          <h2>2234 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
