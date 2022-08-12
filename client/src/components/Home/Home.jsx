import './Home.css'
import data from '../../assets/data.json'
import Intro from './Intro/Intro'
import Animated from '../Animated/Animated'

export default function Home() {
  return (
    <div className="home">
      <Animated>
        <Intro data={data} />
      </Animated>
    </div>
  )
}