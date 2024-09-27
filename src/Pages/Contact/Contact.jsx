import React from "react";
import "./Contact.scss";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaLinkedinIn,
  FaPinterestP
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import Swal from 'sweetalert2'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe9bd848-014d-43c7-9d96-6d5d4eff583a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      event.target.reset();
    } else {
      // console.log("Error", data);
      setResult(data.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Contact me today!</h3>
          <p className="contact__description">
          Looking for web development, support, or have questions? Reach out to me for fast, reliable assistance. I’m here to help with your projects and inquiries. Let's connect!,{" "}
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">mdaziz227500@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+880 140 944 7002</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/ruok247/" target="_blank" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://x.com/AbdulAziz124890" target="_blank" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/mdabdulaziz1/" target="_blank" className="contact__social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://www.pinterest.com/aziz_1265/" target="_blank" className="contact__social-link">
              <FaPinterestP />
            </a>
          </div>
        </div>

        <form action="" className="contact__form" onSubmit={onSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                required
                name="email"
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                required
                name="your project"
                type="text"
                placeholder="Your Project"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              required
              name="your message"
              id=""
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
