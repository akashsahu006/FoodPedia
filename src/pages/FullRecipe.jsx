import styled from "styled-components"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";

const FullRecipe = () => {

    const [stepsData, setStepsData] = useState([]);
    const [allData,setAllData] = useState([]);
    const [ingredients, setIngredients] =useState([]);

    const params= useParams();

    const getRecipe = async (name) =>{
        const api = await fetch (`https://api.spoonacular.com/recipes/${name}/information/?apiKey=${process.env.REACT_APP_API_KEY}`);

        const data = await api.json();
        setAllData(data);
        setStepsData(data.analyzedInstructions[0].steps);
        setIngredients(data.extendedIngredients);
        
    }
    useEffect(() =>{
        getRecipe(params.id);
    },[]);
    
  return (
    <Container>
      <h2>{allData.title}</h2>
      <div>
        <img src={allData.image} alt="" />
        {console.log(allData)}
      </div>
      <h3>Procedure to make your dish</h3>
      <div>
        
        {stepsData.map( (instruction) =>{
          return (
            <p><a>Step {instruction.number}:</a> {instruction.step}</p>
          )
        })}
      </div>
      <h3>Ingredients Required</h3>
        <IngridientsContainer>
          {ingredients.map((ingredient) => {
            return <Card>
              <p>{ingredient.name}</p>

            </Card>
          })}
        </IngridientsContainer>
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-image: linear-gradient(90deg, #9796f0, #fbc7d4);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem;
    
    h2{
        font-family: 'Antic Didone', serif;
        font-weight: 900;
        letter-spacing: 0.2rem;
    }
    img{
      margin: 2rem;
      height: 15rem;
      border-radius: 2rem;
    }
    a{
      font-weight: 700;
    }
    h3{
      color: black;
    }
    p{
      color: black;
      font-weight: 400;
    }

`
const Card = styled.div `
    width: 8rem;
    height: 3rem;
    border-radius: 1rem;
    
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
        color: black;
        width: 100%;
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`

const IngridientsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  justify-content: center;
  align-items: center;
`




export default FullRecipe