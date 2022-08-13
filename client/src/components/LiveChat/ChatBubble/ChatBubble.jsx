import './ChatBubble.css'

export default function ChatBubble({ isAuthor, children }) {
  return(
    <div className={isAuthor ? 'chat-bubble-send' : 'chat-bubble-receive'}>{children}</div>
  )
}