import React, { useState, useRef } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link } from 'react-router-dom'
import { db } from '../firebase'


export default function TransactionsUI(props) {

  const { currentUser } = useAuth()
  const [userId, setUserId] = useState(false)
  const [balance, setBalance] = useState(0)
  const inputRef = useRef()

  console.log(userId);

  React.useEffect(() => {
    let userIdIndex = currentUser.email.indexOf("@")
    let userIdRef = currentUser.email.substr(0, userIdIndex)
    setUserId(userIdRef)
  }, [currentUser])

  async function writeUserData(uId, balance, amount, stockName) {
    let stocksRef = db.ref('users/' + uId + '/stocks' + `/${stockName}`)
    db.ref('users/' + uId + '/balance').set(balance)
    let prevStockValue = await (await stocksRef.once('value')).val()
    console.log(prevStockValue);
    stocksRef.set(Number(amount) + Number(prevStockValue))
  }

  function getUserData(uId) {
    console.log("userid: " + uId);
    let bref = db.ref('users/' + uId + '/balance');
    bref.on('value', (snapshot) => {
      setBalance(snapshot.val())
    })
  }

  React.useEffect(() => {
    userId ? getUserData(userId) : console.log("Cant get userid")
  }, [userId])

  function buyStock(stockPrice, amount) {
    if (Number(amount) * Number(stockPrice) <= balance) {
      let newbalance = balance - (stockPrice * amount)
      newbalance = Math.trunc(newbalance * Math.pow(10,3))/Math.pow(10,3) // getting rid of excessive zeros
      writeUserData(userId, newbalance, amount, props.stockName)
      setBalance(newbalance)
    }
    else {
      alert("not enough balance")
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    getUserData(userId)
    console.log(inputRef.current.value)
    buyStock(props.stockPrice, inputRef.current.value)
  }


  return (
    <div>
      <h1>Transactions</h1>
      <h2>Your balance: {balance}</h2>
      <h2>{props.stockName}</h2>
      <h3>{props.stockPrice}</h3>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef}></input>
        <input type="submit" />
      </form>

      <Link to="/">Go back</Link>
    </div>
  )
}
