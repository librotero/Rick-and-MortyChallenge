import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CharactersFav from '../../components/CharactersFav'
import { CharactersFavContext } from '../../context/CharactersFavContext'

const index = () => {
    const { favorites } = useContext(CharactersFavContext)
  return (
  <div className>
    <div className="text-center" style={{height: '600px'}}>
      <h1 style={{color: 'white'}}>Favorites</h1>
      <div className="text-start"><h5 ><Link to="/">volver home</Link></h5></div>
      {favorites.length > 0 && <CharactersFav favorites={favorites}/>}
    </div>
      
      
  </div>
  )
}

export default index

