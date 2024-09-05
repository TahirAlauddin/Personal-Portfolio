import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./RelatedProjects.css";
import { projects } from "../../utils/data.json";


interface RelatedProjectsProps {
  currentProjectId: number;
}


interface Project {
    id: number,
    title: string
    tags: string[],
    subtitle: string,
    description: string,
    coverImage: string,
    images: string[]
  
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ currentProjectId }) => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/portfolio?id=${projectId}`);
    // Use setTimeout to ensure the navigation has completed before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const relatedProjects = useMemo(() => {
    // Remove the current project from the list
    const otherProjects = projects.filter(p => p.id !== currentProjectId);
    
    // Function to calculate similarity score based on tags
    const calculateSimilarity = (project1: Project, project2: Project) => {
      const tags1 = new Set(project1.tags);
      const tags2 = new Set(project2.tags);
      const intersection = new Set([...tags1].filter(x => tags2.has(x)));
      return intersection.size / Math.min(tags1.size, tags2.size);
    };

    // Find the current project
    const currentProject = projects.find(p => p.id === currentProjectId);

 // Sort projects by similarity to the current project
    const sortedProjects = otherProjects.sort((a, b) => 
      calculateSimilarity(b, currentProject) - calculateSimilarity(a, currentProject)
    );

    // Select top 3 most similar projects, or random if not enough similar ones
    let selected = sortedProjects.slice(0, 3);
    while (selected.length < 3 && otherProjects.length >= 3) {
      const randomProject = otherProjects[Math.floor(Math.random() * otherProjects.length)];
      if (!selected.includes(randomProject)) {
        selected.push(randomProject);
      }
    }
    return selected;
  }, [currentProjectId]);

  return (
    <section id="related-projects" className="related-projects-container">
      <h2 className="related-projects-title">Related Projects</h2>
      <div className="related-projects-grid">
        {relatedProjects.map((project) => (
          <div 
            onClick={() => handleProjectClick(project.id)}
            className="related-project-item" 
            key={project.id}
            style={{ cursor: 'pointer' }}
          >
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