import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './searchBar.css'

const SearchBar = ({ message }) => {
  const [filterName, setFilterName] = useState('margarita')
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    if (filterName === '') {
      console.log('el texto del buscador está vacío')
      setCocktails([])
      return
    }
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filterName}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.drinks || !Array.isArray(data.drinks)) {
          console.log('data.drinks no existe o no es un array')
          setCocktails([])
          return
        }
        const filteredByName = data.drinks.filter((drink) =>
          drink.strDrink.toLowerCase().includes(filterName.toLowerCase())
        )
        setCocktails(filteredByName)
        console.log(cocktails)
      })
      .catch((error) =>
        console.error(
          'ha habido un error al buscar cocktails por nombre:',
          error
        )
      )
  }, [filterName])
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='search-presentation'>
      <p>{message}</p>
      <form action='' onSubmit={handleFormSubmit}>
        <label>
          <input
            name='buscadorCocktail'
            type='text'
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            className='search-input-vintage'
          />
        </label>
      </form>

      <div className='someCocktails'>
        {cocktails.map((cocktail, index) => {
          const colors = ['#493020', '#9c3e00', '#ce8a02']
          const backgroundColor = colors[index % 3]
          return (
            <div
              key={cocktail.idDrink}
              className='eachCocktail'
              style={{ backgroundColor }}
            >
              <h4>{cocktail.strDrink}</h4>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <Link to={`/detail/${cocktail.idDrink}`}>
                <button className='buttonDetail'>View Details</button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchBar
