import Home from "./Home"
import Recipe from "./Recipe"
import NutritionPage from "./NutritionPage"
import FullRecipe from "./FullRecipe"
import MealPage from "./MealPage"
import SearchPage from "./SearchPage"
import {Routes, Route} from "react-router-dom"

const Pages = () => {
  return (

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/taste/:which" element={<Recipe/>} />
        <Route path="/nutrition" element={<NutritionPage/>}/> 
        <Route path="/recipe/:id" element={<FullRecipe/>} />
        <Route path="/meal/:meal" element={<MealPage/>} />
        <Route path="/search/:query" element={<SearchPage/>} />
    </Routes>
  )
}

export default Pages