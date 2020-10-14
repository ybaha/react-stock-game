import React, { useEffect, useState, useRef } from 'react'
import Plot from 'react-plotly.js'

export default function Stock() {
  const [xData, setxData] = useState([])
  const [yData, setyData] = useState([])
  const [StockSymbol, setStockSymbol] = useState('FB')

  const TextInput = () => {
    const inputRef = useRef(null)

    const onInputChange = (e) => {
      e.preventDefault()
      setStockSymbol(inputRef.current.value)
    }

    return(
      <input ref={inputRef} value={StockSymbol} onChange={onInputChange} autoFocus={true}></input>
    )
  }

  useEffect(() => {
    const fetchStock = () => {
      const pointerToThis = this;
      console.log(pointerToThis);
      const API_KEY = 'HGJWFG4N8AQ66ICD';
      let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
      let stockChartXValuesFunction = [];
      let stockChartYValuesFunction = [];
  
      fetch(`http://127.0.0.1:5000/${StockSymbol}`)
        .then(
          function (response) {
            return response.json();
          }
        )
        .then(
          function (data) {
            console.log(data);
  
            for (var key in data['Time Series (Daily)']) {
              stockChartXValuesFunction.push(key);
              stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            }
            setxData(stockChartXValuesFunction)
            setyData(stockChartYValuesFunction)
          }
        )
    }
    fetchStock()
  }, [StockSymbol])


  return (
    <div>
      <TextInput></TextInput>
      <h1>{StockSymbol + " "}Stock Market</h1>
      <Plot
        data={[
          {
            x: xData,
            y: yData,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          }
        ]}
        layout={{ width: 720, height: 440, title: 'A Fancy Plot' }}
      />
    </div>
  )
}
