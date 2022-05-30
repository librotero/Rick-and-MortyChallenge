import React from 'react'
import { Link } from 'react-router-dom';
import style from './Cards.module.scss';

const Cards = ({results, page}) => {
    let display;
    if(results){
        display = results.map(f=>{
            let {id, name, image, location, status} = f;
            return( 
            <Link to={`${page}${id}`}
            style={{textDecoration: "none"}}
            key={id}
            className="col-3 mb-4 position-relative"
            >
            <div  className="mb-2 position-relative" key={id} id={id}>
                <div className={`${style.cards} mb-3`}>
                    <img src={image} alt={name} className="img-fluid"/>
                    <div className={`${style.content}`}>
                        <div className="fs-4 fw-bold mb-1">{name}</div>
                        <div className="">
                            <div className="fs-7">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                {(()=>{
                    if (status==='Dead') {
                       return <div className={`${style.badgeDead} position-absolute badge`}>{status}</div>
                    }else if (status==='Alive'){
                       return  <div className={`${style.badgeAlive} position-absolute badge`}>{status}</div>
                    }else{
                       return  <div className={`${style.badgeUnknow} position-absolute badge`}>{status}</div>
                    }
                })()}   
            </div>
            </Link>
                )
        })
    }else{
        display = "No hay nada"
    }
  return (
    <>
        {display}
    </>
  )
}

export default Cards
