import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [films, setFilms] = useState();
  const [people, setPeople] = useState();
  const [planets, setPlanets] = useState();
  const [species, setSpecies] = useState();
  const [starships, setStarships] = useState();
  const [vehicles, setVehicles] = useState();

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/')
      .then(res => {
        console.log(res)
        setFilms(res.data.films)
        setPeople(res.data.people)
        setPlanets(res.data.planets)
        setSpecies(res.data.species)
        setStarships(res.data.starships)
        setVehicles(res.data.vehicles)
        // console.log(films);
      })
  })

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
    </div>
  );
}

export default App;
