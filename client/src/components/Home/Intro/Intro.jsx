import './Intro.css'
import help from '../../../assets/help.png'
import sad from '../../../assets/sad.png'
import support from '../../../assets/support.png'
import Title from '../../Title/Title'

export default function Intro() {
  return (
    <div className="intro">
      <Title title="Test" />
      <div className="images">
        <img src={help} alt="" className="help"/>
        <img src={support} alt="" className="support"/>
        <img src={sad} alt="" className="sad"/>
      </div>
      <div style={{ clear: 'both' }}></div>
      <div className="subheading">
        Your home for emotional support
      </div>
    </div>
  );
}