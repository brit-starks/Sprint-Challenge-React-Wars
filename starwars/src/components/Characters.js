import React from 'react';

 const Characters = (props) => {
  return (
    <div>
      <div>
        {props.char.map(characters => {
          return (<h2>{characters.name}</h2>)
        })}
      </div>

       {/* <div className='char-birth-year'>
      {props.character.map(characters => {
          return <h3>{props.characters.birth_year}</h3>
        })}
      </div>

       <div className='char-gender'>
      {props.character.map(characters => {
          return <p>{props.characters.gender}</p>
        })}
      </div>

       <div className='char-height'>
      {props.character.map(characters => {
          return <p>{props.characters.height}</p>
        })}
      </div> */}
    </div>
  );
}

 export default Characters; 