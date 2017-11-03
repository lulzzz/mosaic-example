import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UmdLoader from 'react-umd-loader'

class App extends Component {
  render() {
    return (<UmdLoader url="http://localhost:5500/offer/frontend/app.js" name="VehicleSelectionTileContainer">
             <p>Loading remote component...</p>
           </UmdLoader>);
  }
}

export default App;
