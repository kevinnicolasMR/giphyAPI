import React from "react";
import "./App.css";
import Header from './Components/header.js'
import ListOfGifs from "./Components/ListOfGifs.js";
import { Link, Route } from "wouter";



function App() {
  return (
    <div className="App">
      <section className="App-container">
      <Header/>
        <div className="gifsOptions">
          <Route path="/gif/:keyword" component={ListOfGifs}/>{" "}
        </div>
      </section>
    </div>
  );
}

export default App;
