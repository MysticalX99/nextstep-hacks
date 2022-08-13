import './Home.css'
import Intro from './Intro/Intro'
import Animated from '../Animated/Animated'
import HomeSelection from './HomeSelection/HomeSelection'

export default function Home() {
  return (
    <div className="home">
      <Animated>
        <Intro />
      </Animated>
    </div>
  )
}