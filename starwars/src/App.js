import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './components/Characters';

import './App.css';

const App = () => {

  const [people, setPeople] = useState([]);


  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res)
        setPeople(res.data.results)
        console.log(res.data.results)
      })
  }, []);

  
   people.map(character => {
    console.log(character)
    return character;
  })

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters char={people} />
    </div>
  );
}

export default App;
