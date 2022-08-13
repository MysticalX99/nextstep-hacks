import './Title.css'

export default function Title({ title, children }) {
  return(
    <div className='section-title'>
      <h1>{title}</h1>
      <p>
        {children}
      </p>
    </div>
  )
}
