import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaGithub, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

import profilePic from "../assets/profilei.png";       
import volleyballImg from "../assets/volleyball.png";
import todoImg from "../assets/todo.png";
import k72Img from "../assets/k72.png";
                                
const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      {/* ===== HOME / HERO ===== */}
      <section className="home">
        <motion.div
          className="home-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          {/* Bio Section */}
          <motion.div
            className="home-bio"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Typing Animation for Name */}
            <h1>
              Hello, I'm {" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ display: "inline-block" }}
              >
                {["A","y","u","s","h"," ","A","m","r","i","t"].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{ display: "inline-block", color: "#2563eb" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            <p className="hero-subtitle">
              Computer Science Engineer &amp; Web Developer
            </p>
            <p>
              I'm a passionate B.Tech CSE student who loves coding, web development,
              and creating professional web applications. Currently focused on
              learning React, Node.js, and full-stack development.
            </p>

            <div className="home-buttons">
              <Link to="/contact" className="btn contact-btn">
                Contact Me
              </Link>
              <a href="/resume.pdf" download className="btn resume-btn">
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="profile-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={profilePic} alt="Ayush Amrit" loading="lazy" />
          </motion.div>

        </motion.div>
      </section>

      <div className="section-divider"></div>

      {/* ===== ABOUT SECTION ===== */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p className="hero">
          I am a Computer Science Engineering student with a strong interest in
          full-stack web development. I enjoy building clean, responsive, and
          user-focused applications using modern technologies like React,
          Node.js, and MongoDB.
        </p>

        <Link to="/experience" className="experience-btn">
          View Experience →
        </Link>
      </motion.section>

      <div className="section-divider"></div>

      {/* ===== SKILLS SECTION ===== */}
      <motion.section
        className="skills-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <h2 className="skills-title">Skills</h2>
        <div className="skills-underline"></div>

        <div className="skills-cards">
          {[
            {
              icon: "`</>`",
              title: "Programming Languages",
              tags: ["C++", "Python", "JavaScript", "SQL"],
            },
            {
              icon: "🌐",
              title: "Web Technologies",
              tags: ["Node.js", "Express.js", "React.js", "MongoDB", "Bootstrap"],
            },
            {
              icon: "💻",
              title: "Other Skills",
              tags: ["HTML", "CSS", "English", "Hindi", "Telugu"],
            },
          ].map((skill, i) => (
            <motion.div
              className="skill-card"
              key={i}
              variants={cardVariant}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="section-divider"></div>

      {/* ===== FEATURED PROJECTS ===== */}
      <motion.section
        className="projects-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-underline"></div>

        <div className="projects-grid">
          {[
            {
              img: volleyballImg,
              title: "Inter-Volleyball Registration System",
              type: "Full Stack Web Application",
              description:
                "A complete registration system for inter-college volleyball tournaments with team registration, player details, and admin management.",
              tags: ["React", "Node.js", "Express", "MongoDB"],
              demo: "https://volleyballfrontend.onrender.com/",
              code: "https://github.com/ayush1234-iyk/volleyball.git",
            },
            {
              img: todoImg,
              title: "Todo List Application",
              type: "Frontend Project",
              description:
                "A clean and simple todo list application focused on task management and smooth user experience.",
              tags: ["HTML", "CSS", "JavaScript"],
              demo: "https://track-todo.vercel.app/",
              code: "https://github.com/ayush1234-iyk/TrackTodo.git",
            },
            {
              img: k72Img,
              title: "K72 Website",
              type: "Frontend Project",
              description:
                "A responsive frontend website built with a focus on clean layout, visual consistency, and performance.",
              tags: ["HTML", "CSS", "JavaScript"],
              demo: "https://k72-rl5s.vercel.app/",
              code: "https://github.com/ayush1234-iyk/K72.git",
            },
          ].map((project, i) => (
            <motion.div className="project-card" key={i} variants={cardVariant}>
              <div className="project-image">
                <img src={project.img} alt={project.title} loading="lazy" />
              </div>
              <h3>{project.title}</h3>
              <p className="project-type">{project.type}</p>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
                  <FaPlay style={{ marginRight: "6px" }} /> Demo
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-btn code-btn">
                  <FaGithub style={{ marginRight: "6px" }} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="view-all-projects">
          <Link to="/projects" className="btn view-projects-btn">
            View All Projects →
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default Home;

