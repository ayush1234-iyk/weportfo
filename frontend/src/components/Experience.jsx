import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ===== Animation Variants ===== */
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section className="experience">

      {/* ================= ACADEMIC PROJECTS ================= */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Academic Projects
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Projects completed during academic learning
      </motion.p>

      <motion.div
        className="experience-container"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Project 1 */}
        <motion.div className="experience-card" variants={cardVariant}>
          <h3>Volleyball Management System</h3>
          <span className="project-type">Full Stack Web Application</span>

          <p>
            A web-based platform to manage volleyball events, teams,
            registrations, and user workflows.
          </p>

          <ul>
            <li>Developed REST APIs using Node.js & Express</li>
            <li>Implemented authentication & authorization</li>
            <li>Integrated MongoDB for data persistence</li>
            <li>Built responsive UI using React</li>
          </ul>

          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div className="experience-card" variants={cardVariant}>
          <h3>Personal Portfolio Website</h3>
          <span className="project-type">Frontend Application</span>

          <p>
            A modern personal portfolio website to showcase projects,
            skills, and experience.
          </p>

          <ul>
            <li>Built using React & React Router</li>
            <li>Implemented global dark / light theme system</li>
            <li>Fully responsive across devices</li>
            <li>Optimized performance & accessibility</li>
          </ul>

          <div className="tags">
            <span>React</span>
            <span>CSS</span>
            <span>Vite</span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div className="experience-card" variants={cardVariant}>
          <h3>Authentication System</h3>
          <span className="project-type">Backend-Focused Project</span>

          <p>
            Secure authentication system using industry-standard
            practices and REST architecture.
          </p>

          <ul>
            <li>JWT-based authentication</li>
            <li>Password hashing using bcrypt</li>
            <li>Protected routes & role handling</li>
            <li>Error handling & validation</li>
          </ul>

          <div className="tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ===== VIEW ALL PROJECTS BUTTON ===== */}
      <motion.div
        className="view-all-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link to="/projects" className="view-all-btn">
          View All Projects →
        </Link>
      </motion.div>

      {/* ================= ACHIEVEMENTS ================= */}
      <motion.h2
        className="section-title section-gap"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Achievements & Responsibilities
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Leadership and extracurricular involvement
      </motion.p>

      <motion.div
        className="experience-container achievements"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="experience-card highlight" variants={cardVariant}>
          <h3>Campus Mantri</h3>
          <span className="project-type">GeeksforGeeks</span>

          <p>
            Selected as Campus Mantri to represent GeeksforGeeks and
            promote coding culture within the college.
          </p>

          <ul>
            <li>Organized GeeksforGeeks bootcamps and workshops</li>
            <li>Coordinated with faculty and student communities</li>
            <li>Encouraged competitive programming participation</li>
            <li>Acted as a liaison between GFG and students</li>
          </ul>

          <div className="tags">
            <span>Leadership</span>
            <span>Event Management</span>
            <span>Communication</span>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Experience;




