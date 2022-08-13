import './Chat.css'
import { useEffect, useRef } from 'react'
import ChatButton from './ChatButton/ChatButton'
import Title from '../Title/Title'
import Popup from '../Popup/Popup'
import searching from '../../assets/loading.gif'

export default function Chat() {
  const ready = useRef(false)
  const states = useRef([])
  const descRef = useRef()
  const popupRef = useRef()
  const errorRef = useRef()

  const getStates = () => (
    states.current.map((button) => button.getState())
  )

  const startChatting = () => {
    const states = getStates()
    const desc = descRef.current.value.trim()

    if(!states.some(state => state)) {
      errorRef.current.show(true)
      return;
    }

    popupRef.current.show(true)
  };

  return (
    <div className="chat">
      <Title title="chat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Morbi tristique senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Integer malesuada nunc vel risus. Volutpat est velit egestas dui id ornare arcu. Aliquet sagittis id consectetur purus ut. Nunc sed velit dignissim sodales ut eu. Quam id leo in vitae turpis massa sed elementum tempus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Quam vulputate dignissim suspendisse in est ante.</Title>

      <div className="chat-buttons">
        {
          Array(10).fill('...').map((content, i) => {
            return <ChatButton key={i} ref={el => states.current[i] = el}>{content}</ChatButton>
          })
        }
      </div>
      <div className="chat-submit">
        <textarea ref={descRef} placeholder="Description (optional)"></textarea>
        <br />
        <button type="button" className="chat-start" onClick={startChatting}>Start Chatting</button>
      </div>
      <Popup ref={popupRef} width="300px" height="300px">
        <div>
          <img src={searching} alt="" width="200" height="200" />
        </div>
        <div>
          <button className="chat-close" type="button" onClick={() => popupRef.current.show(false)}>Cancel</button>
        </div>
      </Popup>
      <Popup ref={errorRef} outsideClick>
        <div style={{ color: 'red', fontSize: '24px' }}>Please select at least one issue.</div>
        <div>
          <button className="chat-close" type="button" onClick={() => errorRef.current.show(false)}>OK</button>
        </div>
      </Popup>
    </div>
  )
}