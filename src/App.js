import React, { useState } from "react";
import "./App.css";
import ListOfGifs from './Components/ListOfGifs.js'
import {Link, Route} from 'wouter'

function App() { 
  const [keyword, setKeyword] = useState('')
  return (
    <div className="App">
      <section className="App-container">
        <div className="gifsOptions">
          <h2>Buscador de Gifs</h2>
          <Link to="/gif/goku" className="Links">Goku</Link>
          <Link to="/gif/vegeta" className="Links">Vegeta</Link>
          <Link to="/gif/naruto" className="Links">Naruto</Link>

        </div>

        <Route path="/gif/:keyword" component={ListOfGifs}/>  </section>
    </div>
  );
}

export default App;
