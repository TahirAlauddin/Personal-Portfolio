import fiverLogo from "../../public/assets/img/fiverr.png";
import localLogo from "../../public/assets/img/local.png";
import upworkLogo from "../../public/assets/img/upwork.png";
import "./WorkExperience.css";

function WorkExperience() {
  return (
    <section className="work-experience-section">
      <div className="work-experience-header">
        <h2 className="auto-show">Work Experience</h2>
        <div className="auto-show work-experience-p">
          <p>
            Seasoned web developer with years of hands-on experience in creating
            dynamic and user-friendly websites
          </p>
        </div>
      </div>
      <div className="auto-show work-experience-container">
        <div className="work-experience-box">
          <div className="work-experience-heading">
            <div className="icon local-icon">
              <img src={localLogo} alt="Local Freelancing" />
            </div>
            <h3>
              Local Freelancing
              <br />
              <span>(2020-2021)</span>
            </h3>
          </div>
          <p>
          - Built a Full Stack Web Application for a Lawyer.
          <br />
          - Helped out Bachelor, Master students with their
          Research and Projects.
          <br />
          - Built multiple projects for local outsourcers
          </p>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-title">Python Developer</div>
            <div className="progress-bar-container">
              <div
                style={{ width: "60%" }}
                className="work-experience-progress-bar"
                id="progress-bar"
              ></div>
            </div>
          </div>
        </div>
        <div className="work-experience-box">
          <div className="work-experience-heading">
            <div className="icon">
              <img src={fiverLogo} alt="Fiver Logo" />
            </div>
            <h3>
              Fiverr
              <br />
              <span>(2021 - Present)</span>
            </h3>
          </div>
          <p>
          I have been working for Fiverr for more than two years. During this time frame I experienced and faced a lot of challenges. I learned new techniques and methods to solve business problems via SaaS and Microservice Web Applications. Surely there were some hardships along the way. But overall it was an astonishing experience.
          </p>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-title">Software Development</div>
            <div className="progress-bar-container">
              <div
                style={{ width: "85%" }}
                className="work-experience-progress-bar"
                id="progress-bar"
              ></div>
            </div>
          </div>
        </div>
        <div className="work-experience-box">
          <div className="work-experience-heading">
            <div className="icon">
              <img src={upworkLogo} alt="Upwork Logo" />
            </div>
            <h3>
              Upwork
              <br />
              <span>(2023-Present)</span>
            </h3>
          </div>
          <p>
            The job role revolved around Web Development with a strong focus on
            creating responsive and dynamic websites.
            <br />
            Read More
          </p>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-title">Web Development</div>
            <div className="progress-bar-container">
              <div
                style={{ width: "66%" }}
                className="work-experience-progress-bar"
                id="progress-bar"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
