import React, { useState, useEffect } from 'react'
import { Route, Switch, } from 'react-router-dom'
import { StockSymbolContext, AllStockPricesContext } from '../contexts/StockSymbolContext'
import Chart from './Chart'
import TransactionsUI from './TransactionsUI'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import './App.css'

function App() {
  const [stockSymbol, setStockSymbol] = useState(false);
  const [allStockPrices, setAllStockPrices] = useState({});

  let value = { stockSymbol, setStockSymbol };
  let value2 = { allStockPrices, setAllStockPrices };

  console.log(stockSymbol);

  return (
    <div className="App">
      <StockSymbolContext.Provider value={value}>
        <AllStockPricesContext.Provider value={value2}>
          <Leftbar />
          <Switch>
            <Route exact path="/react-stock-game/" component={Chart} />
            <Route path="/react-stock-game/buy"
              render={() => {
                return <TransactionsUI stockName={stockSymbol} stockPrice={allStockPrices[stockSymbol]} />
              }}
            />
          </Switch>
        </AllStockPricesContext.Provider>
      </StockSymbolContext.Provider>
      <Rightbar></Rightbar>
    </div>
  )
}

export default App
