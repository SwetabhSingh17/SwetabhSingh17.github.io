import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          {/* Avatar */}
          <div className="hero-avatar-area">
            <div className="hero-avatar-frame">
              <img
                src="/avatar3d.png"
                alt="Swetabh Singh"
                className="hero-avatar-img"
              />
            </div>
          </div>

          {/* Main headline */}
          <div className="hero-headline">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              OnePlus Community Co-Creator
            </div>

            <h1 className="hero-name">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name-accent">Swetabh Singh</span>
            </h1>

            <p className="hero-role">
              MCA Student · Code Optimizer · Google AI/ML & IBM Cloud Certified
            </p>

            <p className="hero-description">
              Integrating hardware expertise with software innovation. Specializing in OS internals,
              device debugging, performance tuning, and Generative AI development.
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">3+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Certifications</div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <div className="hero-stat-number">8+</div>
              <div className="hero-stat-label">Years in Tech</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
