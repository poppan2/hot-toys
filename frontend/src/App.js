import './App.css';
import Characters from './components/Characters';
import CreateCharacter from './components/CreateCharacter';
// import SearchCharacter from './components/SearchCharacter';
import React, { useEffect, useState } from 'react'

function App() {

  const [characters, setCharacters] = useState()
  const [searchCharacter, setSearchCharacter] = useState('')
  const handleSubmit = (name)=>{
    setSearchCharacter(name)
  }

  useEffect(()=>{
    fetch('http://localhost:5000/characters')
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])

  console.log(characters)
  return (
    <div className="App">
      {/* <SearchCharacter characters={characters} handleSubmit={handleSubmit}/> */}
      <CreateCharacter />
      <Characters characters={characters} charName={searchCharacter}/>
    </div>
  );
}

export default App;
