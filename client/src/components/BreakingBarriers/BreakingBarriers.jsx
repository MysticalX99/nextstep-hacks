import { useState, useRef } from 'react'
import Image from './Image/Image'
import Popup from '../Popup/Popup'
import Title from '../Title/Title'
import './BreakingBarriers.css'

import AutismLarge from '../../assets/images/autism-large.jpg'
import AutismSmall from '../../assets/images/autism-small.jpg'
import DownSyndromeLarge from '../../assets/images/down-syndrome-large.jpg'
import DownSyndromeSmall from '../../assets/images/down-syndrome-small.jpg'
import DepressionLarge from '../../assets/images/depression-large.jpg'
import DepressionSmall from '../../assets/images/depression-small.jpg'

import RacismLarge from '../../assets/images/racism-large.jpg'
import RacismSmall from '../../assets/images/racism-small.jpg'
import SexismLarge from '../../assets/images/sexism-large.jpg'
import SexismSmall from '../../assets/images/sexism-small.jpg'
import AbleismLarge from '../../assets/images/ableism-large.jpg'
import AbleismSmall from '../../assets/images/ableism-small.jpg'

import ObesityLarge from '../../assets/images/obesity-large.jpg'
import ObesitySmall from '../../assets/images/obesity-small.jpg'
import AddictionLarge from '../../assets/images/addiction-large.jpg'
import AddictionSmall from '../../assets/images/addiction-small.jpg'
import HIVAIDSLarge from '../../assets/images/hiv-aids-large.jpg'
import HIVAIDSSmall from '../../assets/images/hiv-aids-small.jpg'

const imageArray = [
  {
    title: "Autism",
    largeImage: AutismLarge,
    smallImage: AutismSmall
  },
  {
    title: "Down Syndrome",
    largeImage: DownSyndromeLarge,
    smallImage: DownSyndromeSmall
  },
  {
    title: "Depression",
    largeImage: DepressionLarge,
    smallImage: DepressionSmall
  },
  {
    title: "Racism",
    largeImage: RacismLarge,
    smallImage: RacismSmall
  },
  {
    title: "Sexism",
    largeImage: SexismLarge,
    smallImage: SexismSmall
  },
  {
    title: "Ableism",
    largeImage: AbleismLarge,
    smallImage: AbleismSmall
  },
  {
    title: "Obesity",
    largeImage: ObesityLarge,
    smallImage: ObesitySmall
  },
  {
    title: "Addiction",
    largeImage: AddictionLarge,
    smallImage: AddictionSmall
  },
  {
    title: "HIV/AIDS",
    largeImage: HIVAIDSLarge,
    smallImage: HIVAIDSSmall
  }
];

export default function BreakingBarriers() {
  const [focusedImage, focusImage] = useState(null)
  const popup = useRef()

  const openImage = (image) => {
    focusImage(image)
    popup.current.show(true)
  }

  return (
    <div id='breaking-barriers' className='text-center'>
      <Popup ref={popup} outsideClick>
        <img src={focusedImage ?? ''} alt="" width="500" height="375" />
      </Popup>
      <div className='container'>
        <Title title='Breaking Barriers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Morbi tristique senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Integer malesuada nunc vel risus. Volutpat est velit egestas dui id ornare arcu. Aliquet sagittis id consectetur purus ut. Nunc sed velit dignissim sodales ut eu. Quam id leo in vitae turpis massa sed elementum tempus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Quam vulputate dignissim suspendisse in est ante.</Title>
        <div className='row'>
          <div className='breaking-barriers-items'>
            {imageArray
              ? imageArray.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4' onClickCapture={() => openImage(d.largeImage)}>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}