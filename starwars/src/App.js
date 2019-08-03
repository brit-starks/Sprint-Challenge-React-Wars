import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './components/Characters';

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [people, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res)
        setPeople(res.data.results)
        console.log(res.data.results)
      })
  }, []);

  let sw = people.map(character => {
    console.log(character)
    return character;
  })

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters character={sw} />
    </div>
  );
}

export default App;
