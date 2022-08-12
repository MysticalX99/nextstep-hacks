import { useRef, useEffect } from 'react'
import './Animated.css'

const slideOnScroll = (elem, rescroll) => {
  if(!elem) return

  const rect = elem.getBoundingClientRect()
  if(rect.top >= window.scrollY && rect.top <= window.scrollY + window.innerHeight - 50)
    elem.classList.add('slideInPlay')
  else if(rescroll)
    elem.classList.remove('slideInPlay')
}

export default function Animated({ children, rescroll }) {
  const ref = useRef()
  
  useEffect(() => {
    const scrollFn = slideOnScroll.bind(null, ref.current, rescroll)
    scrollFn()
    
    window.addEventListener('scroll', scrollFn)
    return () => window.removeEventListener('scroll', scrollFn)
  }, [ref, rescroll])
  
  return (
    <div ref={ref} className="slideIn">{children}</div>
  )
}