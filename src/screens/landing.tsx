import Newslider from '../components/Landing/Newslider.tsx'
import HeroSection from '../components/Landing/HeroSection.tsx'
import Navbar from '../components/Navbar.tsx'
import About from '../components/Landing/About.tsx'
import Services from '../components/Landing/Services.tsx'
import WorkExperience from '../components/Landing/WorkExperience.tsx';
import Testimonial from '../components/Landing/Testimonial.tsx'
import Footer from '../components/Footer.jsx'


function LandingPage() { 

    return (
      <>
        <main>
          <header className="sticky top-0 bg-white z-1">
            <Navbar />
          </header>
          <article>
            <HeroSection />
            <Services />
            <About />
            <WorkExperience />
            <Newslider />
            <Testimonial />
          </article>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
  
  export default LandingPage
  