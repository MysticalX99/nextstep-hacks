import './LiveChat.css'
import { useEffect, useRef, useState } from 'react'
import ChatBubble from './ChatBubble/ChatBubble'
import { useNavigate } from 'react-router-dom'
import issues from '../../assets/issues.json'

export default function Chat({ socket, chatData }) {
  const inputRef = useRef()
  const navigate = useNavigate()
  const [messages, setMessages] = useState(chatData.current?.cache ?? [])
  const [status, setStatus] = useState('')

  useEffect(() => {
    if(!chatData.current) {
      return
    }
    chatData.current.cache = messages

    socket.on('chat msg', (content) => {
      setMessages([...messages, { content, isAuthor: false }])
      window.scrollTo(window.scrollX, document.body.scrollHeight)
    })

    socket.on('chat leave', () => {
      chatData.current = null
      setStatus('Anonymous has disconnected.')
      window.scrollTo(window.scrollX, 0)
    })

    return () => {
      socket.off('chat msg')
      socket.off('chat leave')
    }
  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault()
    const value = inputRef.current.value.trim()
    if(!value) return
    socket.emit('chat msg', value)
    inputRef.current.value = ''
    setMessages([...messages, { content: value, isAuthor: true }])
    window.scrollTo(window.scrollX, document.body.scrollHeight)
  }

  return (
    <div className="live-chat">
      <h1>LIVE CHAT</h1>
      <h2 className="live-chat-status">{status}</h2>
      {
        chatData.current &&
        <div className="live-chat-info">
          <p><b>Description:</b> {chatData.current.desc}</p>
          <p><b>You have the following issues in common:</b> {chatData.current.states.map((v, i) => v && issues[i]).filter(v => v).join(', ')}</p>
        </div>
      }
      <div className="chat-bubbles">
        {
          messages.map((message, i) => {
            return <ChatBubble key={i} isAuthor={message.isAuthor}>{message.content}</ChatBubble>
          })
        }
      </div>
      <div className="live-chat-input">
        <div className='container'>
          <form onSubmit={sendMessage}>
            <div class="input-group">
              <label class="input-filled">
                <input required ref={inputRef} className="live-chat-input" />
                <span class="input-label">Send a message</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/></svg>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}