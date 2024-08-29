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
          <header className="sticky top-0 bg-white z-1">
            <Navbar />
          </header>
          <article>
            <HeroSection></HeroSection>
            <PortfolioDescription></PortfolioDescription>
            <ProjectShowcase></ProjectShowcase>
            <MeetOurTeam></MeetOurTeam>
            <RelatedProjects></RelatedProjects>
            <Newsletter></Newsletter>
          </article>
        </main>
        <footer className="mt-[170px]">
          <Footer />
        </footer>
      </>
    );
  }
  
  export default PortfolioDetailPage
  