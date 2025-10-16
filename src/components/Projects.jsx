import React from "react";
import "./Projects.css";
const projects = [
  {
    title: "Student Monitoring and Analysis System",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    desc: [
      "Developed a comprehensive web-based system to monitor and analyze student behavior during online tests and feedback sessions for both college and private coaching classes.",
      "Designed custom data analysis logic to detect irregularities and measure student progress using performance formulas, enabling accurate tracking of engagement and learning outcomes.",
      "Implemented MCQ-based testing features with secure backend integration in Node.js and MySQL, allowing efficient storage and analysis of student responses, test patterns, and feedback consistency."
    ]
  },
  {
    title: "Hotel Booking Website",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap", "Express.js", "Node.js", "MongoDB"],
    desc: [
      "Designed and developed a full-stack hotel management platform featuring room booking, customer registration, and an admin dashboard.",
      "Implemented secure backend functionality using Node.js and MongoDB, while building a responsive frontend with React.js and Bootstrap for an enhanced user experience.",
      "The system allows users not only to book hotels but also to add and manage their own hotel listings, making the platform scalable and versatile."
    ]
  }
];

function Projects() {
  return (
    <section className="projects">
    <h2 className="projects-title" style={{textAlign: 'center'}}>Projects</h2>
      <div className="project-list" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem'}}>
        {projects.map((p, i) => (
          <div
            className="project-list-item"
            key={p.title}
            style={{
              width: '100%',
              maxWidth: '900px',
              // background: 'var(--card-bg)',
              borderRadius: '14px',
              boxShadow: '0 2px 16px rgba(182, 47, 56, 1)',
              padding: '2rem 2rem 1.5rem 2rem',
              // border: '1px solid #eee',
              textAlign: 'center',
              margin: '0 auto'
            }}
          >
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'white', letterSpacing: '1px'}}>{p.title}</h3>
            <div className="project-tech" style={{marginBottom: '1.2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem'}}>
              <span style={{fontWeight: 'bold', color: '#e7ddddff', marginRight: 8}}>Technologies:</span>
              {p.technologies.map((tech, idx) => (
                <span key={tech} style={{background: '#e6f7ff', borderRadius: 4, padding: '4px 12px', fontSize: '1rem', color: '#ca5f32ff', fontWeight: 500}}>{tech}</span>
              ))}
            </div>
            <ul className="project-desc" style={{marginTop: '0.5rem', paddingLeft: 0, textAlign: 'left', display: 'inline-block'}}>
              {p.desc.map((d, idx) => (
                <li key={idx} style={{marginBottom: '0.7rem', color: '#fffcfcff', fontSize: '1.08rem', lineHeight: 1.6}}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
