import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import WorkExperience from './components/WorkExperience';
import Testimonial from './components/Testimonial'
import Footer2 from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newslider from './components/Newslider.tsx'




function App() { 

  return (
    <>
    <Navbar />
    <Landing />
    <About />
    <Services />
    <WorkExperience />
    <Newslider/>
    <Testimonial />
    <Footer2/>
    </>
  )
}

export default App
