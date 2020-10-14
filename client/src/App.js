import React from 'react';
import Stock from './Stock';
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Leftbar></Leftbar>
      <Stock></Stock>
      <Rightbar></Rightbar>
    </div>
  );
}

export default App;
