import React from "react";
import "./contacts.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kyzw133",
      "template_28qp4aa",
      form.current,
      "UuQVV57g1chhHQfOR"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>dellspartal0@gmail.com</h5>
            <a href="mailto:dellspartal0@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Javohirbek Abdujalilov</h5>
            <a href="https://m.me/javohirbek.abdujalilov.7" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+998994070643</h5>
            <a
              href="https://api.whatsapp.com/send?phone+998994070643"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="contact__input"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="contact__textarea"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
