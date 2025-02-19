import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const switchToClassic = () => {
    window.location.href = '/classic'
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Ambari Logo" className="navbar-logo" />
        <span>Ambari Web - Latest</span>
      </div>
      <button className="switch-button" onClick={switchToClassic}>
        Switch to Classic View
      </button>
    </nav>
  )
}

export default Navbar 