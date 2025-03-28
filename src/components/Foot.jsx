import React, { useEffect } from "react";
import "../styles/foot.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Foot() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-element");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="footmain fade-element">
      <div className="footer-logo">
        <div className="flogo"></div>
      </div>

      <h1 className="ok fade-element">Have a query?</h1>

      <form
        action="https://formsubmit.co/YOUR_EMAIL_HERE"
        method="POST"
        className="contact-form fade-element"
      >
        <input
          type="text"
          name="name"
          required
          className="input-field"
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          required
          className="input-field"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          required
          className="input-field textarea-field"
          placeholder="Type your message here..."
        ></textarea>

        {/* Hidden field to avoid bot submissions */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://yourwebsite.com/thank-you"
        />

        <button type="submit" className="submit-button">Send</button>
      </form>

      <div className="footer-contact fade-element">
        <p>
          <strong>CONTACT :</strong> Pradeep PR
        </p>
        <p>
          <strong>PHONE :</strong> +91 9495333925
        </p>
      </div>

      <div className="social-icons fade-element">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Foot;
