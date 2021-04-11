import React, { useState, useEffect, useContext } from 'react'
import { StockSymbolContext, AllStockPricesContext } from '../contexts/StockSymbolContext'


export default function Leftbar() {
  const [stockNames, setStockNames] = useState([])

  const { setAllStockPrices } = useContext(AllStockPricesContext)
  const { stockSymbol, setStockSymbol } = useContext(StockSymbolContext);

  const ListItems = (props) => {
    return (
      <div className="listItem" onClick={props.onClick}>{props.value}</div>
    )
  }

  const fetchStockNames = async () => {
    fetch(`http://127.0.0.1:5000`)
      .then(
        (response) => {
          return response.json();
        }
      )
      .then(
        (data) => {
          setStockNames(data)
        }
      )
  }

  const fetchStock = async () => {
    if (stockSymbol) {
      let res = await fetch(`http://127.0.0.1:5000/${stockSymbol}`)
      let data = await res.json()
      let keys = Object.keys(data['Time Series (Daily)']);
      let last = keys[0];
      let price = Number(data['Time Series (Daily)'][last]['1. open'])
      return price
    }
  }

  const fetchAllStockPrices = async () => {
    let rawPrices = await fetch('http://127.0.0.1:5000/prices')
    let prices = await rawPrices.json()
    setAllStockPrices(prices)
  }

  useEffect(() => {
    fetchStockNames()
    fetchStock()
  }, [stockSymbol])

  useEffect(() => {
    fetchAllStockPrices()
  }, [])


  const SSP = async (e) => {
    setStockSymbol(e)
  }

  const displayListItems = () => {
    let finalStockNames = []
    finalStockNames = stockNames.map((e, i) => {
      return <ListItems key={i} value={e} onClick={() => { SSP(e) }} />
    })
    return finalStockNames
  }

  return (
    <div className="Leftbar">
      <div className="wrapper">
        {displayListItems()}
      </div>
    </div>
  )
}