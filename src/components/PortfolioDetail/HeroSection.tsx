import "./HeroSection.css";
import { ProjectsInterface } from '../../screens/interfaces'


const HeroSection = ({ project }: { project: ProjectsInterface }) => {
  const { title, subtitle, tags, coverImage } = project;
    return (
    <section id="hero-section">
      <div className="md:flex items-center  my-2 flex-row justify-center gap-20">
        <div className="text-center mb-4 flex-1">
          <h1 className="portfolio-title">{title}</h1>
          <p className="portfolio-subtitle">{subtitle}</p>
          <div className="tech-stack">
            {tags?.map((tag: string) => (
              <span
                key={tag}
                className="background-primary m-3 rounded-[5px] py-1 text-[12px] min-w-[60px] text-white px-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="image-wrapper flex-1">
          <img
            src={coverImage}
            alt="Project Screenshot"
            className="project-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
