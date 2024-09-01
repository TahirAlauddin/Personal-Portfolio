import React from "react";
import projectCover from "/assets/img/Portfolio/PortfolioCover/MoopBot.webp";
import "./ProjectDescription.css";

const PortfolioDescription: React.FC = ({ project }) => {
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
    "devicon-django-plain colored",
    "devicon-python-plain colored",
  ];

  return (
    <section>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="md:flex items-center my-4 px-3 gap-6">
        <div className="image-section flex-1">
          <img
            src={project?.images?.[0] ?? projectCover}
            alt="Project Screenshot"
            className="project-image"
          />
        </div>
        <div className="text-section flex-1">
          <h2 className="description-title">Project Description</h2>
          <p className="description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatum qui nihil vero necessitatibus assumenda
            accusamus voluptate quisquam illum quia.
          </p>
          <p className="description-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsa
            minima voluptates voluptate, minus a sunt deleniti exercitationem.
            Rerum harum fugiat ab eaque? Id architecto quidem porro iusto
            praesentium deleniti incidunt, nemo, cum assumenda, pariatur facere
            quisquam officiis culpa? Sunt blanditiis earum nam debitis fugiat.
            Sit quis facere unde debitis?
          </p>
        </div>
      </div>
      <div className="slider-section">
        <div
          className="slider"
          data-reverse="true"
          style={
            {
              "--width": "200px",
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
};

export default PortfolioDescription;
