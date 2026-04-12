import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-bg-block">
        <div className="container">
          <div className="section-label reveal">About</div>
          <div className="section-title reveal">Get to know the person<br />behind the code.</div>

          <div className="about-grid">
            <div className="about-text-col reveal">
              <p className="about-paragraph">
                As a first-year <strong>Master of Computer Applications (MCA)</strong> student at <strong>Integral University, Lucknow</strong>, I am dedicated to integrating hardware expertise with software innovation.
                My technical proficiency encompasses <strong>Generative AI development</strong> and <strong>Apache Spark</strong>, reinforced by professional certifications in <strong>Google AI/ML</strong> and <strong>IBM Cloud</strong>.
              </p>
              <p className="about-paragraph">
                Currently, I serve as a <strong>Beta Software Tester and Community Co-Creator for OnePlus</strong>, where I specialize in OS internals, device debugging, and system performance tuning.
                My industry experience extends to quality assurance roles with global technology brands such as <strong>POCO, BlackBerry, and LeEco</strong>.
              </p>
              <p className="about-paragraph">
                Within the academic community, I have been instrumental in establishing the <strong>"Binary Battalion"</strong> coding club, creating a dedicated platform for technical skill development through initiatives such as the <strong>"Integral Prompt War"</strong>.
              </p>
            </div>

            <div className="about-cards-col">
              <div className="about-card reveal">
                <div className="about-card-icon">📱</div>
                <div className="about-card-content">
                  <h3 className="about-card-title">OnePlus Co-Creator</h3>
                  <p className="about-card-desc">Beta testing, OS internals, device debugging</p>
                </div>
              </div>
              <div className="about-card reveal">
                <div className="about-card-icon">🤖</div>
                <div className="about-card-content">
                  <h3 className="about-card-title">Generative AI</h3>
                  <p className="about-card-desc">Google AI/ML, Gemini, Vertex AI, Streamlit</p>
                </div>
              </div>
              <div className="about-card reveal">
                <div className="about-card-icon">🏫</div>
                <div className="about-card-content">
                  <h3 className="about-card-title">Binary Battalion</h3>
                  <p className="about-card-desc">Founded coding club at Integral University</p>
                </div>
              </div>
              <div className="about-card reveal">
                <div className="about-card-icon">🔧</div>
                <div className="about-card-content">
                  <h3 className="about-card-title">QA & System Tuning</h3>
                  <p className="about-card-desc">POCO, BlackBerry, LeEco, XDA Senior Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
