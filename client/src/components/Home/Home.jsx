import './Home.css'
import Intro from './Intro/Intro'
import Animated from '../Animated/Animated'

export default function Home() {
  return (
    <div className="home">
      <Animated>
        <Intro />
      </Animated>
    </div>
  )
}