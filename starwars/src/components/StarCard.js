import React from 'react';
import styled from 'styled-components';


const StarCardDiv = styled.div`
  max-width: 40%;
  border: 3px solid gray;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 4rem;
  background-color: lightgray;
`;


const StarCard = (props) =>{
  console.log('components > StarCard: ', props);
  return(
  <StarCardDiv>
    <h1> Name: {props.name}</h1>
    <h3>Gender: {props.gender}</h3>
    <p>Birth Year: {props.birthYear}</p>
    <p>Height: {props.height}</p>
  </StarCardDiv>
  )
}


export default StarCard;