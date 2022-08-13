import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import Chat from '../Chat/Chat'
import LiveChat from '../LiveChat/LiveChat'
import BreakingBarriers from '../BreakingBarriers/BreakingBarriers'
import './App.css'

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/learn" element={<BreakingBarriers />} />
        <Route path="/live-chat" element={<LiveChat />} />
      </Routes>
    </div>
  )
}