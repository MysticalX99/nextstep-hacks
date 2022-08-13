import Image from './Image/Image'
import './BreakingBarriers.css'

import AutismLarge from '../../assets/images/autism-large.jpg'
import AutismSmall from '../../assets/images/autism-small.jpg'
import DownSyndromeLarge from '../../assets/images/down-syndrome-large.jpg'
import DownSyndromeSmall from '../../assets/images/down-syndrome-small.jpg'
import SchizophreniaLarge from '../../assets/images/schizophrenia-large.jpg'
import SchizophreniaSmall from '../../assets/images/schizophrenia-small.jpg'
import BipolarDisorderLarge from '../../assets/images/bipolar-disorder-large.jpg'
import BipolarDisorderSmall from '../../assets/images/bipolar-disorder-small.jpg'
import DepressionLarge from '../../assets/images/depression-large.jpg'
import DepressionSmall from '../../assets/images/depression-small.jpg'
import DissociationLarge from '../../assets/images/dissociation-large.jpg'
import DissociationSmall from '../../assets/images/dissociation-small.jpg'
import OCDLarge from '../../assets/images/ocd-large.jpg'
import OCDSmall from '../../assets/images/ocd-small.jpg'
import PTSDLarge from '../../assets/images/ptsd-large.jpg'
import PTSDSmall from '../../assets/images/ptsd-small.jpg'
import PsychosisLarge from '../../assets/images/psychosis-large.jpg'
import PsychosisSmall from '../../assets/images/psychosis-small.jpg'

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
    title: "Schizophrenia",
    largeImage: SchizophreniaLarge,
    smallImage: SchizophreniaSmall
  },
  {
    title: "Bipolar Disorder",
    largeImage: BipolarDisorderLarge,
    smallImage: BipolarDisorderSmall
  },
  {
    title: "Depression",
    largeImage: DepressionLarge,
    smallImage: DepressionSmall
  },
  {
    title: "Dissociation",
    largeImage: DissociationLarge,
    smallImage: DissociationSmall
  },
  {
    title: "OCD",
    largeImage: OCDLarge,
    smallImage: OCDSmall
  },
  {
    title: "PTSD",
    largeImage: PTSDLarge,
    smallImage: PTSDSmall
  },
  {
    title: "Psychosis",
    largeImage: PsychosisLarge,
    smallImage: PsychosisSmall
  }
];

export default function BreakingBarriers() {
  return (
    <div id='breaking-barriers' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          <div className='breaking-barriers-items'>
            {imageArray
              ? imageArray.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
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