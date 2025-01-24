import React, { useState, useEffect } from 'react'
import './search.css'
import SearchBar from '../../Components/searchBar/searchBar'

const Search = () => {
  const explanation =
    'As you type, cocktails containing those letters will appear.'
  return (
    <div className='presentation'>
      <h3 className='find'>
        Find the cocktail you like the most or discover new ones
      </h3>
      <SearchBar message={explanation} />
    </div>
  )
}

export default Search
