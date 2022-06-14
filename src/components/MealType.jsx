import { useEffect, useState } from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'

import styled from "styled-components";

const MealType = () => {

    const [mealTypeData, setMealTypeData] = useState([]);

    const getMealType = async () =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=main course`);
        const data = await api.json();
        await setMealTypeData(data.results);
    }

    useEffect(() => {
        getMealType();
    },[])

  return (
        <Wrapper>
            <div>
                <h3>Mealtype</h3>
            </div>
            <div>
                <Splide options={{
                    perPage:4,
                    arrows:false,
                    pagination:false,
                    drag:'free',
                    gap: '5rem'
                }
                }>
                {mealTypeData.map((recipe) => {
                    return <SplideSlide key={recipe.id}>
                        <Card>
                            <img src={recipe.image} alt="" />
                            <p>{recipe.title}</p>
                        </Card>
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