import React from "react";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import PropertyList from "../../components/propertyList/PropertyList";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className={style.homeContainer}>
        <Featured />
        <h1 className={style.homeTitle}>Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
