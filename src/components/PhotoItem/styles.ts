import styled from "styled-components";

export const Container =  styled.div`
background-color: #3d3f43;
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: column;
position: relative;

img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
}


`

export const Button = styled.button`
  background: #3d3f43;
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 5px;
    width: 30px;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.2s;
    opacity: 0.9;
    
    &:hover {
      scale: 1.2;
      opacity: 1;
    }


`