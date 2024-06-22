import './About.css';
import aboutImage from '../assets/img/about.jpg';

const About = () => {
  return (
    <div id='about' className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        Passionate web developer dedicated to creating seamless and innovative web experiences.
      </p>
      <div className="about-content">
        <div className="about-text">
          <h3 className="about-heading Lexend-bold\">
            Developing With a Passion While Exploring The World.
          </h3>
          <p className="about-description">
            Passionate about web development and exploring the world, I merge my love for coding with my adventures.
            Each line of code I write tells a story inspired by my travels, creating websites that reflect both my
            technical skills and my global experiences. Join me on this journey as I bring the wonders of the world
            into the digital realm, one project at a time.
          </p>
          <button className="contact-btn">Contact Me</button>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>
      </div>
    </div>
  );
}

export default About;