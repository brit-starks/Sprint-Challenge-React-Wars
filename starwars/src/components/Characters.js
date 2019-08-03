import React from 'react';

const Characters = (props) => {
  return (
    <div style={{maxWidth: '100%', height: '100rem'}} className='characters'>
      <div style={{margin: '15rem', color: 'blue',height: '5rem', display: 'flex', flexDirection: 'column'}} className='char-name'>
        {props.character.map(characters => {
          return <h2>{characters.name}</h2>
        })}
      </div>

      <div className='char-birth-year'>
      {props.character.map(characters => {
          return <h3>{characters.birth_year}</h3>
        })}
      </div>

      <div className='char-gender'>
      {props.character.map(characters => {
          return <p>{characters.gender}</p>
        })}
      </div>

      <div className='char-height'>
      {props.character.map(characters => {
          return <p>{characters.height}</p>
        })}
      </div>
    </div>
  );
}

export default Characters;