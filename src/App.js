import './App.css';
import React, { useEffect, useState } from 'react';
import Weather from './components/weather';


function App() {
//Create state for latitude and for longitude
const [lat, setLat ] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState([]);

//fuction so that when app is loading and reloading, useEffect
useEffect(() => {

  const fetchData = async () => {

    navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await 
      fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });  
    }
    fetchData(); 
  }, [lat, long]); 

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
