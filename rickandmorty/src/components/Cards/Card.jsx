import style from "./Card.module.scss";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext} from "../../Context/themeContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Card = () => {
  let {favoritesHandle } = useContext(ThemeContext);
  let {id}=useParams()
  let [fetchedData, updateFetchData]= useState([]);
  
  let {name, image, origin, location, status, species, gender}= fetchedData
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(()=>{
    (async function(){
      let data = await fetch(api)
      .then(res=> res.json())
      updateFetchData(data)
    })()
  },[api])

  return (
      <div className="container d-flex justify-content-center ">
      <div className="">
        <h1 className="">{name}</h1>
        <div className="position-relative">
          <img src={image} alt={name} />
          <div
            onClick={favoritesHandle}
            className={`${style.heart} position-absolute badge`}
          >
            <BsFillSuitHeartFill />
          </div>
        </div>
        <h3>Location: </h3>
        <h3>Origin: </h3>
        <h3>Species: {species}</h3>
        {(() => {
          if (status === "Dead") {
            return (
              <h3 className={`${style.badgeDead} text-center`}>{status}</h3>
            );
          } else if (status === "Alive") {
            return (
              <h3 className={`${style.badgeAlive} text-center`}>{status}</h3>
            );
          } else {
            return (
              <h3 className={`${style.badgeUnknow} text-center`}>{status}</h3>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default Card;
