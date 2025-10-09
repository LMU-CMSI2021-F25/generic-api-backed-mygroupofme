import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StarWarsLogo from './starwars.png';
import planet1 from './hoth.png'
import planet2 from './naboo.png'
import planet3 from './coruscant.png'
import planet4 from './tatooine.png'

console.log(StarWarsLogo);
console.log(planet1);
console.log(planet2);
console.log(planet3);
console.log(planet4);

function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false); 
  const [planets, setPlanets] = useState([]);
  const fetchPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets/");
    const data = await response.json();
    const chosenIndexes = [3, 7, 8, 0];
    const selectedPlanets = chosenIndexes.map(i => data.results[i]);
    setPlanets(selectedPlanets);
  };

  return (
    <>
      <div>
        <img src={StarWarsLogo} class = 'title' alt="logo" />
      </div>
      <h1>Planets</h1>
      <div className="card">
        
        <p>
          <div class = "container button">
            <img src={planet1} class = 'logo' alt="logo" onClick={() => setVisible(true) }/>
            {planets.map((planet, index) => (
            <div key={index} className="card">
            <button style={{ visibility: visible ? "visible" : "hidden" }} onClick={fetchPlanets}>
              <h2>{planet.name}</h2>
              <p><strong>Climate:</strong> {planet.climate}</p>
              <p><strong>Terrain:</strong> {planet.terrain}</p>
              <p><strong>Population:</strong> {planet.population}</p> 
            </button>
            </div>
            ))}
          </div>


          <div class = "container button">
            <img src={planet2} class = 'logo' alt="logo" onClick={() => setVisible(true) }/>
            {planets.map((planet, index) => (
            <div key={index} className="card">
            <button style={{ visibility: visible ? "visible" : "hidden" }} onClick={fetchPlanets}>
              <h2>{planet.name}</h2>
              <p><strong>Climate:</strong> {planet.climate}</p>
              <p><strong>Terrain:</strong> {planet.terrain}</p>
              <p><strong>Population:</strong> {planet.population}</p> 
            </button>
            </div>
            ))}
          </div>


          <div class = "container button">
            <img src={planet3} class = 'logo' alt="logo" onClick={() => setVisible(true) }/>
            {planets.map((planet, index) => (
            <div key={index} className="card">
            <button style={{ visibility: visible ? "visible" : "hidden" }} onClick={fetchPlanets}>
              <h2>{planet.name}</h2>
              <p><strong>Climate:</strong> {planet.climate}</p>
              <p><strong>Terrain:</strong> {planet.terrain}</p>
              <p><strong>Population:</strong> {planet.population}</p> 
            </button>
            </div>
            ))}
          </div>


          <div class = "container button">
            <img src={planet4} class = 'logo' alt="logo" onClick={() => setVisible(true) }/>
            {planets.map((planet, index) => (
            <div key={index} className="card">
            <button style={{ visibility: visible ? "visible" : "hidden" }} onClick={fetchPlanets}>
              <h2>{planet.name}</h2>
              <p><strong>Climate:</strong> {planet.climate}</p>
              <p><strong>Terrain:</strong> {planet.terrain}</p>
              <p><strong>Population:</strong> {planet.population}</p> 
            </button>
            </div>
            ))}
          </div>
          
          
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App