import React from 'react'
import Buttons from '../Buttons'

const Location = ({setLocation, setPageNumber}) => {
    let location =["", "Purge Planet", "item 3n"]
  return (
    <div className="d-flex flex-wrap gap-3">
        {location.map((items, index)=>(
            <div className="col-2">
                <Buttons task={setLocation} setPageNumber={setPageNumber} key={index} name="status" index={index} items={items}/>
            </div>
        )
        )}
      
    </div>
  )
}

export default Location
