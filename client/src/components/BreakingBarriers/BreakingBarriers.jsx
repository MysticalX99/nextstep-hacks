import Image from './Image/Image'

export default function BreakingBarriers(props) {
  return (
    <div id='image' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Breaking Barriers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          <div className='image-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={`${process.env.PUBLIC_URL}/${d.smallImage}`} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}