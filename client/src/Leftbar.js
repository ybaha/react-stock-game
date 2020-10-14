import React, { useState, useEffect } from 'react'

export default function Leftbar() {
  const [stockNames, setStockNames] = useState([])

  const ListItems = (props) => {
    return (
      <div className="stockItems">{props.value}</div>
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
    finalStockNames = stockNames.map((e) => {
      return <ListItems value={e} />
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