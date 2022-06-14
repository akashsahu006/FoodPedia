import styled from "styled-components"
import {Link} from "react-router-dom"


const Taste = () => {


  return (
    <Container>

        <h3>Which taste bud you would like to please today?</h3>
        <Cards>
            <Link to={"/taste/sweet"}>
                <Card>
                    <img src="https://spoonacular.com/recipeImages/639057-556x370.jpg" alt="" />
                    <p>Sweet</p>
                    <Gradient/>
                </Card>
            </Link>
            {/* <Link to={"/taste/bitter"}>
                <Card>
                    <img src="https://spoonacular.com/recipeImages/715523-556x370.jpg" alt="" />
                    <p>Bitter</p>
                    <Gradient/>
                </Card>
            </Link> */}
            <Link to={"/taste/spicy"}>
                <Card>
                    <img src="https://spoonacular.com/recipeImages/715523-556x370.jpg" alt="" />
                    <p>Spicy</p>
                    <Gradient/>
                </Card>
            </Link>
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


export default Taste