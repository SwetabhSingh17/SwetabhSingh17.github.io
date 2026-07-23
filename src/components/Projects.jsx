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
    desc: 'A portfolio website built with React and Vite, featuring a macOS System 1 inspired theme, Bootstrap 5 layout, dual dark/light modes, and smooth scroll animations.',
    tags: ['React', 'Vite', 'Bootstrap 5', 'CSS3'],
    type: 'Web Design',
    github: 'https://github.com/SwetabhSingh17',
    live: '#',
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
);

export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-label="Projects">
      <div className="container px-3">

        <div className="mac-section-label reveal">Work</div>
        <h2 className="mac-section-title reveal">Featured Projects</h2>
        <p className="mac-section-subtitle reveal">
          A showcase of my work — from full-stack applications to native Apple ecosystem apps.
        </p>

        <div className="row g-4">
          {projects.map((project, i) => (
            <div className="col-md-6 reveal" key={i}>
              <article className="project-window">

                {/* Finder title bar */}
                <div className="project-window-bar">
                  <div className="project-window-dots" aria-hidden="true">
                    <span className="project-window-dot" />
                    <span className="project-window-dot" />
                    <span className="project-window-dot" />
                  </div>
                  <span className="project-window-title">
                    project_{project.num}.app
                  </span>
                  <span style={{ width: 40 }} />
                </div>

                {/* Toolbar */}
                <div className="project-window-toolbar">
                  <span className="project-num" aria-hidden="true">{project.num}</span>
                  <span className="project-type-badge">{project.type}</span>
                </div>

                {/* Body */}
                <div className="project-window-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, ti) => (
                      <span className="project-tag" key={ti}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Status bar / links */}
                <div className="project-window-statusbar">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Source Code <ArrowIcon />
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live Demo <ArrowIcon />
                    </a>
                  )}
                  {project.live === '#' && (
                    <span className="project-link" style={{ opacity: 0.5, cursor: 'default' }}>
                      Live Site <ArrowIcon />
                    </span>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
