import './Image.css'

export default function Image({ title, largeImage, smallImage }) {
  return(
    <div className='image-item'>
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
            src={`${process.env.PUBLIC_URL}/${smallImage}`}
            className='image-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}