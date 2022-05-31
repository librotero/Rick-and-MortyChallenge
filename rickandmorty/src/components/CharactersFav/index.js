import React, { useContext } from 'react'

import { CharactersFavContext } from '../../context/CharactersFavContext'

import CharactersList from '../CharactersList'

const CharactersFav = () => {
  const { favorites, handleDeleteFromFavorite } = useContext(CharactersFavContext)

  return (
    <div>
      <CharactersList
        characters={favorites}
        buttonParams={{
          handlerFunction: handleDeleteFromFavorite,
          text: 'Remove'
        }}
      />
    </div>
  )
}

export default CharactersFav
