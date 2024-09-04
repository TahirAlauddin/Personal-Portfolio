// import { openPopup, closePopup } from "../scripts/script";
// import '../components/Embla/Portfolio.css'
import '../components/Embla/css/Portfolio.css'
import '../components/Embla/css/base.css'
import '../components/Embla/css/sandbox.css'
import '../components/Embla/css/embla.css'

import EmblaCarousel from '../Embla/EmblaCarousel'

function Portfolio() {
  const items: {[key: string]: string} = {
    'konnected': '/assets/img/Portfolio/PortfolioCover/KonnectedReverseRaffle.png',
    'loote': '/assets/img/Portfolio/PortfolioCover/LooteEmailMarketing.png',
    'vital-ai': '/assets/img/Portfolio/PortfolioCover/.png',
    'aspect-gaming': '/assets/img/Portfolio/PortfolioCover/.png',
    'recipito': '/assets/img/Portfolio/PortfolioCover/RecipeMermiton.png',
    'starc assistant': '/assets/img/Portfolio/PortfolioCover/StarcAssistant.png',
    'moop bot': '/assets/img/Portfolio/PortfolioCover/MoopBot.png',
    'jewel box': '/assets/img/Portfolio/PortfolioCover/JewelBox.png',
    'instagnite': '/assets/img/Portfolio/PortfolioCover/Instagnite.png',
    'all books quotes': '/assets/img/Portfolio/PortfolioCover/AllBooksQuotes.png',
  }
    const OPTIONS = {}


  return (
    <EmblaCarousel slides={items} options={OPTIONS} />
  )
}

export default Portfolio
