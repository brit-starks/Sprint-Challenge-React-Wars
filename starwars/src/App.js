import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import Characters from './components/Characters';
import styled from 'styled-components';

import './App.css';
import StarCard from './components/StarCard';

const Title = styled.h1`
  font-size: 4rem;
  padding: 3.6rem;
  background-color: gray;
  border: 4px solid darkgray;
`;

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
      <Title className="Header">React Wars</Title>
        {people.map(
         renderCard
         )}
    </div>
  );
}

export default App;
