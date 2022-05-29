import React from 'react'
import style from './Cards.module.scss';

const Cards = ({results}) => {
    let display;
    if(results){
        display = results.map(f=>{
            let {id, name, image, location, status} = f;
            return( 
            <div className="col-4 mb-2 position-relative" key={id}>
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
                <div className={`${style.badge} position-absolute badge`}>{status}</div>
            </div>)
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
