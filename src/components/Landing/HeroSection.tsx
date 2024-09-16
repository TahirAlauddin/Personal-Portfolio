import "./HeroSection.css";
// import profileImage from "../../public/assets/img/tahir/Tahir with shadow.png";
import profileImage from "/assets/img/tahir/Tahir with shadow.webp";
import profileImageS from "/assets/img/tahir/Tahir with shadow - 500.webp";
import profileImageM from "/assets/img/tahir/Tahir with shadow - 700.webp";
import facebookIcon from "/assets/img/logo-facebook.png"; // Update with the path to your Facebook icon
import linkedinIcon from "/assets/img/logo-linkedin.png"; // Update with the path to your LinkedIn icon

declare const Calendly: any;

function HeroSection() {
  const techLogos = [
    "devicon-django-plain colored",
    "devicon-react-plain colored",
    "devicon-javascript-plain colored",
    "devicon-css3-plain colored",
    "devicon-tailwindcss-plain colored",
    "devicon-typescript-plain colored",
    "devicon-html5-plain colored",
    "devicon-qt-plain colored",
    "devicon-bootstrap-plain colored",
    "devicon-digitalocean-plain colored",
    "devicon-docker-plain colored",
    "devicon-electron-original colored",
    "devicon-nodejs-plain colored",
    "devicon-npm-original-wordmark colored",
    "devicon-numpy-plain colored",
    "devicon-pandas-plain colored",
    "devicon-oauth-plain colored",
    "devicon-mysql-plain colored",
    "devicon-postgresql-plain colored",
    "devicon-rabbitmq-plain colored",
    "devicon-raspberrypi-plain colored",
    "devicon-redis-plain colored",
    "devicon-selenium-plain colored",
    "devicon-slack-plain colored",
    "devicon-sqlite-plain colored",
    "devicon-pytest-plain colored",
    "devicon-pypi-plain colored",
    "devicon-pycharm-plain colored",
    "devicon-vscode-plain colored",
    "devicon-nginx-plain colored",
    "devicon-nextjs-plain colored",
    "devicon-mongodb-plain colored",
    "devicon-jquery-plain colored",
    "devicon-json-plain colored",
    "devicon-github-plain colored",
    "devicon-git-plain colored",
    "devicon-figma-plain colored",
    "devicon-python-plain colored",
  ];
  return (
    <section>
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
      <div className="slider-section">
        <div
          className="slider"
          data-reverse="true"
          style={
            {
              "--width": "130px",
              "--height": "50px",
              "--quantity": 39,
            } as React.CSSProperties
          }
        >
          <div className="list">
            {techLogos.map((logo, index) => (
              <div key={index}>
                <div
                  className="item"
                  style={
                    {
                      "--position": index,
                      "font-size": "25px",
                    } as React.CSSProperties
                  }
                >
                  {logo.startsWith("https") ? (
                    <img
                      style={
                        {
                          "--width": "25px",
                          "--height": "25px",
                          "--quantity": 39,
                        } as React.CSSProperties
                      }
                      src={logo}
                      alt=""
                    />
                  ) : (
                    <i className={logo}></i>
                  )}{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}

export default HeroSection;
