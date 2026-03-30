import "./About.css";
import aboutImage from "../../assets/images/landscape-about.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__grid">
          {/* Left Content */}
          <div className="about__content">
            <h2 className="about__title">About GreenScape Landscaping</h2>

            <p className="about__text">
              With over 15 years of experience, GreenScape Landscaping has been
              transforming outdoor spaces across the region. Our team of
              certified professionals is dedicated to creating beautiful,
              sustainable landscapes that enhance your property's value and
              appeal.
            </p>

            <p className="about__text">
              We pride ourselves on our attention to detail, commitment to
              quality, and personalized service. Every project, whether big or
              small, receives the same level of care and expertise.
            </p>

            {/* Stats */}
            <div className="about__stats">
              <div>
                <h3 className="about__stats-number">15+</h3>
                <p className="about__stats-text">Years Experience</p>
              </div>

              <div>
                <h3 className="about__stats-number">500+</h3>
                <p className="about__stats-text">Projects Completed</p>
              </div>

              <div>
                <h3 className="about__stats-number">100%</h3>
                <p className="about__stats-text">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="about__image">
            <img
              className="about__image-img"
              src={aboutImage}
              alt="Team working outdoors"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
