import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber }) => {
let next =()=>{
  if (pageNumber===42)return
  setPageNumber((n)=> n+1)
};

let prev =()=>{
  if (pageNumber===1)return
  setPageNumber((n)=> n+-1)
};
  return (
    <div className="text-center">
      <div className="row">
        <div className="col">
        <button onClick={prev} className="">prev</button>
        </div>
        <div  className="col">
        <button onClick={next} className="">next</button>
        </div>

      </div>
    </div>
  );
};

export default Pagination;