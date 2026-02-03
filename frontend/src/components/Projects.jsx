import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

// Import images
import volleyballImg from "../assets/volleyball.png";
import todoImg from "../assets/todo.png";
import k72Img from "../assets/k72.png";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section className="projects">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Selected projects demonstrating my skills and experience
      </motion.p>

      <motion.div
        className="projects-container"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* ===== PROJECT 1: Volleyball ===== */}
        <motion.div className="project-card" variants={cardVariant}>
          <div className="project-img">
            <img src={volleyballImg} alt="Volleyball Management System" />
          </div>

          <div className="project-content">
            <h3>Volleyball Management System</h3>
            <p>
              A full stack web application to manage volleyball events,
              teams, registrations, and user workflows with secure authentication.
            </p>
            <div className="project-buttons">
              <a href="https://volleyballfrontend.onrender.com/" target="_blank" rel="noreferrer">Demo</a>
              <a href="https://github.com/ayush1234-iyk/volleyball" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <span className="project-tag">Academic Project</span>
          </div>
        </motion.div>

        {/* ===== PROJECT 2: To-Do App ===== */}
        <motion.div className="project-card" variants={cardVariant}>
          <div className="project-img">
            <img src={todoImg} alt="To-Do App" />
          </div>

          <div className="project-content">
            <h3>To-Do App</h3>
            <p>
              A responsive task management app built with React, allowing
              users to create, update, and delete tasks with local storage support.
            </p>
            <div className="project-buttons">
              <a href="https://track-todo.vercel.app/" target="_blank" rel="noreferrer">Demo</a>
              <a href="https://github.com/ayush1234-iyk/todo" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <span className="project-tag">Academic Project</span>
          </div>
        </motion.div>

        {/* ===== PROJECT 3: K72 ===== */}
        <motion.div className="project-card" variants={cardVariant}>
          <div className="project-img">
            <img src={k72Img} alt="K72 Project" />
          </div>

          <div className="project-content">
            <h3>K72 Project</h3>
            <p>
              A specialized project demonstrating problem-solving,
              algorithms, and efficient full stack development using modern tools.
            </p>
            <div className="project-buttons">
              <a href="https://k72-rl5s.vercel.app/" target="_blank" rel="noreferrer">Demo</a>
              <a href="https://github.com/ayush1234-iyk/k72" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <span className="project-tag achievement">Personal / Academic</span>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Projects;

