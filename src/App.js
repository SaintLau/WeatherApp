import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
//Create state for latitude and for longitude
const [lat, setLat ] = useState([]);
const [long, setLong] = useState([]);

//fuction so that when app is loading and reloading, useEffect
useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });

  console.log("Latitude is:", lat);
  console.log("Longitude is:", long);
}, [lat, long]); 


  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
