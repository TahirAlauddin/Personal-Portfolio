import "./ProjectShowcase.css";
import React from "react";

interface ProjectItem {
  type: "image" | "video" | "pdf" | "text";
  src: string;
  title: string;
  description: string;
}

const projects: ProjectItem[] = [
  {
    type: "image",
    src: "/assets/img/Portfolio/Recipe/home.webp",
    title: "Project 1",
    description: "A brief description of Project 1.",
  },
  {
    type: "video",
    src: "/assets/img/Portfolio/Loote/Portfolio1.mp4",
    title: "Project 2",
    description: "A brief description of Project 2.",
  },
  {
    type: "pdf",
    src: "/assets/img/Portfolio/Loote/Loote2.pdf",
    title: "Project 3",
    description: "A brief description of Project 3.",
  },
  {
    type: "text",
    src: "",
    title: "Project 4",
    description: "A detailed description of Project 4, focusing on key features and outcomes.",
  },
  // Add more project items here
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="showcase-container">
      <h2 className="showcase-title">Our Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => {
          return (
            <div className="project-item" key={index}>
              {project.type === "image" && (
                <img
                  src={project.src}
                  alt={project.title}
                  className="project-img"
                />
              )}

              {project.type === "video" && (
                <video controls className="project-video">
                  <source src={project.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {project.type === "pdf" && (
                <div className="project-pdf">
                  <iframe
                    src={project.src}
                    className="pdf-frame"
                    title={project.title}
                  />
                  <div className="pdf-actions">
                    <a
                      href={project.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-view color-primary"
                    >
                      View
                    </a>
                    <a
                      href={project.src}
                      download
                      className="color-primary pdf-download"
                    >
                      Download <i className="text-[12px] text-[#ddd]">PDF</i>
                    </a>
                  </div>
                </div>
              )}

              {project.type === "text" && (
                <div className="project-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              )}

              <div className="project-description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectShowcase;
