import React, { useEffect, useState, useContext } from 'react'
import Plot from 'react-plotly.js'
import { Link } from 'react-router-dom'
import { StockSymbolContext, AllStockPricesContext } from '../contexts/StockSymbolContext'

export default function Chart() {
  const [xData, setxData] = useState([])
  const [yData, setyData] = useState([])

  const { stockSymbol } = useContext(StockSymbolContext)
  const { allStockPrices } = React.useContext(AllStockPricesContext)

  const fetchStock = () => {
    if (stockSymbol) {
      let stockChartXValues = [];
      let stockChartYValues = [];

      fetch(`https://stock-game-server.herokuapp.com/${stockSymbol}`)
        .then(
          function (response) {
            return response.json();
          }
        )
        .then(
          function (data) {
            for (var key in data['Time Series (Daily)']) {
              stockChartXValues.push(key);
              stockChartYValues.push(data['Time Series (Daily)'][key]['1. open']);
            }
            setxData(stockChartXValues)
            setyData(stockChartYValues)
          }
        )
    }
  }

  useEffect(() => {
    fetchStock()
  }, [stockSymbol])

  const ChartTemplate = (stockSymbol, stockPrice) => {
    return (
      <div>
        <h1>{stockSymbol + " "}Stock Market</h1>
        <h2>Price: {stockPrice}</h2>
        <Plot
          data={[
            {
              x: xData,
              y: yData,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'blue' },
            }
          ]}
          layout={{ width: 720, height: 440 }} //title: ...
        />
        <p><Link to="/buy">Buy</Link></p>
      </div>
    )
  }

  return (
    <>
      {
        stockSymbol !== false ?
          ChartTemplate(stockSymbol, allStockPrices[stockSymbol])
          :
          <div>Choose stock from the list</div>
      }
    </>
  )
}
