import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import styled from 'styled-components';
import {FaSearch} from "react-icons/fa"

const SearchBar = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState("");

    const submitHandle = (e) => {
        e.preventDefault();
        navigate('/search/'+input);
    }
  
    return <FormStyle onSubmit={submitHandle}>
        <div>
        <FaSearch/>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
        </div>
        
    </FormStyle>
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    

    div{
        width: 100%;
        position: relative;
    }
    input{
        
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #ffffff;
        border-radius: 1rem;
        outline: none;
        width: 30rem;
        padding: 0.5rem;
        padding-left: 3rem;
        font-size: large;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color:white;
    }
`

export default SearchBar