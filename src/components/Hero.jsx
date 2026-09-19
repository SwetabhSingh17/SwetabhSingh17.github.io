import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-label="Hero">
      <div className="container px-3">

        {/* Mac window frame */}
        <div className="hero-window">

          {/* Title bar */}
          <div className="hero-window-bar">
            <div className="hero-dots" aria-hidden="true">
              <span className="hero-dot close" />
              <span className="hero-dot" />
              <span className="hero-dot" />
            </div>
            <span className="hero-window-title">Swetabh_Singh.app</span>
            <span style={{ width: 60 }} />
          </div>

          {/* Window body */}
          <div className="hero-window-body">
            <div className="hero-inner">

              {/* Avatar */}
              <div className="hero-avatar-wrap">
                <div className="hero-avatar-frame">
                  <img
                    src="/avatar3d.png"
                    alt="Swetabh Singh"
                    className="hero-avatar-img"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="hero-badge-dot" aria-hidden="true" />
                  OnePlus Community Co-Creator
                </div>

                <span className="hero-greeting">Hi, I&apos;m</span>
                <h1 className="hero-name">Swetabh Singh</h1>

                <p className="hero-role">
                  MCA Student · Code Optimizer · Google AI/ML &amp; IBM Cloud Certified
                </p>

                <p className="hero-description">
                  Integrating hardware expertise with software innovation. Specializing in
                  OS internals, device debugging, performance tuning, and Generative AI development.
                </p>

                <div className="hero-ctas">
                  <a href="#projects" className="mac-btn mac-btn-primary">
                    View Projects
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <a href="#contact" className="mac-btn mac-btn-outline">
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar docked below window */}
        <div className="hero-stats-bar" aria-label="Quick stats">
          <div className="hero-stat-item">
            <div className="hero-stat-number">6+</div>
            <div className="hero-stat-label">Projects</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-number">10+</div>
            <div className="hero-stat-label">Certifications</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-number">8+</div>
            <div className="hero-stat-label">Years in Tech</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
