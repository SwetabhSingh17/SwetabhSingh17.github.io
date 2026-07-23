import '../styles/Contact.css';

const contactItems = [
  {
    label: 'Email',
    value: 'swetabh17@hotmail.com',
    href: 'mailto:swetabh17@hotmail.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'SwetabhSingh17',
    href: 'https://github.com/SwetabhSingh17',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Swetabh Singh',
    href: 'https://www.linkedin.com/in/swetabhsingh17',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Credly',
    value: 'Verified Badges',
    href: 'https://www.credly.com/users/swetabhsingh/badges',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
);

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section className="contact-section" id="contact" aria-label="Contact">
        <div className="container px-3">

          {/* Mac dialog box */}
          <div className="contact-dialog reveal" style={{ position: 'relative' }}>

            {/* Dialog title bar */}
            <div className="contact-dialog-bar">
              <div className="contact-dialog-dots" aria-hidden="true">
                <span className="contact-dialog-dot" />
                <span className="contact-dialog-dot" />
                <span className="contact-dialog-dot" />
              </div>
              <span className="contact-dialog-title">new_message.txt</span>
              <span style={{ width: 44 }} />
            </div>

            {/* Dialog body */}
            <div className="contact-dialog-body">
              <div className="contact-dialog-label">Contact</div>
              <h2 className="contact-heading">
                Let&apos;s work<br />together.
              </h2>
              <p className="contact-subtext">
                Have a project in mind or want to connect? I&apos;d love to hear from you.
              </p>

              {/* Contact list */}
              <div className="contact-list" role="list">
                {contactItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="contact-list-item"
                    role="listitem"
                  >
                    <div className="contact-list-left">
                      <div className="contact-list-icon" aria-hidden="true">
                        {item.icon}
                      </div>
                      <div>
                        <div className="contact-list-label">{item.label}</div>
                        <div className="contact-list-value">{item.value}</div>
                      </div>
                    </div>
                    <span className="contact-list-arrow" aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mac-footer" role="contentinfo">
        <div className="container px-3">
          <div className="mac-footer-inner">
            <div className="mac-footer-grid">

              <div>
                <div className="mac-footer-logo">SS</div>
                <p className="mac-footer-tagline">Crafted with passion &amp; code.</p>
              </div>

              <div>
                <h4 className="mac-footer-col-title">Navigate</h4>
                <a href="#home"           className="mac-footer-link">Home</a>
                <a href="#about"          className="mac-footer-link">About</a>
                <a href="#projects"       className="mac-footer-link">Projects</a>
                <a href="#certifications" className="mac-footer-link">Certifications</a>
              </div>

              <div>
                <h4 className="mac-footer-col-title">Connect</h4>
                <a href="https://github.com/SwetabhSingh17"           target="_blank" rel="noreferrer" className="mac-footer-link">GitHub</a>
                <a href="https://www.linkedin.com/in/swetabhsingh17"  target="_blank" rel="noreferrer" className="mac-footer-link">LinkedIn</a>
                <a href="https://www.credly.com/users/swetabhsingh/badges" target="_blank" rel="noreferrer" className="mac-footer-link">Credly</a>
                <a href="mailto:swetabh17@hotmail.com"                className="mac-footer-link">Email</a>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="mac-footer-statusbar">
            <span className="mac-footer-copyright">
              &copy; {new Date().getFullYear()} Swetabh Singh
            </span>
            <span className="mac-footer-built">
              Built with React + Vite + Bootstrap 5
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
