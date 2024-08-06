import "./Landing.css";
// import profileImage from "../../public/assets/img/tahir/Tahir with shadow.png";
import profileImage from "../../public/assets/img/tahir/Tahir with shadow.webp";
import profileImageS from "../../public/assets/img/tahir/Tahir with shadow - 500.webp";
import profileImageM from "../../public/assets/img/tahir/Tahir with shadow - 700.webp";
import facebookIcon from "../../public/assets/img/logo-facebook.png"; // Update with the path to your Facebook icon
import linkedinIcon from "../../public/assets/img/logo-linkedin.png"; // Update with the path to your LinkedIn icon

declare const Calendly: any;

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
          <a href="#" onClick={() => { Calendly.initPopupWidget({ url: 'https://calendly.com/tahiralauddin7/30min' }); return false; }}>
          <button className="contact-btn">Let's Talk on a Call</button>
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
              srcSet={`${profileImageS} 600w, ${profileImageM} 1200w, ${profileImage} 2000w`}
              sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 2000px"
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
