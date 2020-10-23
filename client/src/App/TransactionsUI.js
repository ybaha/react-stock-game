import React from 'react'
import { Link } from 'react-router-dom'


export default function TransactionsUI(props) {
  return (
    <div>
      <h1>TransactionsUI</h1>
      <h2>{props.stockName}</h2>
      <Link to="/">Go back</Link>
    </div>
  )
}
