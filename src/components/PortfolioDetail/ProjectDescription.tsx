import projectCover from "/assets/img/Portfolio/PortfolioCover/MoopBot.webp";
import "./ProjectDescription.css";
import { ProjectsInterface } from '../../screens/interfaces'


const PortfolioDescription = ({ project }: { project: ProjectsInterface }) => {
    


  return (
    <section id="description" className="mt-20">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="md:flex my-4 px-3 gap-6">
        <div className="image-section flex-1">
          <img
            src={project?.images?.[0] ?? projectCover}
            alt="Project Screenshot"
            className="project-image"
          />
        </div>
        <div className="text-section flex-1 p-10">
          <h2 className="description-title">Project Description</h2>
          <p className="description-text">{project?.description}</p>
        </div>
      </div>

    </section>
  );
};

export default PortfolioDescription;
