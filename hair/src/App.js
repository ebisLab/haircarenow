import React, {useState} from "react";
import Stylists from './components/Stylists'
import './App.css';
import {profiles} from './components/data'
import { Route } from 'react-router-dom';
//import InsideStylistDetails from './components/InsideStylistDetails'




function App() {
  const [bringData, setBringData] = useState(profiles);

  return (
    <div className="App">
     <h1>Stylists</h1>
     <Stylists profiles={profiles} />
      </div>
  );
}

export default App;