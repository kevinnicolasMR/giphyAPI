import React, {useEffect, useState} from 'react'
import Gif from './Gif.js'
import getGifs from "../services/getGifs.js";


export default function ListOfGifs({params}){
    var {keyword} = params
    const [loading, setLoading] = useState(false);
    var [gifs, setGifs] = useState([]);


    useEffect(function () {
      setLoading(true)
      getGifs({keyword})
      .then(gifs => 
        setGifs(gifs),
        setLoading(false)
        )
      }, [keyword]);

    if(loading) return <i>Cargando...</i>
    

    return gifs.map(({id, title, url}) => (
        <Gif
        key={id}
        title={title} 
        url={url} 
        id={id}
        />
      ))
}