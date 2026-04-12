import '../styles/Contact.css';

export default function Contact() {
  return (
    <>
      {/* Contact CTA Section */}
      <section className="contact" id="contact">
        <div className="contact-dark">
          <div className="container">
            <div className="contact-content reveal">
              <div className="section-label" style={{ color: 'var(--accent-light)' }}>Contact</div>
              <h2 className="contact-heading">
                Let's work<br />together.
              </h2>
              <p className="contact-subtext">
                Have a project in mind or want to connect? I'd love to hear from you.
              </p>

              <div className="contact-links-row">
                <a href="mailto:swetabh17@hotmail.com" className="contact-action">
                  <span className="contact-action-label">Email</span>
                  <span className="contact-action-value">
                    swetabh17@hotmail.com
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </span>
                </a>
                <a href="https://github.com/SwetabhSingh17" target="_blank" rel="noreferrer" className="contact-action">
                  <span className="contact-action-label">GitHub</span>
                  <span className="contact-action-value">
                    SwetabhSingh17
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/swetabhsingh17" target="_blank" rel="noreferrer" className="contact-action">
                  <span className="contact-action-label">LinkedIn</span>
                  <span className="contact-action-value">
                    Swetabh Singh
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </span>
                </a>
                <a href="https://www.credly.com/users/swetabhsingh/badges" target="_blank" rel="noreferrer" className="contact-action">
                  <span className="contact-action-label">Credly</span>
                  <span className="contact-action-value">
                    Verified Badges
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">SS</div>
              <p className="footer-tagline">
                Crafted with passion & code.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Navigate</h4>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#certifications" className="footer-link">Certifications</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Connect</h4>
              <a href="https://github.com/SwetabhSingh17" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
              <a href="https://www.linkedin.com/in/swetabhsingh17" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://www.credly.com/users/swetabhsingh/badges" target="_blank" rel="noreferrer" className="footer-link">Credly</a>
              <a href="mailto:swetabhsingh17@gmail.com" className="footer-link">Email</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copyright">
              © {new Date().getFullYear()} Swetabh Singh
            </span>
            <span className="footer-built">
              Built with React + Vite
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
