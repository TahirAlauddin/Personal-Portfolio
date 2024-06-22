import fiverLogo from '../assets/img/fiverr.png'
import localLogo from '../assets/img/local.png'
import upworkLogo from '../assets/img/upwork.png'
import './WorkExperience.css'

function WorkExperience() {
  return (

    <section className="work-experience-section">
    <h2>What Services I'm Providing</h2>
    <p>Providing customized web development services.</p>
    <div className="work-experience-container">
      <div className="work-experience-box">
        <div className='work-experience-heading'>
            <div className="icon local-icon">
                <img src={localLogo} alt="Local Freelancing" /> 
            </div>
            <h3>Local Freelancing<br /><span>(2020-2021)</span></h3>
        </div>
        <p>
        Crafting intuitive and efficient desktop applications tailored for seamless performance on Windows, macOS, and Linux. Prioritizing user experience and functionality to deliver solutions that fit your business needs.
        </p>
        <div className="progress-bar-wrapper">
            <div className="progress-bar-title">Python Developer</div>
            <div className="progress-bar-container">
                <div style={{width: '60%'}} className="work-experience-progress-bar" id="progress-bar"></div>
            </div>
        </div>
      </div>
      <div className="work-experience-box">
      <div className='work-experience-heading'>
        <div className="icon">
          <img src={fiverLogo} alt="Fiver Logo" /> 
        </div>
        <h3>Fiverr<br /><span>(2021 - Present)</span></h3>
        </div>
        <p>
          Building modern and responsive websites that provide a compelling user experience. Specializing in creating custom websites that are not only visually appealing but also fully functional, accessible, and SEO-friendly.
        </p>
        <div className="progress-bar-wrapper">
            <div className="progress-bar-title">Software Development</div>
            <div className="progress-bar-container">
                <div style={{width: '85%'}} className="work-experience-progress-bar" id="progress-bar"></div>
            </div>
        </div>

      </div>
      <div className="work-experience-box">
      <div className='work-experience-heading'>
        <div className="icon">
          <img src={upworkLogo} alt="Upwork Logo" /> 
        </div>
        <h3>Upwork<br /><span>(2023-Present)</span></h3>
        </div>
        <p>
        The job role revolved around Web Development with a strong focus on creating responsive and dynamic websites. 
        <br/>
        Read More
        </p>
        <div className="progress-bar-wrapper">
            <div className="progress-bar-title">Web Development</div>
            <div className="progress-bar-container">
                <div style={{width: '66%'}} className="work-experience-progress-bar" id="progress-bar"></div>
            </div>
        </div>

      </div>
    </div>
    
  </section>
)
}

export default WorkExperience