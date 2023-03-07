import React from "react";
import "../StylesComponents/Gif.css"

export default function Gif({title, id, url}) {
  return (
    <div className="containerGifs"><a href={`${id}`} className='Gifs'>
      <h4>{title}</h4>
      <img alt={title} src={url} className="gifIMG"/>
    </a></div>
    
  );
}
