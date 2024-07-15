// import { openPopup, closePopup } from "../scripts/script";
// import '../components/Embla/Portfolio.css'
import '../components/Embla/css/Portfolio.css'
import '../components/Embla/css/base.css'
import '../components/Embla/css/sandbox.css'
import '../components/Embla/css/embla.css'

import EmblaCarousel from './Embla/EmblaCarousel'

function Portfolio() {
  const items: {[key: string]: string} = {
    'konnected': '/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.PNG',
    'loote': '/assets/img/Portfolio/Loote/email marketing.png',
    'vital-ai': '/assets/img/Portfolio/Vital AI/home.PNG',
    'aspect-gaming': '/assets/img/Portfolio/AspectGaming/home.png',
    'recipito': '/assets/img/Portfolio/Recipe/home.png',
  }
    const OPTIONS = {}


  return (
    <EmblaCarousel slides={items} options={OPTIONS} />
  )
}

export default Portfolio
