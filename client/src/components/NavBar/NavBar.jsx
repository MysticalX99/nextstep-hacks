import React from 'react'
import './NavBar.css'
import MenuLink from './MenuLink/MenuLink'

export default function Navbar() {
  return(
    <div className="NavBar">
      <span className="nav-logo">Test</span>
      <div className="nav-items">
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/chat">Chat</MenuLink>
        <MenuLink to="/learn">Breaking Barriers</MenuLink>
        
      </div>
    </div>
  )
}