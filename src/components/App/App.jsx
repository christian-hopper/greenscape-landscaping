import Navigation from "../Navigation/Navigation.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import Projects from "../Projects/Projects.jsx";
import About from "../About/About.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="app__content">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
