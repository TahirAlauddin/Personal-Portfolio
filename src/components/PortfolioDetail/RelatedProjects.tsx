import React from "react";
import "./RelatedProjects.css";

const relatedProjects = [
  {
    coverImage: "/assets/img/Portfolio/PortfolioCover/MoopBot.webp",
    title: "Project Alpha",
    subtitle: "A Revolutionary Web App",
  },
  {
    coverImage: "/assets/img/Portfolio/PortfolioCover/MoopBot.webp",
    title: "Project Beta",
    subtitle: "Innovative E-commerce Platform",
  },
  {
    coverImage: "/assets/img/Portfolio/PortfolioCover/MoopBot.webp",
    title: "Project Gamma",
    subtitle: "AI-Powered Tool",
  },
];

const RelatedProjects: React.FC = () => {
  return (
    <section className="related-projects-container">
      <h2 className="related-projects-title">Related Projects</h2>
      <div className="related-projects-grid">
        {relatedProjects.map((project, index) => (
          <div className="related-project-item" key={index}>
            <img
              src={project.coverImage}
              alt={project.title}
              className="related-project-image"
            />
            <h3 className="related-project-title">{project.title}</h3>
            <p className="related-project-subtitle">{project.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
