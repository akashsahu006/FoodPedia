import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from "react-router-dom"
import styled from "styled-components";

const MealType = () => {

    const mealData = [
      {
        id: 1,
        title: "Dessert",
        image: "https://spoonacular.com/recipeImages/1096302-312x231.jpg",
      },
      {
        id: 2,
        title: "Appetizer",
        image: "https://spoonacular.com/recipeImages/1095745-312x231.jpg",
      },
      {
        id:3,
        title: "Main course",
        image:"https://spoonacular.com/recipeImages/716408-312x231.jpg",
      },
      {
        id:4,
        title: "Drink",
        image: "https://spoonacular.com/recipeImages/660227-312x231.jpg",
      },
      {
        id: 5,
        title: "Breakfast",
        image: "https://spoonacular.com/recipeImages/655186-312x231.jpg",
      },
      {
        id: 6,
        title: "Salad",
        image: "https://spoonacular.com/recipeImages/729366-312x231.jpg",
      },
    ]


  return (
        <Wrapper>
            <TitleContainer>
                <h3>Craft delicious Recipe</h3>
            </TitleContainer>
            <div>
                <Splide options={{
                    perPage:4,
                    arrows:false,
                    pagination:false,
                    drag:'free',
                    gap: '5rem'
                }
                }>
                {mealData.map((recipe) => {
                    return <SplideSlide key={recipe.id}>
                      <Link to={"/meal/" + recipe.title}>
                          <Card>
                              <img src={recipe.image} alt="" />
                              <p>{recipe.title}</p>
                              <Gradient/>
                          </Card>
                        </Link>
                    </SplideSlide>
                })}
                </Splide>
            </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0rem;
  padding: 3rem;
`;

const TitleContainer = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    font-family: 'Nuosu SIL', serif;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }
`

const Card = styled.div`
  height: 16rem;
  width: 16rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    width: 30rem;
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
    bottom: 0%;,
    transform: translate(-50%,0%);
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

export default MealType