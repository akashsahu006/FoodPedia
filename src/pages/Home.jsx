import styled from "styled-components"
import Taste from "../components/Taste"
import Nutrition from "../components/Nutrition"
import MealType from "../components/MealType"
import SearchBar from "../components/SearchBar"

const Home = () => {
  return (
    <Container>
        <div>
            <h2>FoodPedia</h2>
        </div>
        <SearchContainer>
            <SearchBar/>
        </SearchContainer>
        <MealContainer>
            <MealType/>
        </MealContainer>
        <div>
            <Taste/>
        </div>
        <div>
            <Nutrition/>
        </div>
        

    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    position: relative;
    height: 100%;
    padding-top: 4rem;
    padding-bottom: 4rem;
    /* background-image: linear-gradient(90deg, #ede574, #e1f5c4); */
    background-image: linear-gradient(90deg, #9796f0, #fbc7d4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        font-family: 'Antic Didone', serif;
        font-weight: 900;
        letter-spacing: 0.5rem;
        
    }
`

const SearchContainer = styled.div `
    margin-top: 5rem;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
`

const MealContainer = styled.div`
    width: 100vw;
`

export default Home