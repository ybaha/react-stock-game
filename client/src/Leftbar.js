import React, { useState, useEffect, useContext } from 'react'
import StockSymbolContext from './StockSymbolContext'


export default function Leftbar() {
  const [stockNames, setStockNames] = useState([])
  const { setStockSymbol } = useContext(StockSymbolContext);


  const ListItems = (props) => {
    return (
      <div className="stockItems" onClick={props.onClick}>{props.value}</div>
    )
  }


  useEffect(() => {
    const fetchStockNames = () => {

      fetch(`http://127.0.0.1:5000`)
        .then(
          (response) => {
            return response.json();
          }
        )
        .then(
          (data) => {
            console.log(data)
            setStockNames(data)
          }
        )
    }
    fetchStockNames()
  }, [])



  const displayListItems = () => {
    let finalStockNames = []
    finalStockNames = stockNames.map((e, i) => {
      return <ListItems key={i} value={e} onClick={() => {setStockSymbol(e)}} />
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