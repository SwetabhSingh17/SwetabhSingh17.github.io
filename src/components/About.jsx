import '../styles/About.css';

const aboutCards = [
  {
    icon: '📱',
    title: 'OnePlus Co-Creator',
    desc: 'Beta testing, OS internals, device debugging & system performance tuning.',
  },
  {
    icon: '🤖',
    title: 'Generative AI',
    desc: 'Google AI/ML, Gemini API, Vertex AI, Streamlit development.',
  },
  {
    icon: '🏫',
    title: 'Binary Battalion',
    desc: 'Founded coding club at Integral University — Integral Prompt War host.',
  },
  {
    icon: '🔧',
    title: 'QA & System Tuning',
    desc: 'POCO, BlackBerry, LeEco quality assurance — XDA Senior Member.',
  },
];

export default function About() {
  return (
    <section className="about-section" id="about" aria-label="About">
      <div className="container px-3">

        {/* Section header */}
        <div className="mac-section-label reveal">About</div>
        <h2 className="mac-section-title reveal">Get to know the person<br />behind the code.</h2>

        <div className="row g-4 align-items-start">

          {/* Left — text window */}
          <div className="col-lg-6 reveal">
            <div className="about-text-window">
              <div className="about-text-window-bar">
                <span className="about-text-window-bar-dot" aria-hidden="true" />
                <span className="about-text-window-bar-dot" aria-hidden="true" />
                <span className="about-text-window-bar-label">about_me.txt</span>
              </div>
              <div className="about-text-body">
                <p className="about-paragraph">
                  As a first-year <strong>Master of Computer Applications (MCA)</strong> student at{' '}
                  <strong>Integral University, Lucknow</strong>, I am dedicated to integrating
                  hardware expertise with software innovation. My technical proficiency encompasses{' '}
                  <strong>Generative AI development</strong> and <strong>Apache Spark</strong>,
                  reinforced by professional certifications in <strong>Google AI/ML</strong> and{' '}
                  <strong>IBM Cloud</strong>.
                </p>
                <p className="about-paragraph">
                  Currently, I serve as a{' '}
                  <strong>Beta Software Tester and Community Co-Creator for OnePlus</strong>,
                  where I specialize in OS internals, device debugging, and system performance
                  tuning. My industry experience extends to quality assurance roles with global
                  technology brands such as <strong>POCO, BlackBerry, and LeEco</strong>.
                </p>
                <p className="about-paragraph">
                  Within the academic community, I have been instrumental in establishing the{' '}
                  <strong>&ldquo;Binary Battalion&rdquo;</strong> coding club, creating a dedicated
                  platform for technical skill development through initiatives such as the{' '}
                  <strong>&ldquo;Integral Prompt War&rdquo;</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Right — alert dialog cards */}
          <div className="col-lg-6">
            <div className="row g-3">
              {aboutCards.map((card, i) => (
                <div className="col-sm-6 reveal" key={i}>
                  <div className="about-card">
                    <div className="about-card-icon-box" aria-hidden="true">
                      {card.icon}
                    </div>
                    <div className="about-card-content">
                      <h3 className="about-card-title">{card.title}</h3>
                      <p className="about-card-desc">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
