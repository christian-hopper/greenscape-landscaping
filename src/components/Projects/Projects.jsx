import "./Projects.css";

// Import images
import lushGarden from "../../assets/images/lush-garden.jpg";
import flowerGarden from "../../assets/images/flower-garden.jpg";
import pathway from "../../assets/images/pathway.jpg";
import outdoorPatio from "../../assets/images/outdoor-patio.jpg";

function Projects() {
  const projects = [
    {
      image: lushGarden,
      title: "Lush Garden Transformation",
    },
    {
      image: flowerGarden,
      title: "Flower Garden Design",
    },
    {
      image: pathway,
      title: "Pathway & Landscaping",
    },
    {
      image: outdoorPatio,
      title: "Outdoor Living Space",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        {/* Header */}
        <div className="projects__header">
          <h2 className="projects__header-title">Our Work</h2>
          <p className="projects__header-subtitle">
            See the transformations we've created for our clients
          </p>
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="projects__card">
              <img
                className="projects__card-image"
                src={project.image}
                alt={project.title}
              />

              <div className="projects__overlay">
                <p className="projects__overlay-text">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
