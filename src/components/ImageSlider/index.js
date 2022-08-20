import React , { useState } from 'react';
import './index.css';
import { arr } from './data';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import styled from "styled-components";

const Headline = styled.h4`
  color: black;
 
`;

const Text = styled.p`
  color: black;
 
`;


const ImageSlider = () =>{
    // UseState with a default value of 0.
    const [value, setValue] = useState(0);
    
    return(
    <>
    <div className="container">
      <img src = {arr[value].image} alt={arr[value].id}/>
      <Headline>{arr[value].name}</Headline>
      <Text>{arr[value].job}</Text>
      <div>
      <button type="button" onClick={() => value === 0 ? setValue(3) : setValue(value - 1)}><BsArrowLeftCircleFill /></button>
      <button type="button" onClick={() => value === 3 ? setValue(0) : setValue(value + 1)}><BsArrowRightCircleFill /></button>
        
      </div>
    </div>
    </>
    );
  };

  export default ImageSlider;