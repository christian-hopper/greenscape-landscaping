import { useState } from "react";

import phoneIcon from "../../assets/icons/phone.svg";
import mailIcon from "../../assets/icons/mail.svg";
import mapGreenIcon from "../../assets/icons/map-green.svg";
import mapGrayIcon from "../../assets/icons/map-gray.svg";
import "./Contact.css";

const contactInfo = [
  { icon: phoneIcon, title: "Phone", lines: ["(555) 123-4567"] },
  { icon: mailIcon, title: "Email", lines: ["info@greenscapelandscaping.com"] },
  {
    icon: mapGreenIcon,
    title: "Service Area",
    lines: ["Greater Metro Area & Surrounding Counties"],
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks ${formData.name}, we’ll be in touch soon!`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        {/* Header */}
        <div className="contact__header">
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">
            Ready to transform your outdoor space? Contact us today!
          </p>
        </div>

        <div className="contact__grid">
          {/* Left Side */}
          <div className="contact__info">
            {contactInfo.map((item, index) => (
              <div className="contact__item" key={index}>
                <div className="contact__icon-box">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="contact__item-content">
                  <h3 className="contact__item-title">{item.title}</h3>
                  <p className="contact__item-text">
                    {item.lines.map((line, i) => (
                      <span key={i} className="contact__item-text-line">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="contact__map">
              <img src={mapGrayIcon} alt="map" className="contact__map-icon" />
              <p className="contact__map-text">Map Placeholder</p>
            </div>
          </div>

          {/* Right Side (Form) */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label className="contact__form-label">Name</label>
              <input
                className="contact__form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__form-label">Email</label>
              <input
                className="contact__form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__form-label">Message</label>
              <textarea
                className="contact__form-input"
                name="message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
