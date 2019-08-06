import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './components/Characters';

import './App.css';
import StarCard from './components/StarCard';

const App = () => {

  const [people, setPeople] = useState([]);


  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res)
        setPeople(res.data.results)
        console.log('results: ', res.data.results)
      })
  }, []);

  function renderCard (obj){
    return <StarCard 
    
    name={obj.name}
    birthYear={obj.birth_year}
    gender={obj.gender}
    height={obj.height}
    key={obj.name}
    
    />
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {people.map(
         renderCard
         )}
    </div>
  );
}

export default App;
