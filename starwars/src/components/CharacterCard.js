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


const CharacterCard = (props) => {
  console.log('CharacterCard > PROPS: ', props);
  return(
    <StarCardDiv>
      <h2>{props.name}</h2>
      <h4>{props.birthYear}</h4>
      <p>{props.gender}</p>
    </StarCardDiv>
  )
}

export default CharacterCard;