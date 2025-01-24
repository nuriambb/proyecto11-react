import React, { useState, useEffect } from 'react'
import './cocktailDetail.css'
import { useParams } from 'react-router-dom'

const CocktailDetail = () => {
  const { id } = useParams()
  const [cocktail, setCocktail] = useState([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks))
      .catch((error) =>
        console.error(
          'ha habido un problema al obtener los detalles del cóctel:',
          error
        )
      )
  }, [id])
  console.log(cocktail)

  return (
    <div>
      {cocktail.map((drink) => {
        const ingredients = []
        for (let i = 0; i < 15; i++) {
          const ingredient = drink[`strIngredient${i}`]
          const measure = drink[`strMeasure${i}`]

          if (ingredient) {
            ingredients.push(measure ? `${ingredient}${measure}` : ingredient)
          }
        }

        return (
          <div className='div-general' key={drink.idDrink}>
            <div className='div-title'>
              <h3 className='h3-title'>{drink.strDrink}</h3>
            </div>
            <div className='div-info'>
              <div className='div-image'>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </div>
              <div className='div-info-text'>
                <div className='div-ingredients'>
                  <h5> Ingredients </h5>
                  <ul>
                    {ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className='div-preparation'>
                  <div className='div-instructions'>
                    <p>{drink.strInstructions}</p>
                  </div>
                  <div className='div-glass'>
                    <p> Glass: {drink.strGlass}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CocktailDetail
