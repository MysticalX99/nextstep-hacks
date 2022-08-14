import './Home.css'
import Intro from './Intro/Intro'
import AboutChat from './AboutChat/AboutChat'
import Animated from '../Animated/Animated'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import Title from '../Title/Title'
import particleOptions from '../../assets/particles.json'

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    
  }, []);

  return (
    <div className="home">
      <Animated>
        <div style={{ padding: 50 }}>
          <h1>Your new home for mental health help</h1>
          <p>Having a hard time dealing with your mental health problems, but feel that no one understands where you're coming from?</p>
        </div>
      </Animated>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleOptions}
        />
    </div>
  )
}