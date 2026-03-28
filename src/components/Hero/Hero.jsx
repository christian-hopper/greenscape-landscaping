import heroImage from "../../assets/images/hero-bg.jpg";
import "./Hero.css";

function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Image */}
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title">Transform Your Outdoor Space</h1>

        <p className="hero__subtitle">
          Professional landscaping services for homes and businesses
        </p>

        <button className="hero__cta" onClick={scrollToContact}>
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}

export default Hero;
