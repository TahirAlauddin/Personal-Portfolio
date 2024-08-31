import projectCover from "/assets/img/Portfolio/PortfolioCover/MoopBot.webp";
import "./HeroSection.css";
import React from "react";

const PortfolioDetail: React.FC = () => {
  return (
    <section>
      <div className="md:flex items-center  my-2 flex-row justify-center gap-20">
        <div className="text-center mb-4 flex-1">
          <h1 className="portfolio-title">Web Development Project</h1>
          <p className="portfolio-subtitle">
            Creating Innovative and User-Friendly Websites
          </p>
          <div className="tech-stack">
            <span className="background-primary m-3 rounded-[5px] py-2 text-[16px] text-white px-5">
              Python
            </span>
            <span className="background-primary m-3 rounded-[5px] py-2 text-[16px] text-white px-5">
              Django
            </span>
            <span className="background-primary m-3 rounded-[5px] py-2 text-[16px] text-white px-5">
              React
            </span>
          </div>
        </div>
        <div className="image-wrapper flex-1">
          <img
            src={projectCover}
            alt="Project Screenshot"
            className="project-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;
