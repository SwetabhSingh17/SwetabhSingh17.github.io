import '../styles/Projects.css';

const projects = [
  {
    num: '01',
    title: 'APMS — Academic Project Management System',
    desc: 'A comprehensive academic project management system built with TypeScript, enabling students and faculty to efficiently manage, track, and collaborate on academic projects with role-based access control.',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Prisma'],
    type: 'Full Stack',
    github: 'https://github.com/SwetabhSingh17/APMS',
    live: null,
  },
  {
    num: '02',
    title: 'Integral Hackathon Dashboard',
    desc: 'Full-stack hackathon management dashboard developed for Binary Battalion. Features Role-Based Access Control, JWT authentication, and a dark glassmorphism UI.',
    tags: ['React', 'Express', 'PostgreSQL', 'TypeScript'],
    type: 'Full Stack',
    github: 'https://github.com/SwetabhSingh17/BB_Hackathon_Dashboard',
    live: null,
  },
  {
    num: '03',
    title: 'Anima — Calendar App for Apple Ecosystem',
    desc: 'A beautifully designed calendar application built natively for the Apple ecosystem (iOS, iPadOS, macOS). Features an intuitive 3-panel UI, seamless sync, and refined interactions.',
    tags: ['Swift', 'SwiftUI', 'iOS', 'iPadOS', 'macOS', 'CloudKit'],
    type: 'In Progress',
    github: 'https://github.com/SwetabhSingh17',
    live: null,
  },
  {
    num: '04',
    title: 'Portfolio Website',
    desc: 'A stunning portfolio website built with React and Vite, featuring smooth scroll animations, theme switching, and a bold minimalist design language inspired by modern editorial aesthetics.',
    tags: ['React', 'Vite', 'CSS3', 'Responsive Design'],
    type: 'Web Design',
    github: 'https://github.com/SwetabhSingh17',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-bg-block">
        <div className="container">
          <div className="section-label reveal">Work</div>
          <div className="section-title reveal">Featured Projects</div>
          <div className="section-subtitle reveal">
            A showcase of my work — from full-stack applications to native Apple ecosystem apps.
          </div>

          <div className="projects-list">
            {projects.map((project, i) => (
              <div className="project-entry reveal" key={i}>
                <div className="project-number">{project.num}</div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <div className="project-tags">
                      {project.tags.map((tag, ti) => (
                        <span className="project-tag" key={ti}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                        Source Code
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                        Live Demo
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
