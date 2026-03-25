import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
    </>
  );
}

export default App;

// 🔹 Navbar
const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
    <div className="container">
       <img className="navbar-brand "  src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8993aba4-a8c2-4541-91ec-03a486490800/public" alt="" />
      <button className="btn btn-dark">Book Now</button>
    </div>
  </nav>
);

// 🔹 Hero
const Hero = () => (
  <div className="vh-100 d-flex align-items-center text-white"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')",
      backgroundSize: "cover",
    }}>
    <div className="container text-center bg-dark bg-opacity-50 p-5 rounded">
      <h1 className="display-4 fw-bold">Premium Grooming Experience</h1>
      <p>Style, comfort, and precision — all in one place</p>
      <button className="btn btn-light mt-3">Book Appointment</button>
    </div>
  </div>
);

// 🔹 Services
const Services = () => (
  <div className="container py-5 text-center">
    <h2 className="mb-4">Our Services</h2>
    <div className="row">
      {["Haircut", "Beard Styling", "Hair Spa", "Grooming"].map((s, i) => (
        <div className="col-md-3 mb-3" key={i}>
          <div className="card p-3 shadow">
            <h5>{s}</h5>
            <p>Premium quality service</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 🔹 About
const About = () => (
  <div className="bg-light py-5 text-center">
    <div className="container">
      <h2>About Us</h2>
      <p className="mx-auto" style={{ maxWidth: "600px" }}>
        We provide a clean, hygienic, and professional grooming experience with expert stylists.
      </p>
    </div>
  </div>
);

// 🔹 Gallery
const Gallery = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4">Gallery</h2>
    <div className="row">
      {[1,2,3,4,5,6].map(i => (
        <div className="col-md-4 mb-3" key={i}>
          <img
            src={`https://source.unsplash.com/300x300/?salon,${i}`}
            className="img-fluid rounded"
          />
        </div>
      ))}
    </div>
  </div>
);

// 🔹 Testimonials
const Testimonials = () => (
  <div className="bg-light py-5 text-center">
    <div className="container">
      <h2 className="mb-4">Testimonials</h2>
      <div className="row">
        {["Amazing service!", "Best salon ever", "Highly recommend"].map((t, i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-3 shadow">
              <p>{t}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 🔹 Booking
const Booking = () => (
  <div className="container py-5 text-center">
    <h2>Book Appointment</h2>
    <button className="btn btn-dark mt-3">Book Now</button>
    <div className="mt-3">
      <a href="https://wa.me/1234567890" className="text-success">
        WhatsApp Us
      </a>
    </div>
  </div>
);

// 🔹 Contact
const Contact = () => (
  <div className="bg-light py-5 text-center">
    <div className="container">
      <h2>Contact</h2>
      <p>123 Main Street, Surat</p>
      <p>+91 1234567890</p>

      <iframe
        className="w-100 mt-3"
        height="250"
        src="https://maps.google.com/maps?q=surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  </div>
);