import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import NavBar from "../../components/navbar/NavBar";
import style from "./Hotel.module.css";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/137638405.jpg?k=cb14ac1e4adc91d06bf87f2d367729cc1ccc7f6745704faaee2e3cd93debe20a&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/123942098.jpg?k=7a1d572c6cef56a9a5c36cdf2feab897cabc3f99261acbe985e44a413ad7fe8c&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/124754708.jpg?k=eed89351131db162b0e9b4501bda9cd1c6a00eb5da09386c213cbc8589e4e7e5&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/280494404.jpg?k=f503d031f5ce48b126be6bb2f6a66ea1151c4c9859ebcd784ee5ac967e32a1f1&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/203565420.jpg?k=b1c203e026862965d39a461647711d01939b81f25819c03cb94182b1a777edbf&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/124213643.jpg?k=a78a6b49764ec1784aec0235fd3f5c69fbafdcc42c91ba3549eeef461eb91960&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleArrow = (direction) => {
    if (direction === "l") {
      setSlideNumber(slideNumber === 0 ? 5 : slideNumber - 1);
    } else {
      setSlideNumber(slideNumber === 5 ? 0 : slideNumber + 1);
    }
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />

      <div className={style.hotelContainer}>
        {open && (
          <div className={style.slider}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={style.close}
              onClick={() => {
                setOpen(false);
              }}
            />
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className={style.arrow}
              onClick={() => {
                handleArrow("l");
              }}
            />
            <div className={style.sliderWrapper}>
              <img
                src={photos[slideNumber].src}
                alt=""
                className={style.sliderImg}
              />
            </div>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className={style.arrow}
              onClick={() => {
                handleArrow("r");
              }}
            />
          </div>
        )}
        <div className={style.hotelWrapper}>
          <button className={style.bookNowButton}>Reserve or Book Now!</button>
          <h1 className={style.hotelTitle}>Grand Hotel</h1>
          <div className={style.hotelAddress}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton 125 New Your </span>
          </div>
          <span className={style.hotelDistance}>
            Excellent location - 500m from center
          </span>
          <span className={style.hotelPriceHighlight}>
            Book a stay over € 810 at this property and get a free airport taxi
          </span>

          <div className={style.hotelImages}>
            {photos.map((photo, i) => (
              <div className={style.hotelImgWrapper} key={i}>
                <img
                  src={photo.src}
                  alt=""
                  className={style.hotelImg}
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>

          <div className={style.hotelDetails}>
            <div className={style.hotelDetailsTexts}>
              <h1 className={style.hotelTitle}>
                Get the celebrity treatment with world-class service
              </h1>
              <p className={style.hotelDesc}>
                This luxury 5-star hotel situated in a monumental building, the
                former Town Hall and Archive of the Amstel Community. Located
                near the Albert Cuypmarkt street market this hotel features a
                variety of facilities including a restaurant, a fully equipped
                fitness centre, spa and massage services. Pestana Amsterdam
                Riverside provides rooms with air conditioning. Free WiFi is
                available throughout the property.
              </p>
            </div>
            <div className={style.hotelDetailsPrice}>
              <h1>Perfect for a 9-night stay!</h1>
              <span>Top location: Highly rated by recent guests (8.6)</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
