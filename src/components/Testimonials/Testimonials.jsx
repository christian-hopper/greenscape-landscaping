import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      text: "GreenScape transformed our backyard into a beautiful oasis. The team was professional, punctual, and the results exceeded our expectations. Highly recommend!",
    },
    {
      name: "David Chen",
      role: "Property Manager",
      text: "We've been using GreenScape for our commercial property for three years now. Their lawn care service is impeccable and our property always looks pristine.",
    },
    {
      name: "Emily Rodriguez",
      role: "Homeowner",
      text: "From design to installation, the entire process was smooth. They listened to our ideas and created a stunning garden that we enjoy every single day.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        {/* Header */}
        <div className="testimonials__header">
          <h2 className="testimonials__title">What Our Clients Say</h2>
          <p className="testimonials__subtitle">
            Don't just take our word for it
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonials__card">
              {/* Stars */}
              <div className="testimonials__card-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Text */}
              <p className="testimonials__card-text">"{item.text}"</p>

              {/* Name */}
              <h4 className="testimonials__card-name">{item.name}</h4>
              <span className="testimonials__card-role">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
