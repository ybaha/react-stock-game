import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")

    } catch {
      setError("Failed to create an account")
      setLoading(false)
    }
  }


  return (
    <>
      <h2 >Sign Up</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div id="email">
          <div>Email</div>
          <input type="email" ref={emailRef} required />
        </div>
        <div id="password">
          <div>Password</div>
          <input type="password" ref={passwordRef} required />
        </div>
        <div id="password-confirm">
          <div>Password Confirmation</div>
          <input type="password" ref={passwordConfirmRef} required />
        </div>
        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>

      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}
