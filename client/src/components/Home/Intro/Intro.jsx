import './Intro.css'
import support from '../../../assets/support.png'

export default function Intro() {
  return (
    <div className="intro">
        <img src={support} alt="" className="support"/>
      <div className="subheading">
        Your new home for mental health help
        <div className="informationalText">
        Having a hard time dealing with your mental health problems, but feel that no one understands where you're coming from?
        </div>
        <div className="sentenceTwo">
        Want to break the barriers between the those who know and don't know about mental health problems by teaching?
        </div>
        <div className="sentenceThree">
        Or do you want to simiply learn about various mental health prolems?
        </div>

        <div className="inline">

          <div className="inlineTitle">Healic</div>

          <div className="sentenceFour">is the answer</div>
        </div>
      </div>
    </div>
  );
}