import React, { useEffect, useState } from "react";
import getGifs from "./services/getGifs.js";
import Gif from "./Components/Gif.js";
import "./App.css";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs().then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-container">
        {gifs.map((singleGif) => (
          <Gif
          key={singleGif.id}
          title={singleGif.title} 
          url={singleGif.url} 
          id={singleGif.id}/>
        ))}
      </section>
    </div>
  );
}

export default App;
