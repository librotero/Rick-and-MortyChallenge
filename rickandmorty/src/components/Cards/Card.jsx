import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import style from './Card.module.scss'
import { BsFillSuitHeartFill } from "react-icons/bs";

const Card = () => {
  let [favorites, setFavorites]=useState([]);
    let [fetchedData, updateFetchData]= useState([]);
    let {id}=useParams()
    let {name, image, origin, location, status, species}= fetchedData
    console.log(location)
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(()=>{
      (async function(){
        let data = await fetch(api)
        .then(res=> res.json())
        updateFetchData(data)
      })()
    },[api])
favorites =(id)=> {
  setFavorites.push(id)
}
  console.log(favorites)
  return (
    <div className="container d-flex justify-content-center ">
<div className="">
    <h1 className="">{name}</h1>
    <div className="position-relative">
        <img src={image} alt={name} />
        <div  onClick={()=>favorites(id)} className={`${style.heart} position-absolute badge`}><BsFillSuitHeartFill /></div>
    </div>
    <h3>Location:</h3>
    <h3>Origin: </h3>
    <h3>Species: {species}</h3>
    {(()=>{
                    if (status==='Dead') {
                       return <h3 className={`${style.badgeDead} text-center`}>{status}</h3>
                    }else if (status==='Alive'){
                       return  <h3 className={`${style.badgeAlive} text-center`}>{status}</h3>
                    }else{
                       return  <h3 className={`${style.badgeUnknow} text-center`}>{status}</h3>
                    }
                })()} 
    

</div>

    </div>
  )
}

export default Card
