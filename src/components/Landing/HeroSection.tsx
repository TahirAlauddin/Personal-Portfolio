import "./HeroSection.css";
// import profileImage from "../../public/assets/img/tahir/Tahir with shadow.png";
import profileImage from "/assets/img/tahir/Tahir with shadow.webp";
import profileImageS from "/assets/img/tahir/Tahir with shadow - 500.webp";
import profileImageM from "/assets/img/tahir/Tahir with shadow - 700.webp";
import facebookIcon from "/assets/img/logo-facebook.png"; // Update with the path to your Facebook icon
import linkedinIcon from "/assets/img/logo-linkedin.png"; // Update with the path to your LinkedIn icon

declare const Calendly: any;

function HeroSection() {
  return (
    <div className="landing-parent">
      <div className="landing-container gap-10 pb-0 ml-0">
        <div className="content flex-1">
          <h1 className="heading text-3xl m-0 text-left">
            Hey There{" "}
            <div className="wave" role="img" aria-label="wave">
              👋
            </div>
            <span className="text-3xl">It’s </span>
          </h1>
          <h1 className="name">Tahir Alauddin</h1>
          <h2 className="title">Web-Developer</h2>
          <p className="description">
            Building software for startups that scales with their businesses.
            Your next Big-Tech company.
          </p>
          <a
            href="#"
            onClick={() => {
              Calendly.initPopupWidget({
                url: "https://calendly.com/tahiralauddin7/30min",
              });
              return false;
            }}
          >
            <button className="contact-btn">Book a Call</button>
          </a>
          <div className="social-icons">
            <a href="https://facebook.com/techhoseki">
              <img src={facebookIcon} alt="Facebook" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/tahiralauddin">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div>
        <div className="bg-white image-container flex-1">
          <div className="bg-white image-wrapper">
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

export default HeroSection;
