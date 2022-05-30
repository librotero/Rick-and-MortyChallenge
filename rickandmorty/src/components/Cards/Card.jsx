import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const Card = () => {
    let [fetchedData, updateFetchData]= useState([]);
    let {name, image, origin, location, gender, species, type}= fetchedData
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(()=>{
      (async function(){
        let data = await fetch(api)
        .then(res=> res.json())
        updateFetchData(data)
      })()
    },[api])

    let {id}=useParams()
  return (
    <div className="container d-flex justify-content-center">
<div className="">
    <h1 className="">{name}</h1>
    <div>
        {image}
    </div>
</div>
    </div>
  )
}

export default Card
