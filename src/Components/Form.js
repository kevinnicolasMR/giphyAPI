import React from "react";
import "../StylesComponents/Header.css"


function searchGif() {
  return (
    <form onSubmit={ev => {
      ev.preventDefault(); 
      console.log(ev.target.search.value)
      }}>
      <input type="text" name="search" autoComplete="off" className="search"></input>
      <input type={"submit"} value="Buscar Gif" className="buttonSearch"></input>
    </form>
  );
}

export default searchGif;