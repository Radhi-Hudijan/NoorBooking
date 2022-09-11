import React, { useState } from "react";
import style from "./List.module.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <NavBar /> <Header type="list" />
      <div className={style.listContainer}>
        <div className={style.listWrapper}>
          <div className={style.listSearch}>
            <h1 className={style.lsTitle}>Search</h1>
            <div className={style.lsItem}>
              <label> Destination</label>
              <input
                type="text"
                placeholder="Where are you going?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className={style.lsItem}>
              <label> Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {" "}
                {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )} `}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className={style.lsItem}>
              <label> Options</label>
              <div className={style.lsOptions}>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className={style.lsOptionInput} />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className={style.lsOptionInput} />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Adults</span>
                  <input
                    type="number"
                    min={1}
                    className={style.lsOptionInput}
                    placeholder={options.adult}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={style.lsOptionInput}
                    placeholder={options.children}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Room</span>
                  <input
                    type="number"
                    min={1}
                    className={style.lsOptionInput}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className={style.listResult}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
