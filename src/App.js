import React from 'react';

import './App.css';

import Login from './components/login';
import Profile from './components/profile';
import Signup from './components/signup';
import Weather from './components/weather';


function App() {
  return (
    <div className="App">
      <Login/>
      <Profile/>
      <Signup/>
      <Weather/>
      
    </div>
  );
}

export default App;
