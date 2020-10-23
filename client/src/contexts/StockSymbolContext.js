import React from 'react'


const StockSymbolContext = React.createContext({
  stockSymbol: 'FB',
  setStockSymbol: () => { }
})


export default StockSymbolContext
