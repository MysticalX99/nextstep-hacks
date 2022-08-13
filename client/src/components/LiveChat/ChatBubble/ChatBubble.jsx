import './ChatBubble.css'

export default function ChatBubble({ isAuthor, children }) {
  const suffix = isAuthor ? 'chat-bubble-send' : 'chat-bubble-receive'
  const textAlign = isAuthor ? 'left' : 'right'

  return (
    <div style={{ textAlign }}>
      <div className={`chat-bubble ${suffix}`}>{children}</div>
    </div>
  )
}