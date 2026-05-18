import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

function Auth() {
  // Toggle between Sign In and Sign Up mode
  const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate()

  // Form fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Feedback message
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'
  const [loading, setLoading] = useState(false)

  // Backend URL
  const API_URL = 'http://localhost:3001/api'

  // ========================
  // SIGN UP — fetch to /api/signup
  // ========================
  async function handleSignUp(e) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Send POST request to backend with name, email, password
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })

      const data = await response.json()

      if (data.success) {
        // Success! Show message and switch to sign-in mode
        setMessage(data.message)
        setMessageType('success')
        // Clear form and switch to sign-in after 1.5s
        setTimeout(() => {
          setIsSignUp(false)
          setName('')
          setPassword('')
          setMessage('')
        }, 1500)
      } else {
        // Error (e.g., user already exists)
        setMessage(data.message)
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Server not reachable. Make sure to run: node server/server.js')
      setMessageType('error')
    }

    setLoading(false)
  }

  // ========================
  // SIGN IN — fetch to /api/signin
  // ========================
  async function handleSignIn(e) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Send POST request to backend with email, password
      const response = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (data.success) {
        // Login successful!
        setMessage(data.message)
        setMessageType('success')
        // Navigate to home after 1.5s
        setTimeout(() => {
          navigate('/')
        }, 1500)
      } else {
        // Invalid credentials
        setMessage(data.message)
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Server not reachable. Make sure to run: node server/server.js')
      setMessageType('error')
    }

    setLoading(false)
  }

  return (
    <div className="auth">
      <div className="auth__container">
        {/* Left side — branding */}
        <div className="auth__brand">
          <span className="auth__logo-text">CINTHESIA</span>
          <h2 className="auth__brand-heading">
            Your glow journey<br />starts here ✨
          </h2>
          <p className="auth__brand-text">
            Join 25K+ skincare enthusiasts who trust Cinthesia for
            personalized routines, clean ingredients, and real results.
          </p>
          <div className="auth__brand-features">
            <div className="auth__brand-feature">
              <span>🔬</span>
              <span>Science-backed routines</span>
            </div>
            <div className="auth__brand-feature">
              <span>💜</span>
              <span>Personalized for your skin</span>
            </div>
            <div className="auth__brand-feature">
              <span>🌿</span>
              <span>Clean, curated brands</span>
            </div>
          </div>
        </div>

        {/* Right side — form */}
        <div className="auth__form-wrap">
          <div className="auth__form-header">
            <h1 className="auth__title">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="auth__subtitle">
              {isSignUp
                ? 'Start your personalized skincare journey'
                : 'Sign in to continue your glow-up'}
            </p>
          </div>

          {/* Show success/error messages */}
          {message && (
            <div className={`auth__message auth__message--${messageType}`}>
              {messageType === 'success' ? '✅' : '⚠️'} {message}
            </div>
          )}

          <form
            className="auth__form"
            onSubmit={isSignUp ? handleSignUp : handleSignIn}
          >
            {/* Name field — only shown during Sign Up */}
            {isSignUp && (
              <div className="auth__field">
                <label htmlFor="auth-name" className="auth__label">Full Name</label>
                <input
                  id="auth-name"
                  type="text"
                  placeholder="Enter your name"
                  className="auth__input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Email field */}
            <div className="auth__field">
              <label htmlFor="auth-email" className="auth__label">Email</label>
              <input
                id="auth-email"
                type="email"
                placeholder="you@example.com"
                className="auth__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password field */}
            <div className="auth__field">
              <label htmlFor="auth-password" className="auth__label">Password</label>
              <input
                id="auth-password"
                type="password"
                placeholder="Enter your password"
                className="auth__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-primary auth__submit"
              disabled={loading}
            >
              {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
              {!loading && <span>→</span>}
            </button>
          </form>

          {/* Toggle between Sign In / Sign Up */}
          <div className="auth__toggle">
            <p>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                type="button"
                className="auth__toggle-btn"
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setMessage('')
                  setName('')
                  setEmail('')
                  setPassword('')
                }}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
