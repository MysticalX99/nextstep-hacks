import './Intro.css'
import help from '../../../assets/help.png'
import sad from '../../../assets/sad.png'

export default function Intro() {
  return (
    <div className="intro">
      <div className="title">
      Test
      </div>
      <div classname = "images">
        <img src={help} alt="" className="help"/>
        <img src={sad} alt="" className="sad"/>
      </div>
      <div className="subheading">
        Your home for emotional support
      </div>
      <div className="buttons">
        <button className="Start Chatting">Start Chatting</button>
      </div>

    </div>
  );
}