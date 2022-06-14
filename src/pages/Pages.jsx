import Home from "./Home"
import Recipe from "./Recipe"
import NutritionPage from "./NutritionPage"
import FullRecipe from "./FullRecipe"
import {Routes, Route} from "react-router-dom"

const Pages = () => {
  return (

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/taste/:which" element={<Recipe/>} />
        <Route path="/nutrition" element={<NutritionPage/>}/> 
        <Route path="/recipe/:id" element={<FullRecipe/>} />
    </Routes>
  )
}

export default Pages