import './App.css';
import React, { Component } from 'react'
import {useState} from 'react';
import Map, {Marker} from 'react-map-gl';

let baseURL = ""
if(process.env.NODE_ENV === "development"){
  baseURL = "http://localhost:3001"
} else {
  baseURL = "Your heroku backend url here"
}
console.log("Current base URL: ", baseURL)

function App() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    longitude: -97.4,
    latitude: 38,
    zoom: 4
  })
  return (
    <Map
        initialViewState={{ ...viewport }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        transitionDuration="200"
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
<<<<<<< HEAD
      <Marker
      longitude={-97.4}
      latitude={38}
=======
      <Marker 
      longitude={-97.4} 
      latitude={38} 
>>>>>>> 1daa875cbf2b802d9891b235a7db33e9e706f42c
      offsetLeft={-20}
      offsetTop={-10}
      >
     </Marker>
      </Map>
  );
}

export default App
