import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'About' },
    { path: '/', label: 'Discover' },
    { path: '/', label: 'Skin Quiz' },
    { path: '/routine', label: 'Routine' },
    { path: '/community', label: 'Community' },
    { path: '/reviews', label: 'Blog' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <img src="/images/logo.png" alt="Cinthesia" className="navbar__logo-img" />
          <span className="navbar__tagline">Your glow, your journey.</span>
        </Link>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`navbar__link ${
                location.pathname === link.path ? 'navbar__link--active' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar__actions">
          <button className="navbar__search" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="navbar__signin">Sign In</button>
          <Link to="/" className="btn btn-primary navbar__cta">
            Join Cinthesia <span>→</span>
          </Link>
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
