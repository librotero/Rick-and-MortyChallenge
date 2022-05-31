import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	let [favorites, setFavorites]=useState([]);
    

 const favoritesHandle =({id})=> {
  setFavorites({favorites: favorites.push({id})})
}

	return (
		<ThemeContext.Provider value={{ favorites, favoritesHandle}}>
			{children}
		</ThemeContext.Provider>
	)
}