import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import WorkExperience from './components/WorkExperience';
import Testimonial from './components/Testimonial'
import Slider from './components/Slider.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Navbar />
    <Landing />
    <About />
    <Services />
    <WorkExperience />
    <Slider />
    <Testimonial />
    <Footer/>
    </>
  )
}

export default App
