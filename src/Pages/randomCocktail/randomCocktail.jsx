import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './randomCocktail.css'

const RandomCocktail = () => {
  const [cocktail, setCocktail] = useState([])
  const [button, setButton] = useState('')
  const [colorIndex, setColorIndex] = useState(0)

  const colors = ['#493020', '#9c3e00', '#ce8a02']

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks))
      .catch((error) =>
        console.error('ha habido un error cogiendo un cóctel al azar:', error)
      )
  }, [button])
  console.log(cocktail)
  const handleRandomClick = () => {
    setButton((prev) => !prev)
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
  }

  return (
    <div className='presentation'>
      <h3 className='discover'>Discover a random cocktail every time</h3>
      <button className='buttonRandom' onClick={handleRandomClick}>
        Random
      </button>

      {cocktail.length > 0 ? (
        cocktail.map((drink) => {
          return (
            <div
              key={drink.idDrink}
              className='eachCocktail horizontal'
              style={{ backgroundColor: colors[colorIndex] }}
            >
              <h4 className='h4Random'>{drink.strDrink}</h4>
              <img src={drink.strDrinkThumb} alt={drink.idDrink} />
              <Link to={`/detail/${drink.idDrink}`}>
                <button className='buttonDetail randomDetail'>
                  <span>View </span>
                  <span>Details</span>
                </button>
              </Link>
            </div>
          )
        })
      ) : (
        <p>Cargando cóctel...</p>
      )}
    </div>
  )
}

export default RandomCocktail
