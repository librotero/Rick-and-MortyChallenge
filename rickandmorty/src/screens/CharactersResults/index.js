import React, { useContext } from 'react'

import useFetch from '../../hooks/useFetch'

import { CharactersFavContext } from '../../context/CharactersFavContext'

import CharactersFilter from '../../components/CharactersFilter'
import CharactersFav from '../../components/CharactersFav'
import CharactersList from '../../components/CharactersList'
import Pagination from '../../components/Pagination'
import { useState } from 'react'



const CharactersResults = () => {
  const {handleAddToFavorite} = useContext(CharactersFavContext)
  let [pageNumber, setPageNumber] = useState(2);

  const {
    characters,
    loading,
    errors,
    handleCharacterFilter
  } = useFetch(`${process.env.REACT_APP_BASE_URL_API}/character/?page=${pageNumber}`)

  if (errors) {
    return <div>Error</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <CharactersFilter handleCharacterFilter={handleCharacterFilter} />
      <CharactersList
        characters={characters}
        buttonParams={{
          handlerFunction: handleAddToFavorite,
          text: 'Add to favorites'
        }}
      />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  )
}

export default CharactersResults