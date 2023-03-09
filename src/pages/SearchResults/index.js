import React, {useState} from "react";
import {Link, useLocation} from 'wouter';
import '../../StylesComponents/Header.css';


function SearchResults(){
const [keyword, setKeyword] = useState('')
const [path, pushLocation] = useLocation();

const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/gif/${keyword}`)
    console.log("keyword")
}

const handleChange = evt => {
 setKeyword(evt.target.value)
}

  return (
    <>
      <form onSubmit={handleSubmit} className="searchMenu">
        <input onChange={handleChange} type="text" value={keyword} className="search" placeholder="Busca tus gifs aqui..." />
      </form>
    </>
  );
}

export default SearchResults;
