import React, { useState, useEffect, useRef } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../firebase"


export default function Rightbar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const currentUserMailRef = useRef(currentUser.email)
  const history = useHistory()
  const [balance, setBalance] = useState(null)
  const [userId, setUserId] = useState("")

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }



  useEffect(() => {
    let userIdIndex = currentUserMailRef.current.indexOf("@")
    let userIdRef = currentUserMailRef.current.substr(0, userIdIndex)
    setUserId(userIdRef)
  }, [])


  useEffect(() => {
    let balanceRef = db.ref('users/' + userId + '/balance');
    balanceRef.on('value', (snapshot) => {
      setBalance(snapshot.val())
    })
  }, [userId])


  return (
    <div className="Rightbar">
      <div className="wrapper">
        <li className="listItem">
          <h2>Profile</h2>
          {error && <div>{error}</div>}
          <strong>Username:</strong> {userId}
          <p>
            <Link to="/update-profile">
              Update Profile
            </Link>
          </p>
          <button onClick={handleLogout}>
            Log Out
          </button>
          <p>Balance: {balance}</p>
        </li>
      </div>
    </div>
  )
}