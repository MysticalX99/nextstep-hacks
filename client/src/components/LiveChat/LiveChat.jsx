import './LiveChat.css'
import io from 'socket.io-client'
import { useEffect, useRef } from 'react'

const socket = io()

export default function Chat() {
  const ready = useRef(false)
  const inputRef = useRef()

  const sendMessage = (e) => {
    e.preventDefault()
    const value = inputRef.current.value.trim()
    if(!value) return
  }

  useEffect(() => {
    socket.on('connect', () => {
      ready.current = true
    })

    return () => {
      socket.off('connect')
    }
  }, [])

  return (
    <div className="live-chat">
      <h1>LIVE CHAT</h1>
      <form onSubmit={sendMessage}>
        <input ref={inputRef} />    
      </form>
    </div>
  )
}