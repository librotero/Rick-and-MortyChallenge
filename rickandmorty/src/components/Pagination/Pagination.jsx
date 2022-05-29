import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({setPageNumber}) => {
    let next =()=> {
        setPageNumber((x)=>x+1)
    }
    let previus = ()=>{

        setPageNumber((x)=>x-1)
    }
  return (
    <div className={`container d-flex justify-content-center gap-5`}>
      <button onClick={previus} className={`btn btn-primary`}>prev</button>
      <button onClick={next} className={`btn btn-primary`}>next</button>

    </div>
  )
}

export default Pagination
