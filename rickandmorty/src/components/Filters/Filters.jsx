import React from 'react'
import { Link } from 'react-router-dom'
import style from './Filters.module.scss'

const Filters = () => {
  return (
    <div className={`${style.bar} container my-25`}>
        <div className="col-12">
            <div className="row">
              <div className="col-5">
              <h1 className="text-center">
              <Link style={{color: 'white', textDecoration:'none'}} to="/">Rick & Morty </Link>
            </h1>
              </div>
              <div className="col-6 text-end my-2">
                <h2><Link style={{color: 'white', textDecoration:'none'}} to="/location">Location</Link></h2>
              </div>
            </div>
        </div>
     
    </div>
  )
}

export default Filters
