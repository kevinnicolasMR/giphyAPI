import React, {useEffect, useState} from 'react'
import Gif from './Gif.js'
import getGifs from "../services/getGifs.js";


export default function ListOfGifs({params}){
  const {keyword} = params
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
      getGifs({keyword})
      .then((gifs) => setGifs(gifs));
    }, [keyword]);  

    return gifs.map(({id, title, url}) => (
        <Gif
        key={id}
        title={title} 
        url={url} 
        id={id}
        />
      ))
}