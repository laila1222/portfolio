import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="contact u-center-middle u-text-center">
        <h2 className="secondary-heading contact__heading u-text-center u-margin-bottom-medium">
          Let's get in touch 
        </h2>
        <p className="contact__text ">
          Write me an {" "}
          <a href="#" className="contact__link">
            email
          </a>
        </p>
        <p className="contact__text ">
          Find me on {" "}
          <a href="#" className="contact__link">
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
