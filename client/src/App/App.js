import React, { useState } from 'react'
import { Route, Switch, } from 'react-router-dom'
import StockSymbolContext from '../contexts/StockSymbolContext'
import Chart from './Chart'
import TransactionsUI from './TransactionsUI'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import './App.css'

function App() {

  const [stockSymbol, setStockSymbol] = useState("FB");
  const value = { stockSymbol, setStockSymbol };


  return (
    <div className="App">
      <StockSymbolContext.Provider value={value}>
        <Leftbar></Leftbar>
        <Switch>
          <Route exact path="/" component={Chart}></Route>
          <Route path="/buy" render={() => {return <TransactionsUI stockName={stockSymbol} />}}></Route>
        </Switch>
      </StockSymbolContext.Provider>
      <Rightbar></Rightbar>
    </div>
  )
}

export default App
