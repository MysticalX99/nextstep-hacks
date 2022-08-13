import './Image.css'

export default function Image({ title, largeImage, smallImage }) {
  return (
    <div className='breaking-barriers-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={largeImage}
          title={title}
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}