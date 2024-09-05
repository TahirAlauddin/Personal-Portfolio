import React, { useState } from "react";
import "./NewsLetter.css";

const Newsletter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the newsletter subscription logic here
    console.log("Subscribed with email:", email);
    toggleModal();
  };

  return (
    <div>
      <button onClick={toggleModal} className="newsletter-btn">
        Subscribe to Newsletter
      </button>

      {isOpen && (
        <div className="modal-overlay ">
          <div className="modal-content bg-white">
            <button className="close-btn" onClick={toggleModal}>
              &times;
            </button>
            <h2 className="modal-title">Subscribe to our Newsletter</h2>
            <p className="modal-description">
              Stay updated with our latest projects and insights.
            </p>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
