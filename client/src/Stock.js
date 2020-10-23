import React, { useEffect, useState, useContext } from 'react'
import Plot from 'react-plotly.js'
import StockSymbolContext from './contexts/StockSymbolContext'


export default function Stock() {
  const [xData, setxData] = useState([])
  const [yData, setyData] = useState([])
  const { stockSymbol } = useContext(StockSymbolContext);


  useEffect(() => {
    const fetchStock = () => {
      let stockChartXValues = [];
      let stockChartYValues = [];
  
      fetch(`http://127.0.0.1:5000/${stockSymbol}`)
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
    fetchStock()
  }, [stockSymbol])


  return (
    <div>
      <h1>{stockSymbol + " "}Stock Market</h1>
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
        layout={{ width: 720, height: 440, title: 'A Fancy Plot' }}
      />
    </div>
  )
}
