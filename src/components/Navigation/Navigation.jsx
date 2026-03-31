import { useState, useEffect } from "react";
import leaf from "../../assets/icons/leaf.svg";
import "./Navigation.css";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navigation ${scrolled ? "navigation--scrolled" : ""}`}>
      <div className="navigation__container">
        <div className="navigation__logo">
          <img src={leaf} alt="Leaf" className="navigation__icon" />
          <span className="navigation__title">GreenScape Landscaping</span>
        </div>

        <div className="navigation__actions">
          <nav className="navigation__links">
            {["home", "services", "projects", "about", "contact"].map(
              (section) => (
                <button
                  key={section}
                  className="navigation__link"
                  onClick={() => handleScrollTo(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ),
            )}
          </nav>
          <button
            className="navigation__cta"
            onClick={() => handleScrollTo("contact")}
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
