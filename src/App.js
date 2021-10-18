import React from 'react'
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Header from './components/header/Header';

export default function App() {
  return (

    <BrowserRouter >
      <Route exact path="" component={Header} />
      <Route exact path="/home">
        <MapContainer center={[39.2904, -76.6122]} zoom={13} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[39.2904, -76.6122]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
        </MapContainer>
      </Route>
    </BrowserRouter>

    
  );
}

