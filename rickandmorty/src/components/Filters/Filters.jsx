import React from 'react'
import style from './Filters.module.scss'

const Filters = () => {
  return (
    <div className={`${style.bar} container`}>
      <div className="row">
        <div className="col-12 my-2">
            <div className="row">
            <div className="col-4 text-center">
              <button>location</button>
            </div>
          <div className="col-4 text-center">
          <button className="location">location</button>
          </div>
          <div className="col-4 text-center">
          <button>location</button>
          </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
