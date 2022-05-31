import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import { CharactersFavContextProvider } from './context/CharactersFavContext'

import CharactersResults from './screens/CharactersResults'
import CharacterDetail from './screens/CharacterDetail'
import Layout from './components/Layout'

import GlobalStyles from './styles/GlobalStyles'
import Fav from './screens/Fav';

function App () {
  return (
    <BrowserRouter>
      <CharactersFavContextProvider>
        <Layout>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<CharactersResults />} />
            <Route path="/:id" element={<CharacterDetail />} />
            <Route path="/fav" element={<Fav />} />
          </Routes>
        </Layout>
      </CharactersFavContextProvider>
    </BrowserRouter>
  )
}

export default App
