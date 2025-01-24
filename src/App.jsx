import './App.css'
import { Routes, Route, Router } from 'react-router-dom'
import NavBar from './Components/navbar/navBar'
import Home from './Pages/home/home'
import Search from './Pages/search/search'
import RandomCocktail from './Pages/randomCocktail/randomCocktail'
import NotFound from './Pages/notFound/notFound'
import CocktailDetail from './Pages/cocktailDetail/cocktailDetail'
import Footer from './Components/footer/footer'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/random' element={<RandomCocktail />} />
        <Route path='/detail/:id' element={<CocktailDetail />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
