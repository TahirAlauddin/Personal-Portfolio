import Portfolio from '../components/Landing/Portfolio.tsx'
import HeroSection from '../components/Landing/HeroSection.tsx'
import Navbar from '../components/Navbar.tsx'
import About from '../components/Landing/About.tsx'
import Services from '../components/Landing/Services.tsx'
import WorkExperience from '../components/Landing/WorkExperience.tsx';
import Testimonial from '../components/Landing/Testimonial.tsx'
import Footer from '../components/Footer.jsx'
import myLogo from "../../public/assets/img/logo-removebg.png";

const navigation = {
  logo: myLogo,
  menuItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
}

function LandingPage() { 

    return (
      <>
        <main>
          <header className="mb-4 sticky top-0 bg-white z-1">
            <Navbar navigation={navigation} />
          </header>
          <article>
            <HeroSection />
            <Services />
            <About />
            <WorkExperience />
            <Portfolio />
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
  