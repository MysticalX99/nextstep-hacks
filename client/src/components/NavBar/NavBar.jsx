import React from 'react'
import './NavBar.css'
import MenuLink from './MenuLink/MenuLink'
import Logo from '../../assets/logo.png'

export default function Navbar() {
  return(
    <div className="NavBar">
      <span className="nav-logo"> <img src={Logo} alt=""/> </span>
      <div className="nav-items">
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/chat">Chat</MenuLink>
        <MenuLink to="/learn">Breaking Barriers</MenuLink>
        
      </div>
    </div>
  )
}