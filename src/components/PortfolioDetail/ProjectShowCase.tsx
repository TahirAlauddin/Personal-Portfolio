import "./ProjectShowcase.css";
import React from "react";

interface ProjectItem {
  type: "image" | "video" | "pdf" | "text";
  src: string;
  title: string;
  description: string;
}

const project: ProjectItem[] = [
  {
    type: "image",
    src: "/assets/img/Portfolio/Recipe/home.webp",
    title: "Page 1",
    description: "A brief description of Project 1.",
  },
  {
    type: "video",
    src: "/assets/img/Portfolio/Loote/Portfolio1.mp4",
    title: "Page 2",
    description: "A brief description of Project 2.",
  },
  {
    type: "pdf",
    src: "/assets/img/Portfolio/Loote/Loote2.pdf",
    title: "Page 3",
    description: "A brief description of Project 3.",
  },
  {
    type: "text",
    src: "",
    title: "Page 4",
    description: "A detailed description of Project 4, focusing on key features and outcomes.",
  },
  // Add more project items here
];
const title = 'title';
const description = 'This is description';

const ProjectShowcase: React.FC = ({project}) => {
  return (
    <section className="showcase-container">
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
