import React from 'react';
import StarCard from './StarCard';

 const Characters = (props) => {
  return (
    <div>
    <StarCard />
      <div>
        {props.char.map(characters => {
          return (<h2>{characters.name}</h2>)
        })}
      </div>

       <div className='char-birth-year'>
      {props.char.map(characters => {
          return <h3>{characters.birth_year}</h3>
        })}
      </div>

       <div className='char-gender'>
      {props.char.map(characters => {
          return <p>{characters.gender}</p>
        })}
      </div>

       <div className='char-height'>
      {props.char.map(characters => {
          return <p>{characters.height}</p>
        })}
      </div>
    </div>
  );
}

 export default Characters; 