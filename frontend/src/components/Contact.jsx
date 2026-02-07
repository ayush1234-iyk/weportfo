import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// React Icons
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for contacting me. I will reply soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Message could not be sent. Try again later.",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Try again later.",
      });
    }
  };

  return (
    <section className="contact">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Feel free to reach out through any of these channels
      </motion.p>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* ===== PERSONAL CONTACT CARD ===== */}
        <div className="contact-card personal-card">
          <h3>Contact Information</h3>
          <p><MdEmail className="contact-icon"/> ayushamrit699@gmail.com</p>
          <p><MdPhone className="contact-icon"/> +91 748834719</p>
          <p><MdLocationOn className="contact-icon"/> Madhubani, India</p>

          <h4>Connect with me</h4>
          <p><FaLinkedin className="contact-icon"/> <a href="https://linkedin.com/in/ayush" target="_blank" rel="noreferrer">linkedin.com/in/ayush</a></p>
          <p><FaGithub className="contact-icon"/> <a href="https://github.com/ayush1234-iyk" target="_blank" rel="noreferrer">github.com/ayush1234-iyk</a></p>
        </div>

        {/* ===== SEND MESSAGE CARD ===== */}
        <div className="contact-card message-card">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;




export default Contact;



