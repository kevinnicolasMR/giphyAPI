import React from "react";
import "../StylesComponents/Header.css"
import image from '../StylesComponents/Logos/image.png'
import SearchResults from '../pages/SearchResults/index.js'



function headerApp() {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <a href="https://kevinnicolasmr.lat/"><img src={image} className='logo'/></a>
      </div>
      <div className="searchMenu">
        <SearchResults/>
      </div>
      <div className="slider">
        <button className="buttonSlider">
          <div className="first"></div>
          <div className="second"></div>
          <div className="three"></div>
        </button>
      </div>
    </div>
  );
}

export default headerApp;
