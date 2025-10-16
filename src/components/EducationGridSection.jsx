import React from "react";
import { motion } from "framer-motion";
import "./EducationGridSection.css";

const education = [
  {
    icon: (
      // Graduation cap icon
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M2 7l10 5 10-5-10-5-10 5z" stroke="#00bfff" strokeWidth="2"/><path d="M12 12v7" stroke="#00bfff" strokeWidth="2"/><path d="M6 10v4a6 6 0 0 0 12 0v-4" stroke="#00bfff" strokeWidth="2"/></svg>
    ),
    title: "2026 Bachelor’s Degree",
    desc: "Modern Education Society’s Wadia College of Engineering, Pune\nCGPA: 7.5",
  },
  {
    icon: (
      // Book icon
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#00bfff" strokeWidth="2"/><path d="M8 4v16" stroke="#00bfff" strokeWidth="2"/></svg>
    ),
    title: "2021 Class 12th",
    desc: "Shri Chatrapati Shivaji Mahavidyalaya, Shrigonda\n81.83%",
  },
  {
    icon: (
      // School icon
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="10" rx="2" stroke="#00bfff" strokeWidth="2"/><path d="M12 2v6" stroke="#00bfff" strokeWidth="2"/></svg>
    ),
    title: "2019 Class 10th",
    desc: "Shri Khandeshwar Madhyamik Vidyalaya, Yelpane\n75.40%",
  },
];

function EducationGridSection() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.6 }
    })
  };

  return (
    <section className="education-grid-section">
      <motion.h2
        className="education-grid-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        EDUCATION
      </motion.h2>
      <motion.p
        className="education-grid-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My academic journey and achievements
      </motion.p>
      <div className="education-grid">
        {education.map((edu, i) => (
          <motion.div
            className="education-card"
            key={edu.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 8px 32px rgba(169, 95, 95, 0.75)",
              backgroundColor: "#522c4eff",
              color: "#213547"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="education-icon"
              whileHover={{ rotate: 10, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {edu.icon}
            </motion.div>
            <div className="education-card-title">{edu.title}</div>
            <div className="education-card-desc">
              {edu.desc.split('\n').map((line, idx) => (
                <span key={idx} style={idx > 0 ? { display: 'block', marginTop: 4, fontWeight: 600,color:'blue' } : {}}>{line}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default EducationGridSection;
