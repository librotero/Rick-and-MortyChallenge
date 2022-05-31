import React from 'react'
import PropTypes from 'prop-types'

const CharactersFilter = ({ handleCharacterFilter }) => {
  return (
    <div style={{width:"550"}} className="text-center my-5 l-15" >
      <h3 style={{color: 'white'}}>Busque aquí sus personajes por location</h3>
      <input onChange={handleCharacterFilter} placeholder="Escribe una location" />
    </div>
  )
}

CharactersFilter.propTypes = {
  handleCharacterFilter: PropTypes.func.isRequired
}

export default CharactersFilter
