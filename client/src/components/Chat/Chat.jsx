import './Chat.css'
import io from 'socket.io-client'
import { useEffect, useRef } from 'react'

const socket = io()

export default function Chat() {
  const ready = useRef(false)

  useEffect(() => {
    socket.on('connect', () => {
      ready.current = true
    });

    return () => {
      socket.off('connect')
    };
  }, []);

  return (
    <div className="chat">
      <h1>CHAT</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Morbi tristique senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Integer malesuada nunc vel risus. Volutpat est velit egestas dui id ornare arcu. Aliquet sagittis id consectetur purus ut. Nunc sed velit dignissim sodales ut eu. Quam id leo in vitae turpis massa sed elementum tempus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Quam vulputate dignissim suspendisse in est ante.</p>
      <div className="chat-buttons">
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
        <button>...</button>
      </div>
    </div>
  )
}