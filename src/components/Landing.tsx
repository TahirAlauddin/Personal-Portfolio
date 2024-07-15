import "./Landing.css";
import profileImage from "../assets/img/tahir/Tahir with shadow.png";
import facebookIcon from "../assets/img/logo-facebook.png"; // Update with the path to your Facebook icon
import linkedinIcon from "../assets/img/logo-linkedin.png"; // Update with the path to your LinkedIn icon

function Landing() {
  return (
    <div className="landing-parent">
      <div className="landing-container pb-0 ml-0">
        <div className="content">
          <h2 className="title">Web-Developer</h2>
          <h1 className="heading text-left">
            Hey There{" "}
            <div className="wave" role="img" aria-label="wave">
              👋
            </div>
          </h1>
          <h1 className="name">It’s Tahir Alauddin</h1>
          <p className="description">
            Building software for startups that scales with their businesses.
            Your next Big-Tech company.
          </p>
          <a href="https://wa.me/923233428060">
            <button className="contact-btn">Get in Touch</button>
          </a>
          <div className="social-icons">
            <a href="">
              <img src={facebookIcon} alt="Facebook" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/tahiralauddin">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <div className="profile-image-bg"></div>
            <img
              src={profileImage}
              alt="Tahir Alauddin"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
