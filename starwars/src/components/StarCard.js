import React from 'react';
// import {Card, Icon} from 'semantic-ui-react';


const StarCard = (props) =>{
  console.log('components > StarCard: ', props);
  return(
  <div>
    <h1> Name: {props.name}</h1>
    <h3>Gender: {props.gender}</h3>
    <p>Birth Year: {props.birthYear}</p>
    <p>Height: {props.height}</p>
  </div>
  )
}


export default StarCard;