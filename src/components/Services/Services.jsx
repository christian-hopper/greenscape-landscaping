import leafIcon from "../../assets/icons/leaf.svg";
import sparklesIcon from "../../assets/icons/sparkles.svg";
import scissorsIcon from "../../assets/icons/scissors.svg";
import waterIcon from "../../assets/icons/droplet.svg";
import treeIcon from "../../assets/icons/tree-pine.svg";
import "./Services.css";

const services = [
  {
    title: "Lawn Care",
    description:
      "Professional mowing, fertilization, and maintenance to keep your lawn lush and healthy year-round.",
    icon: leafIcon,
  },
  {
    title: "Garden Design",
    description:
      "Custom garden designs that blend beauty with functionality, tailored to your unique outdoor space.",
    icon: sparklesIcon,
  },
  {
    title: "Tree Trimming",
    description:
      "Expert tree pruning and trimming services to maintain healthy trees and enhance your property's appearance.",
    icon: scissorsIcon,
  },
  {
    title: "Irrigation Systems",
    description:
      "Efficient irrigation installation and maintenance to ensure your landscape stays perfectly watered.",
    icon: waterIcon,
  },
  {
    title: "Yard Cleanup",
    description:
      "Seasonal cleanup services including leaf removal, debris clearing, and yard preparation.",
    icon: treeIcon,
  },
  {
    title: "Mulching & Edging",
    description:
      "Professional mulching and edging to give your landscape a polished, finished appearance.",
    icon: leafIcon,
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        {/* Header */}
        <div className="services__header">
          <h2 className="services__header-title">Our Services</h2>
          <p className="services__header-subtitle">
            Comprehensive landscaping solutions for every need
          </p>
        </div>

        {/* Cards */}
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="services__card">
              <div className="services__icon">
                <img
                  className="services__icon-image"
                  src={service.icon}
                  alt={service.title}
                />
              </div>

              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
