import "./ProjectShowcase.css";


import { ProjectsInterface  } from '../../screens/interfaces'



const ProjectShowcase = ({ project }: { project: ProjectsInterface }) => {
  return (
    <section id="project-showcase" className="showcase-container">
      <h2 className="showcase-title">Project Pages</h2>
      <div className="project-grid">
  {project.images.map((page, index) => {
    return (
      <div className="project-item" key={index}>
        {page.endsWith(".webp") && (
          <img
            src={page}
            alt={project.title}
            className="project-img"
          />
        )}

        {page.endsWith(".mp4") && (
          <video controls className="project-video">
            <source src={page} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

       

{page.endsWith(".pdf") && (
          <div className="project-pdf">
            <iframe
              src={page}
              className="pdf-frame"
              title={project.title}
            />
            <div className="pdf-actions">
              <a href={page}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-view color-primary"
              >
                View
              </a>
              <a
                href={page}
                download
                className="color-primary pdf-download"
              >
                Download <i className="text-[12px] text-[#ddd]">PDF</i>
              </a>
            </div>
          </div>
        )}

        <div className="project-description">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      </div>
    );
  })}
</div>
    </section>
  );
};

export default ProjectShowcase;
