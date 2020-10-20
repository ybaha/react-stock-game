import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <h2>Update Profile</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div id="email">
          <div>Email</div>
          <input
            type="email"
            ref={emailRef}
            required
            defaultValue={currentUser.email}
          />
        </div>
        <div id="password">
          <div>Password</div>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Leave blank to keep the same"
          />
        </div>
        <div id="password-confirm">
          <div>Password Confirmation</div>
          <input
            type="password"
            ref={passwordConfirmRef}
            placeholder="Leave blank to keep the same"
          />
        </div>
        <button disabled={loading} type="submit">
          Update
            </button>
      </form>
      <div>
        <Link to="/">Cancel</Link>
      </div>
    </>
  )
}
