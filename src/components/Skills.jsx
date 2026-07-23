import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'AI/ML & Data',
    icon: '🤖',
    skills: ['Generative AI', 'Gemini API', 'Vertex AI', 'Apache Spark', 'Dataflow', 'NLP APIs'],
  },
  {
    title: 'Development',
    icon: '🌐',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Swift', 'React', 'Node.js', 'Streamlit', 'HTML/CSS'],
  },
  {
    title: 'OS & Device Eng.',
    icon: '📱',
    skills: ['OS Internals', 'Device Debugging', 'Android', 'Performance Tuning', 'Custom ROMs', 'QA Testing'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Google Cloud', 'Git', 'Linux', 'PostgreSQL', 'Docker'],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-label="Skills">
      <div className="container px-3">

        <div className="mac-section-label reveal">Expertise</div>
        <h2 className="mac-section-title reveal">Skills &amp; Technologies</h2>
        <p className="mac-section-subtitle reveal">
          From Generative AI to OS internals — the tools I use to build, optimize, and innovate.
        </p>

        <div className="row g-4">
          {skillCategories.map((cat, ci) => (
            <div className="col-sm-6 col-xl-3 reveal" key={ci}>
              <div className="skills-cat-card">
                <div className="skills-cat-bar">
                  <span className="skills-cat-icon" aria-hidden="true">{cat.icon}</span>
                  <h3 className="skills-cat-title">{cat.title}</h3>
                </div>
                <div className="skills-cat-body">
                  {cat.skills.map((skill, si) => (
                    <span className="skill-tag" key={si}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
