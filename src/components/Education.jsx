import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import "./Education.css";

const education = [
  { degree: "B.E. Computer Engineering", inst: "MES Wadia College, Pune", year: "2022-Present", cgpa: "7.5" },
  { degree: "HSC (Science)", inst: "Shri Chatrapati Shivaji Mahavidyalaya", year: "2021", cgpa: "81.83%" },
  { degree: "SSC", inst: "Shri Khandeshwar Madhyamik Vidyalaya", year: "2019", cgpa: "75.40%" }
];

function Education() {
  return (
    <section className="education">
      <Card
        title={
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
        }
        content={
          <motion.div
            className="edu-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {education.map((e, index) => (
              <div className="edu-item" key={e.degree}>
                <h3>{e.degree}</h3>
                <p>{e.inst}</p>
                <p>{e.year} | CGPA: {e.cgpa}</p>
              </div>
            ))}
          </motion.div>
        }
      />
    </section>
  );
}

export default Education;
