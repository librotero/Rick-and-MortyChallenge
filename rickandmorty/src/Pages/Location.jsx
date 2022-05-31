import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards'
import Selector from '../components/Filters/Favorite'


const Location = () => {
  let [id, setId] = useState(1)
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([])
  let {type, dimension}=info;
  console.log(info)

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() =>{
      (async function (){
          let data =await fetch(api)
          .then((res)=> res.json());
          setInfo(data);

          let a = await Promise.all(
              data.residents.map((x) => {
                  return fetch(x)
                  .then((res)=> res.json())

              })
          );
          setResults(a)
      })();
  }, [api])
    return (
    <div className="container">
      <div className="row">
          <h1 className="text-center mb-4">
            Location: {""}
          </h1>
          <h5 className="text-center">
              Dimension :{dimension ===""? "Unknow": dimension}
          </h5>
          <h6 className="text-center">
              Type :{type ===""? "Unknow": type}
          </h6>  
      </div>
      <div className="row">
          <div className="col-3">
              <h4 className="text-center mb-4">
              Pick Episodes
              </h4>
              <Selector name="Location" total={126} setId={setId} />
               </div>
          <div className="col-8">
              <div className="row">
                  <Cards page="/location" results={results} />
              </div>
          </div>

      </div>
    </div>
  )
}

export default Location
