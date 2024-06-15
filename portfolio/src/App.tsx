import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
// import Contact from './Contact';


function App() {

  return (
    <>
    <Navbar />
    <Landing />
    <About />
    <Services />
    <WorkExperience />
    <Portfolio />
    <Testimonial />
    </>
  )
}

export default App
