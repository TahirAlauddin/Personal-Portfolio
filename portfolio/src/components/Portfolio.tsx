// import { openPopup, closePopup } from "../scripts/script";
// import '../components/Embla/Portfolio.css'
import '../components/Embla/css/Portfolio.css'
import '../components/Embla/css/base.css'
import '../components/Embla/css/sandbox.css'
import '../components/Embla/css/embla.css'

import EmblaCarousel from './Embla/EmblaCarousel'

function Portfolio() {
  const items: {[key: string]: string} = {
    'konnected': 'src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.PNG',
    'loote': 'src/assets/img/Portfolio/Loote/email marketing.png',
    'vital-ai': 'src/assets/img/Portfolio/Vital AI/home.PNG',
    'aspect-gaming': 'src/assets/img/Portfolio/AspectGaming/home.png',
    'recipito': 'src/assets/img/Portfolio/Recipe/home.png',
  }
    const OPTIONS = {}


  return (
    <EmblaCarousel slides={items} options={OPTIONS} />

    // <div id='portfolio' className="portfolio">
    //   <h1>My Portfolio</h1>
    //   <p>Showcasing my web development projects and achievements.</p>
    //   <div className="embla" ref={emblaRef}>
    //     <div className="portfolio-items embla__container">
    //         <div className="portfolio-item embla__slide" onClick={() => openPopup('konnected')}>
    //           <img src="src\assets\img\Portfolio\KonnectedReverseRaffle\Pics\invalid-license-key.PNG" alt="Konnected Reverse Raffle" />
    //           <h3>Konnected Reverse Raffle</h3>
    //           <span>2023-2023</span>
    //         </div>
      
    //         <div className="portfolio-item embla__slide" onClick={() => openPopup('loote')}>
    //               <img src="src\assets\img\Portfolio\Loote\email marketing.png" alt="Loote" />
    //               <h3>Loote</h3>
    //               <span>2023-2023</span>
    //           </div>
    //           <div className="portfolio-item embla__slide" onClick={() => openPopup('vital-ai')}>
    //               <img src="src\assets\img\Portfolio\Vital AI\home.PNG" alt="Vital AI" />
    //               <h3>Vital AI</h3>
    //               <span>2023-2023</span>
    //           </div>
    //           <div className="portfolio-item embla__slide" onClick={() => openPopup('aspect-gaming')}>
    //             <img
    //               src="src/assets/img/Portfolio/AspectGaming/home.png"
    //               alt="Project Image"
    //             />
    //             <h3>Aspect Gaming</h3>
    //             <span>2023-2023</span>
    //           </div>
    //           <div className="portfolio-item embla__slide" onClick={() => openPopup('recipito')}>
    //             <img src="src\assets\img/Portfolio/Recipe/home.png" alt="Project Image" />
    //             <h3>Recipito</h3>
    //           <span>2023-2023</span>
    //           </div>
    //     </div>
    //     <div className="embla__controls">
    //     <div className="embla__buttons">
    //       <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
    //       <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    //     </div>

    //     <div className="embla__dots">
    //       {scrollSnaps.map((_, index) => (
    //         <DotButton
    //           key={index}
    //           onClick={() => onDotButtonClick(index)}
    //           className={'embla__dot'.concat(
    //             index === selectedIndex ? ' embla__dot--selected' : ''
    //           )}
    //         />
    //       ))}
    //     </div>
    //   </div>
    //   </div>

    //   <div id="popup" className="popup">
    //     <div className="popup-content">
    //       <span className="close" onClick={() => closePopup()}>&times;</span>
    //       <div id="popup-inner-content"></div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Portfolio
