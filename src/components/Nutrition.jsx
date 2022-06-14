import styled from "styled-components"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"


const Nutrition = () => {

    const [nutritionRecipes, setNutritionRecipes] = useState([]);

    const getNutritionRecipes = async () => {
        const api = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=protein&number=3`);
        const data = await api.json();
        // console.log(data.results)
        setNutritionRecipes(data.results);
    }
    useEffect(() => {
        getNutritionRecipes();
    },[]);

    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        navigate('/nutrition');
    }


  return (
    <Container>
        <Head>
            <h3>Gym day? Say no more...</h3>
            
                <button onClick={submitHandle}><p>More nutritious recipes</p></button>
            
        </Head>
        <Cards>
            {nutritionRecipes.map((recipe) => {
                return (
                    <Link to={"/recipe/" + recipe.id}>
                    <Card key={recipe.id}>
                    <img src={recipe.image} alt="" />
                    <p>{recipe.title}</p>
                    <Gradient/>
                </Card>
                </Link>)
            })}
            {/* <Link to={"/taste/sweet"}>
                <Card>
                    <img src="https://spoonacular.com/recipeImages/639057-556x370.jpg" alt="" />
                    <p>Sweet</p>
                    <Gradient/>
                </Card>
            </Link> */}
            {/* <Link to={"/taste/bitter"}>
                <Card>
                    <img src="https://spoonacular.com/recipeImages/715523-556x370.jpg" alt="" />
                    <p>Bitter</p>
                    <Gradient/>
                </Card>
            </Link> */}
            {/* <Link to={"/taste/spicy"}>
                <Card>
                    <img src="https://spoonacular.com/recipeImages/715523-556x370.jpg" alt="" />
                    <p>Spicy</p>
                    <Gradient/>
                </Card>
            </Link> */}
        </Cards>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    /* background-color: red; */
`
const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        padding: 0.5rem;
        margin: 1rem;
        background-image: linear-gradient(90deg,#8e2de2,#4a00e0);
        border-radius: 1rem;
        color: white;
        border-width: 0;
        
        p{
        font-family: 'Nuosu SIL', serif;
        font-weight: 500;
        /* letter-spacing: 0.2rem; */
        }
    }
    h3{
        font-family: 'Nuosu SIL', serif;
        font-weight: 700;
        letter-spacing: 0.2rem;
    }
`
const Cards = styled.div`
    /* background-color: black; */
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    
`

const Card = styled.div `
    width: 16rem;
    height: 16rem;
    border-radius: 1rem;
    
    overflow: hidden;
    position: relative;
    img{
        border-radius: 1rem;
        width: 20rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left:0%;
        bottom: 0%;
        /* transform: translate(-50%,0%); */
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`


export default Nutrition