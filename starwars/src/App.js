import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import './App.css';



function App() {

  const [starData, setStarData] = useState([]);
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res)
      setStarData(res.data.results)
      console.log('Starwars Data > App.js > useEffect:', res.data.results)
    })
    .catch(err => console.log('Unable to resolve API request: ', err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars</h1>
        <Characters data={starData} />
      </header>
    </div>
  );
}

export default App;
