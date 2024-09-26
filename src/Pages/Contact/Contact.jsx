import React from "react";
import "./Contact.scss";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className="contact__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet
            consectetur architecto atque. Quae quas ipsum porro sit quidem
            consectetur itaque voluptate iure,{" "}
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">example@mail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+200 142 65 521</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="#" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="#" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="#" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Project"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
