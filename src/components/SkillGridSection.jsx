import React from "react";
import { motion } from "framer-motion";
import "./SkillGridSection.css";

const skills = [
//   {
//     icon: (
//       <svg width="40" height="40" fill="none" stroke="#00bfff" strokeWidth="2" viewBox="0 0 24 24"><text x="12" y="20" textAnchor="middle" fontSize="16" fill="#00bfff">75.40</text><circle cx="12" cy="12" r="10"/></svg>
//     ),
//     title: "Skill Score",
//     desc: "Overall proficiency score based on self-assessment and experience.",
//   },
  {
    icon: (
      // Code/terminal icon for programming languages
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#00bfff" strokeWidth="2"/><path d="M8 13l2-2-2-2" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 17h4" stroke="#00bfff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: "Programming Languages",
    desc: "C++, JavaScript",
  },
  {
    icon: (
      // Globe icon for web development
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#00bfff" strokeWidth="2"/><path d="M2 12h20" stroke="#00bfff" strokeWidth="2"/><path d="M12 2c2.5 3.5 2.5 14.5 0 20" stroke="#00bfff" strokeWidth="2"/></svg>
    ),
    title: "Web Development",
    desc: "HTML, CSS, Tailwind CSS, React.js, Node.js, Express.js",
  },
  {
    icon: (
      // Puzzle icon for core competencies
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#00bfff" strokeWidth="2"/><circle cx="8" cy="8" r="2" fill="#00bfff"/><circle cx="16" cy="16" r="2" fill="#00bfff"/></svg>
    ),
    title: "Core Competencies",
    desc: "Data Structures & Algorithms, Problem Solving",
  },
  {
    icon: (
      // Git branch icon for version control
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="7" cy="7" r="3" stroke="#00bfff" strokeWidth="2"/><circle cx="17" cy="17" r="3" stroke="#00bfff" strokeWidth="2"/><path d="M7 10v4a4 4 0 0 0 4 4h3" stroke="#00bfff" strokeWidth="2"/></svg>
    ),
    title: "Version Control & Collaboration",
    desc: "Git, GitHub",
  },
  {
    icon: (
      // VS Code logo (stylized)
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#00bfff" strokeWidth="2"/><path d="M8 8l8 8M16 8l-8 8" stroke="#00bfff" strokeWidth="2"/></svg>
    ),
    title: "Tools & IDEs",
    desc: "VS Code",
  },
  {
    icon: (
      // People/team icon for soft skills
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#00bfff" strokeWidth="2"/><path d="M4 20v-2a8 8 0 0 1 16 0v2" stroke="#00bfff" strokeWidth="2"/></svg>
    ),
    title: "Soft Skills",
    desc: "Problem Solving, Team Collaboration, Adaptability",
  },
];

function SkillGridSection() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 }
    })
  };

  return (
    <section className="skill-grid-section">
      <motion.h2
        className="skill-grid-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        MY SKILLS
      </motion.h2>
      <motion.p
        className="skill-grid-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
      </motion.p>
      <div className="skill-grid">
        {skills.map((skill, i) => (
          <motion.div
            className="skill-card"
            key={skill.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 8px 32px rgba(228, 40, 68, 0.77)",
              backgroundColor: "#522c4eff",
              color: "rgba(5, 33, 27, 1)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="skill-icon"
              whileHover={{ rotate: 10, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {skill.icon}
            </motion.div>
            <div className="skill-card-title">{skill.title}</div>
            <div className="skill-card-desc">{skill.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillGridSection;
