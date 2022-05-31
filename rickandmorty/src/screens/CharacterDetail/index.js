import React from 'react'
import { Link, useParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

const CharacterDetail = () => {
  const { id } = useParams()
  const {
    characters
  } = useFetch(`${process.env.REACT_APP_BASE_URL_API}/character/${id}`)

  return (
    <div>
      <img src={characters.image} />
      <h2 style={{color: "white"}}>{characters.name}</h2>
      <div>
        <div style={{color: "white"}}>Gender: {characters.gender}</div>
        <div style={{color: "white"}}>Species: {characters.species}</div>
        <div style={{color: "white"}}>Status: {characters.status}</div>
        <div style={{color: "white"}}>Locatio: {characters.location.name}</div>
        <div style={{color: "white"}}>Origin: {characters.origin.name}</div>
        
        <Link to={'/'}>Go back</Link>
      </div>
    </div>
  )
}

export default CharacterDetail
