import { useEffect , useState} from "react"
import styled from "styled-components"

const NutritionPage = () => {
    const [nutritionRecipes,setNutritionRecipes] = useState([]);


    const getNutritionRecipes= async () => {

        const api = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=protein&number=12`);
        const data = await api.json();
        setNutritionRecipes(data.results);
        
    }

    useEffect(() => {
        getNutritionRecipes();
    },[]);

  return (
    <Container>
        <h2>Give your body a Nutritious diet!</h2>
        <Cards>
            {nutritionRecipes.map((recipe) => {
                return <Card  key={recipe.id}>
                <img src={recipe.image} alt="" />
                <p>{recipe.title}</p>
                <Gradient/>
            </Card>
            })}
        </Cards>
    </Container>
  )
}

const Container = styled.div`
    padding: 8rem;
    width: 100vw;
    position: relative;
    height: 100%;
    /* background-image: linear-gradient(90deg, #ede574, #e1f5c4); */
    background-image: linear-gradient(90deg, #9796f0, #fbc7d4);

    display: flex;
    /* grid-template-columns: repeat(1, 1fr); */
    flex-direction: column;
    
    align-items: center;
    h2{
        padding: 2rem;
        font-family: 'Antic Didone', serif;
        
    }

`

const Cards = styled.div`
    /* background-color: black; */
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;
    gap: 10 rem;
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

export default NutritionPage