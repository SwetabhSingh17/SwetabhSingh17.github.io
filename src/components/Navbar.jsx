import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'Home',   href: '#home' },
  { label: 'About',  href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work',   href: '#projects' },
  { label: 'Certs',  href: '#certifications' },
  { label: 'Contact',href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive]       = useState('#home');
  const [menuOpen, setMenuOpen]   = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setLastScrollY(currentY);

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── macOS Menu Bar ── */}
      <header className="mac-menubar" id="navbar" role="banner">
        <div className="mac-menubar-inner">

          {/* Logo */}
          <a
            className="mac-logo"
            href="#home"
            onClick={() => handleNav('#home')}
            aria-label="Swetabh Singh — Home"
          >
            <div className="mac-logo-box">SS</div>
            <span className="mac-logo-name">Swetabh Singh</span>
          </a>

          {/* Desktop nav links */}
          <nav aria-label="Main navigation">
            <ul className="mac-nav-links">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`mac-nav-link ${active === link.href ? 'active' : ''}`}
                    onClick={() => handleNav(link.href)}
                    aria-current={active === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side: socials + theme toggle */}
          <div className="mac-menubar-right">
            {/* GitHub */}
            <a
              href="https://github.com/SwetabhSingh17"
              target="_blank"
              rel="noreferrer"
              className="mac-icon-btn"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/swetabhsingh17"
              target="_blank"
              rel="noreferrer"
              className="mac-icon-btn"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Theme toggle */}
            <button
              className="mac-theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
              id="theme-toggle"
            >
              {theme === 'light' ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                  DARK
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                  </svg>
                  LITE
                </>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className={`mac-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mac-mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <nav
          className="mac-mobile-menu"
          onClick={e => e.stopPropagation()}
          aria-label="Mobile navigation"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`mac-mobile-link ${active === link.href ? 'active' : ''}`}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
