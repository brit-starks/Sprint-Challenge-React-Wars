import React from 'react';
import CharacterCard from './CharacterCard';


const Character = (props) => {
  console.log('Starwars Data PROPS > Characters.js', props)

  const card = (char) => {
    return <CharacterCard 
    key={char.name}
    name={char.name}
    birthYear={char.birth_year}
    gender={char.gender}
    />
  }

  return(
  <div>
    {props.data.map(
      // console.log('Characters.js > Map()', character);
      card
    )}

    <CharacterCard />
  </div>
  )
}


export default Character;