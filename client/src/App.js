import React, { useState } from 'react';
import StockSymbolContext from './StockSymbolContext'
import Stock from './Stock';
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import './App.css';

function App() {

  const [stockSymbol, setStockSymbol] = useState("FB");
  const value = { stockSymbol, setStockSymbol };



  return (
    <div className="App">
      <StockSymbolContext.Provider value={value}>
        <Leftbar></Leftbar>
        <Stock></Stock>
      </StockSymbolContext.Provider>
      <Rightbar></Rightbar>
    </div>
  );
}

export default App;
