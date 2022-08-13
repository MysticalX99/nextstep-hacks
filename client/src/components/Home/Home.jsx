import './Home.css'
import Intro from './Intro/Intro'
import AboutChat from './AboutChat/AboutChat'
import Animated from '../Animated/Animated'

export default function Home() {
  return (
    <div className="home">
      <Animated>
        <Intro />
        <AboutChat />
      </Animated>
    </div>
  )
}