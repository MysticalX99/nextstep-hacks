import './AboutChat.css'
import hand from '../../../assets/hand.png'

export default function AboutChat() {
    return(
    <div className="AboutChat">
    <img src={hand} alt="" className="hand"/>
    <div className="title">Mental Health Support Like Never Before</div>        
    <div className="one">1<div/>
    
    <div className="reasonOne">Healic pairs up users facing similar mental health problems, to chat, support and help each other. After all, they are both in similar circumstances and understand each other best</div>
    </div>
    </div>
    )
}