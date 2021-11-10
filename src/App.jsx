import React from 'react'
import './App.scss'
import Categories from './Components/results-form/categories/Categories'
import HowItWorks from './Components/how-it-works/HowItWorks'
// import { BrowserRouter, Route } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import Header from './Components/header/headerinfo';
// import Banner from './Components/Banner'
import Results from './Components/Results';
import CityDetail from './Components/CityDetail';

let apiUrl = 'http://gapct2recommendationengine-env.eba-amwf2dwx.us-east-1.elasticbeanstalk.com/api/v1.0/recs'

let baseUrl = ''

if (process.env.REACT_APP_NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000'
} else {
  baseUrl = process.env.REACT_APP_NODE_ENV
}

export default function App() {

  return (
    <>
    <Switch>
      <Route exact path="/">
        <Header />
        <HowItWorks/>
        <Categories apiUrl={apiUrl}/>
      </Route>
      {/* <Route exact path="/results">
        <Results/>
      </Route> */}
      <Route exact path="/city/:id">
        <CityDetail/>
      </Route>
    </Switch>
    </>

  );
}

