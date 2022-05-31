import React from 'react'
import PropTypes from 'prop-types'
import styled from './index.module.css'
import CharacterCard from '../CharacterCard'

const CharactersList = ({ characters, buttonParams }) => {
  return (
    
      <div className={styled.container}>
<div className={styled.cards}>
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          buttonParams={buttonParams}
        />
      ))}
      </div>
      </div>
    
  )
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
  buttonParams: PropTypes.shape({
    handlerFunction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default CharactersList
