import { useState, useRef } from 'react'

import Image from './Image/Image'
import Title from '../Title/Title'
import Popup from '../Popup/Popup'
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

import PTSDLarge from '../../assets/images/ptsd-large.jpg'
import PTSDSmall from '../../assets/images/ptsd-small.jpg'
import AgeismLarge from '../../assets/images/ageism-large.jpg'
import AgeismSmall from '../../assets/images/ageism-small.jpg'
import STDLarge from '../../assets/images/stds-large.jpg'
import STDSmall from '../../assets/images/stds-small.jpg'

const imageArray = [
  {
    title: "Autism",
    largeImage: AutismLarge,
    smallImage: AutismSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "Down Syndrome",
    largeImage: DownSyndromeLarge,
    smallImage: DownSyndromeSmall,
    link1: "https://www.ndss.org/about",
    link2: "https://twitter.com/PositiveaboutDS",
    link3: "https://give.ndss.org/give/59045/#!/donation/checkout"
  },
  {
    title: "Depression",
    largeImage: DepressionLarge,
    smallImage: DepressionSmall,
    link1: "https://www.nimh.nih.gov/health/topics/depression",
    link2: "https://twitter.com/FamilyAware",
    link3: "https://donate.adaa.org/give/322300#!/donation/checkout"
  },
  {
    title: "Racism",
    largeImage: RacismLarge,
    smallImage: RacismSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "Sexism",
    largeImage: SexismLarge,
    smallImage: SexismSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "Ableism",
    largeImage: AbleismLarge,
    smallImage: AbleismSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "Obesity",
    largeImage: ObesityLarge,
    smallImage: ObesitySmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "Addiction",
    largeImage: AddictionLarge,
    smallImage: AddictionSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "HIV/AIDS",
    largeImage: HIVAIDSLarge,
    smallImage: HIVAIDSSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "PTSD",
    largeImage: PTSDLarge,
    smallImage: PTSDSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "Ageism",
    largeImage: AgeismLarge,
    smallImage: AgeismSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  },
  {
    title: "STDs",
    largeImage: STDLarge,
    smallImage: STDSmall,
    link1: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    link2: "https://twitter.com/AutismCanada",
    link3: "https://www.autismspeaks.ca/donate/"
  }
];

export default function BreakingBarriers() {
  const [focusedImage, focusImage] = useState(null)
  const popup = useRef()

  const openImage = (image, link1, link2, link3) => {
    focusImage({ image, link1, link2, link3 })
    popup.current.show(true)
  }

  return (
    <div id='breaking-barriers' className='text-center'>
      <Popup ref={popup} outsideClick>
        <img className='blurred-image' src={focusedImage?.image ?? ''} alt="" width="500" height="375" />
        <div className='breaking-barriers-buttons'>
          <a href={focusedImage?.link1} target='_blank' rel="noreferrer" className='breaking-barriers-button waves-effect waves-light btn-large'>Learn More</a>
          <a href={focusedImage?.link2} target='_blank' rel="noreferrer" className='breaking-barriers-button waves-effect waves-light btn-large'>Social Media</a>
          <a href={focusedImage?.link3} target='_blank' rel="noreferrer" className='breaking-barriers-button-bottom waves-effect waves-light btn-large'>Donate to Help</a>
        </div>
      </Popup>
      <div className='container'>
        <Title title='Breaking Barriers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Morbi tristique senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Integer malesuada nunc vel risus. Volutpat est velit egestas dui id ornare arcu. Aliquet sagittis id consectetur purus ut. Nunc sed velit dignissim sodales ut eu. Quam id leo in vitae turpis massa sed elementum tempus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Quam vulputate dignissim suspendisse in est ante.</Title>
        <div className='row'>
          <div className='breaking-barriers-items'>
            {imageArray
              ? imageArray.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4' onClickCapture={() => openImage(d.largeImage, d.link1, d.link2, d.link3)}>
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