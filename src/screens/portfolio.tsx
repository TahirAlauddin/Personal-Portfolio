import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.jsx'
import HeroSection from '../components/PortfolioDetail/HeroSection'

import PortfolioDescription from '../components/PortfolioDetail/ProjectDescription'
import ProjectShowcase from '../components/PortfolioDetail/ProjectShowCase'
import MeetOurTeam from '../components/PortfolioDetail/MeetOurTeam'
import Newsletter from '../components/PortfolioDetail/NewsLetter'
import RelatedProjects from '../components/PortfolioDetail/RelatedProjects'

function PortfolioDetailPage() { 

    return (
      <>
      <main>
        <header>
          <Navbar />
        </header>
        <article>
          <HeroSection></HeroSection>
          <PortfolioDescription></PortfolioDescription>
          <ProjectShowcase></ProjectShowcase>
          <MeetOurTeam></MeetOurTeam>
          <Newsletter></Newsletter>          
          <RelatedProjects></RelatedProjects>
        </article>
      </main>
      <footer>
      <Footer/>
      </footer>
      </>
    )
  }
  
  export default PortfolioDetailPage
  