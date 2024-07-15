// ServicesSection.js
import "./Services.css";
import desktopAppLogo from "../assets/img/computer.png";
import webAppLogo from "../assets/img/settings.png";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="auto-show">What Services I'm Providing</h2>
      <p className="auto-show">
        Providing customized web development services.
      </p>
      <div className="auto-show services-container">
        <div className="service-box">
          <div className="icon">
            <img src={desktopAppLogo} alt="Desktop App Development" />
            {/* TODO: Replace 'path/to/desktop-icon.png' with the actual path to your icon */}
          </div>
          <h3>
            Desktop App Development
            <br />
            <span>(Native Apps)</span>
          </h3>
          <p>
            Crafting intuitive and efficient desktop applications tailored for
            seamless performance on Windows, macOS, and Linux. Prioritizing user
            experience and functionality to deliver solutions that fit your
            business needs.
          </p>
        </div>
        <div className="service-box">
          <div className="icon">
            <img src={webAppLogo} alt="Web Development" />
            {/* TODO: Replace 'path/to/web-icon.png' with the actual path to your icon */}
          </div>
          <h3>
            Web Development
            <br />
            <span>(Native Apps)</span>
          </h3>
          <p>
            Building modern and responsive websites that provide a compelling
            user experience. Specializing in creating custom websites that are
            not only visually appealing but also fully functional, accessible,
            and SEO-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
