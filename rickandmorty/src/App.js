import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Location from './Pages/Location';
import Card from './components/Cards/Card';
import Header from './components/Header/Header';

function App(){
  return(
<Router>
    <div className="justify-content-center">
      <Header />
      <Filters/>
      </div>  
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/:id" element={<Card />}/>

    <Route path="/location/" element={<Location />}/>
    <Route path="/location/:id" element={<Card />}/>

  </Routes>
</Router>
  )
}

const Home=()=> {
  //Api de rick and Morty
let [pageNumber, setPageNumber] = useState(1);
let [fetchedData, updateFetchData]= useState([]);
let [favorites, setFavorites]=useState([]);
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
      
      
      <div className="container">
        <div className="container"> 
        <div className="col-12">
          <div className="row">
              <Cards page="/" results={results}/>
          </div>
        </div>
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info}/>
    </div>
  );
}

export default App;
