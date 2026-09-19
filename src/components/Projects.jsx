import '../styles/Projects.css';

const projects = [
  {
    num: '01',
    title: 'Integral Project Hub (APMS — Academic Project Management System)',
    desc: 'Production-grade Academic Project Management System streamlining thesis proposals, mentor evaluations, and course-segregated team allocations. Engineered with multi-sheet Excel bulk onboarding, real-time Server-Sent Events (SSE) telemetry, RBAC, and first-login security enforcement. Deployed across campus at Integral University, Lucknow.',
    tags: ['React 18', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'ExcelJS', 'SSE'],
    type: 'Full Stack',
    deployment: 'Deployed @ Integral Univ',
    github: 'https://github.com/SwetabhSingh17/APMS',
    live: null,
  },
  {
    num: '02',
    title: 'Healing Mind — Clinic Appointment App',
    desc: 'Production-grade, offline-first Android application architected for clinical receptionists to streamline patient queues, dynamic token allocation, and priority triage. Implemented using MVVM, StateFlow, Room database persistence, and Dagger Hilt with a custom Glass Contrast Material 3 UI. Deployed in clinical practice at Healing Mind Neuro-Psychiatry Clinic, Unnao.',
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Room DB', 'Dagger Hilt', 'MVVM', 'StateFlow'],
    type: 'Android / Mobile',
    deployment: 'Live @ Healing Mind Clinic',
    github: 'https://github.com/SwetabhSingh17/Clinic-Appointment-Management-App',
    live: null,
  },
  {
    num: '03',
    title: 'AI Skill Platform for Official Statistics',
    desc: 'AI-powered skill intelligence and capacity-building platform engineered for Smart India Hackathon 2026 (Problem Statement 26101, MoSPI / DIID). Features automated MCQ quiz generation from unstructured PDF courseware, role-based competency gap analysis, and tailored training recommendations via iGOT Karmayogi integration.',
    tags: ['TypeScript', 'React 18', 'Express', 'PostgreSQL', 'Drizzle ORM', 'LLM / GenAI', 'pdf-parse'],
    type: 'AI / Full Stack',
    deployment: 'SIH 2026 Prototype',
    github: 'https://github.com/SwetabhSingh17/RTFM_SkillOS',
    live: null,
  },
  {
    num: '04',
    title: 'Academic Stress & Mood Calculator',
    desc: 'Multimodal AI diagnostic system evaluating student stress by fusing three asynchronous telemetry channels: real-time 7-class facial emotion classification (DeepFace CNN), academic transcript PDF parsing, and Likert mood survey scoring into a calibrated 0–100 composite stress index with actionable guidance.',
    tags: ['Python', 'TensorFlow', 'DeepFace CNN', 'Flask', 'OpenCV', 'Tailwind CSS'],
    type: 'AI / Deep Learning',
    deployment: 'Dept. of CA Project',
    github: 'https://github.com/SwetabhSingh17/Academic-Stress-Calculator',
    live: null,
  },
  {
    num: '05',
    title: 'Madhur Vedic Vision',
    desc: 'Client-commissioned Vedic astrology and Kundli consulting web application built for astrologer Madhur Kumria. Features a BMW M-inspired aesthetic with tricolor accents, frosted glassmorphism architecture, 60fps scroll-triggered micro-interactions (IntersectionObserver), and integrated UPI checkout booking.',
    tags: ['HTML5', 'Tailwind CSS', 'Vite', 'JavaScript', 'Glassmorphism', 'Responsive UI'],
    type: 'Web / Frontend',
    deployment: 'Client Site',
    github: 'https://github.com/SwetabhSingh17/Madhur_Vedic_Vision',
    live: null,
  },
  {
    num: '06',
    title: 'Anima — Apple Ecosystem Calendar',
    desc: 'Native multiplatform productivity and calendar application engineered for iOS, iPadOS, and macOS. Utilizes Swift and SwiftUI with a modular 3-panel layout, CloudKit synchronization, custom gesture interactions, and tight adherence to Apple Human Interface Guidelines (HIG).',
    tags: ['Swift', 'SwiftUI', 'iOS', 'iPadOS', 'macOS', 'CloudKit', 'HIG'],
    type: 'Native iOS / macOS',
    deployment: 'In Development',
    github: 'https://github.com/SwetabhSingh17/Anima',
    live: null,
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-label="Projects">
      <div className="container px-3">

        <div className="mac-section-label reveal">Work</div>
        <h2 className="mac-section-title reveal">Featured Projects</h2>
        <p className="mac-section-subtitle reveal">
          Production systems, AI/ML architectures, and native applications engineered for real-world impact.
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
                  <div className="project-badges">
                    {project.deployment && (
                      <span className="project-deploy-badge">
                        <span className="project-deploy-dot" aria-hidden="true" />
                        {project.deployment}
                      </span>
                    )}
                    <span className="project-type-badge">{project.type}</span>
                  </div>
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

