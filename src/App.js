import React, {Component, useState} from 'react'
import './App.scss'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Categories from './Components/Categories'
import HowItWorks from './Components/HowItWorks'
// import { BrowserRouter, Route } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Header from './Components/header/Header';
// import Banner from './Components/Banner'
import Results from './Components/Results';
import CityDetail from './Components/CityDetail';

let baseUrl = 'http://gapct2recommendationengine-env.eba-amwf2dwx.us-east-1.elasticbeanstalk.com/api/v1.0/recs'

console.log(baseUrl)
export default function App() {

  return (
    <>
    <Switch>
      <Route exact path="/">
        <Header />
        <HowItWorks/>
        <Categories baseUrl={baseUrl}/>
      </Route>
      <Route exact path="/results">
        <Results/>
      </Route>
      <Route exact path="/city/:id">
        <CityDetail/>
      </Route>
    </Switch>

     {/*<MapContainer center={[39.2904, -76.6122]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[39.2904, -76.6122]}>
    <Popup> 
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <Marker position={[38.9072, -77.0369]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>*/}
    </>

  );
}

