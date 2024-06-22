import './Landing.css'
import profileImage from '../assets/img/tahir/Tahir with shadow.png'
import instagramIcon from '../assets/img/logo-instagram.png'; // Update with the path to your Instagram icon
import facebookIcon from '../assets/img/logo-facebook.png'; // Update with the path to your Facebook icon
import linkedinIcon from '../assets/img/logo-linkedin.png'; // Update with the path to your LinkedIn icon

function Landing() {
  return (
    <div className="landing-container pb-0 ml-0">
      <div className="content">
        <h2 className="title">Web-Developer</h2>
        <h1 className="heading">Hey There <span role="img" aria-label="wave">👋</span></h1>
        <h1 className="name">It’s Tahir Alauddin</h1>
        <p className="description">
          Building software for startups that scales with their businesses. Your next Big-Tech company.
        </p>
        <button className="download-btn">Download CV</button>
        <div className="social-icons">
          <img src={instagramIcon} alt="Instagram" className="icon" />
          <img src={facebookIcon} alt="Facebook" className="icon" />
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </div>
      </div>
      <div className="image-container">
        <div className="image-wrapper">
        <img src={profileImage} alt="Tahir Alauddin" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default Landing