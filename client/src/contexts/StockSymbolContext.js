import React from 'react'


const StockSymbolContext = React.createContext({
  stockSymbol: false,
  setStockSymbol: () => {}
})

const AllStockPricesContext = React.createContext({
  allPrices: {},
  setAllStockPrices: () => {}
})



export {
  StockSymbolContext,
  AllStockPricesContext
}
