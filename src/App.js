import React from 'react';

import './App.css';

import Componentone from './components/componentone';
import Componenttwo from './components/componenttwo';
import Componentthree from './components/componentthree';
import Componentfour from './components/componentfour';
import Componentfive from './components/componentfive';
import Componentsix from './components/componentsix';



function App() {
  return (
    <div className="App">
        <Componentone/>
        <Componenttwo/>
        <Componentthree/>
        <Componentfour/> 
        <Componentfive/> 
        <Componentsix/>      
    </div>
  );
}

export default App;
