import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

/* ===== Animation Variants ===== */
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section className="education">

      {/* ================= TITLE ================= */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Academic background and certifications
      </motion.p>

      {/* ================= EDUCATION ================= */}
      <motion.div
        className="education-container"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* ===== COLLEGE ===== */}
        <motion.div className="education-card highlight" variants={cardVariant}>
          <span className="edu-year">2023 – Present</span>
          <h3>B.Tech in Computer Science & Engineering</h3>

          <p className="edu-institute">
            <strong>College:</strong> Government Engineering College Madhubani
          </p>

          <p className="edu-institute">
            <strong>Affiliated To:</strong> Bihar Engineering University (BEU)
          </p>

          <div className="edu-details">
            <div>
              <h4>Current Year</h4>
              <p>3rd Year</p>
            </div>
            <div>
              <h4>Current CGPA</h4>
              <p>7.18</p>
            </div>
          </div>

          <p className="edu-desc">
            Currently pursuing undergraduate studies with a focus on
            Full Stack Development, Data Structures, and Competitive Programming.
          </p>
        </motion.div>

        {/* ===== CLASS 12 ===== */}
        <motion.div className="education-card" variants={cardVariant}>
          <span className="edu-year">2021 – 2022</span>
          <h3>Senior Secondary (Class XII)</h3>

          <p className="edu-institute">
            <strong>School:</strong> Sarsawati shishu Vidya Maandir
          </p>

          <p className="edu-institute">
            <strong>Board:</strong> Central Board of Secondary Education (CBSE)
          </p>

          <div className="edu-details single">
            <div>
              <h4>Score</h4>
              <p>75%</p>
            </div>
          </div>

          <p className="edu-desc">
            Completed higher secondary education with strong fundamentals
            in Mathematics and Computer Science.
          </p>
        </motion.div>

      </motion.div>

      {/* ================= CERTIFICATIONS ================= */}
      <motion.h2
        className="section-title section-gap"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Industry-recognized certifications and skill validation
      </motion.p>

      <motion.div
        className="certification-container"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div className="certification-card" variants={cardVariant}>
          <h3>Python Essentials – I & II</h3>
          <p className="cert-org">Cisco Networking Academy</p>
          <p className="cert-desc">
            Covered Python fundamentals, control structures, functions,
            data handling, and object-oriented programming concepts.
          </p>
        </motion.div>

        <motion.div className="certification-card" variants={cardVariant}>
          <h3>C# Programming</h3>
          <p className="cert-org">GeeksforGeeks</p>
          <p className="cert-desc">
            Gained hands-on experience with C# syntax, OOP principles,
            and problem-solving techniques.
          </p>
        </motion.div>

        <motion.div className="certification-card" variants={cardVariant}>
          <h3>Linux Certification</h3>
          <p className="cert-org">Indian Institute of Technology, Bombay</p>
          <p className="cert-desc">
            Learned Linux fundamentals, command-line tools,
            file system management, and basic shell operations.
          </p>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Education;


