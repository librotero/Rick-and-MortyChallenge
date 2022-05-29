import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';

function App() {
  //Api de rick and Morty
let [pageNumber, setPageNumber] = useState(2);
let [fetchedData, updateFetchData]= useState([]);
let {info, results}=fetchedData;
console.log(fetchedData);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  useEffect(()=>{
    (async function(){
      let data = await fetch(api)
      .then(res=> res.json())
      updateFetchData(data)
    })()
  },[api])
  return (

    <div className="App">
      <h1 className="text-center my-16">
        Rick & Morty <span className="text-primary">App</span>
      </h1>
      <div className="container">
        <div className="row"> 
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-8">
          <div className="row">
              <Cards results={results}/>
          </div>
        </div>
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info}/>
    </div>
  );
}

export default App;
