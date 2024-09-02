import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.jsx'
import HeroSection from '../components/PortfolioDetail/HeroSection'

import PortfolioDescription from '../components/PortfolioDetail/ProjectDescription'
import ProjectShowcase from '../components/PortfolioDetail/ProjectShowCase'
import MeetOurTeam from '../components/PortfolioDetail/MeetOurTeam'
import Newsletter from '../components/PortfolioDetail/NewsLetter'
import RelatedProjects from '../components/PortfolioDetail/RelatedProjects'
import { useSearchParams } from "react-router-dom";
import { projects } from "../utils/data.json";

function PortfolioDetailPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const project = projects?.find((x) => x?.id?.toString() === id);

  return (
    <>
      <main>
        <header className="mb-4 sticky top-0 bg-white z-1">
          <Navbar />
        </header>
        <article>
          <HeroSection project={project}></HeroSection>
          <PortfolioDescription project={project}></PortfolioDescription>
          <ProjectShowcase project={project}></ProjectShowcase>
          <MeetOurTeam></MeetOurTeam>
          <RelatedProjects currentProjectId={project.id}></RelatedProjects>
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
  