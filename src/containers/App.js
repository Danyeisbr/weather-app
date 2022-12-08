import React, { useState } from 'react';
import ParticleSnow from "../particles/ParticleSnow.jsx";
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import City from '../components/City';
import { Route, Switch } from 'react-router-dom';

const apiKey = 'e7ef9244bddbf1587215909c6e0a77d7';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City was not found");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId));
    return ciudad;
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <ParticleSnow />
      <Switch>
        <Route exact path='/weather-app/'>
          <Cards
            cities={cities}
            onClose={onClose}
          />
        </Route>
        <Route
          path='/ciudad/:ciudadId'
          render={({match}) => <City city={onFilter(match.params.ciudadId)} />}>
        </Route>
      </Switch>
      <hr />
    </div>
  );
}

export default App;