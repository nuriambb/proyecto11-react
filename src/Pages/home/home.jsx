import React, { useState, useEffect } from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) =>
        console.error('error al obtener los datos de los cocteles')
      )
  }, [])

  return (
    <div className='presentation'>
      <h1>Want Some Cocktail?</h1>
      <h3>Welcome to cocktails page</h3>
      <p>
        Discover and explore a selection of cocktails from around the world.
      </p>
      <div className='someCocktails'>
        {cocktails.slice(0, 8).map((cocktail, index) => {
          console.log(cocktail)
          const colors = ['#493020', '#9c3e00', '#ce8a02']
          const backgroundColor = colors[index % 3]
          return (
            <div
              key={cocktail.idDrink}
              className='eachCocktail'
              style={{ backgroundColor }}
            >
              <h4>{cocktail.strDrink}</h4>
              <img
                className='imgCocktail'
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
              />
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

export default Home
