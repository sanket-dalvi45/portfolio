
function Experience() {
  return (
    <section className="experience" style={{marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh'}}>
      <h2 className="experience-title" style={{textAlign: 'center', color:'#111' , fontWeight: 700, fontSize: '2rem', marginBottom: '2rem', letterSpacing: '1px'}}>Work Experience</h2>
      <div className="experience-list" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem'}}>
        <div
          className="experience-list-item"
          style={{
            // width: '100vw',
            background: 'linear-gradient(135deg, #611f4a, #ced3e7)',
            borderRadius: '14px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            padding: '2rem 2rem 1.5rem 2rem',
            // border: '1px solid #eee',
            textAlign: 'center',
            margin: 0
          }}
        >
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#0077b6', letterSpacing: '1px', textAlign: 'center'}}>Backend Developer – Internship (College Group Project)</h3>
          <div className="experience-details" style={{marginBottom: '1.2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem'}}>
            <span style={{fontWeight: 'bold', color: '#333', marginRight: 8}}>Duration:</span>
            <span style={{background: '#e6f7ff', borderRadius: 4, padding: '4px 12px', fontSize: '1rem', color: '#0077b6', fontWeight: 500}}>Jan 2025 - Apr 2025</span>
            <span style={{fontWeight: 'bold', color: '#333', marginLeft: 16}}>Tech:</span>
            <span style={{background: '#e6f7ff', borderRadius: 4, padding: '4px 12px', fontSize: '1rem', color: '#0077b6', fontWeight: 500}}>Node.js</span>
            <span style={{background: '#e6f7ff', borderRadius: 4, padding: '4px 12px', fontSize: '1rem', color: '#0077b6', fontWeight: 500}}>MySQL</span>
            <span style={{background: '#e6f7ff', borderRadius: 4, padding: '4px 12px', fontSize: '1rem', color: '#0077b6', fontWeight: 500}}>RESTful APIs</span>
          </div>
          <ul className="experience-desc" style={{marginTop: '0.5rem', paddingLeft: 0, textAlign: 'left', display: 'inline-block'}}>
            <li style={{marginBottom: '0.7rem',color: '#181717ff', fontSize: '1.08rem', lineHeight: 1.6}}>Developed and deployed backend features for a college-based web application using Node.js and MySQL.</li>
            <li style={{marginBottom: '0.7rem',color: '#181717ff', fontSize: '1.08rem', lineHeight: 1.6}}>Built RESTful APIs, implemented secure user authentication, and managed database operations to ensure data integrity.</li>
            <li style={{marginBottom: '0.7rem',color: '#181717ff', fontSize: '1.08rem', lineHeight: 1.6}}>Collaborated closely with the frontend team to integrate server-side logic, enabling seamless data flow and improved overall application performance.</li>
            <li style={{marginBottom: '0.7rem',color: '#181717ff', fontSize: '1.08rem', lineHeight: 1.6}}>Focused on scalability, security, and maintainability, strengthening both technical expertise and teamwork skills.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
