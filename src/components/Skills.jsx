import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'AI/ML & Data',
    icon: '🤖',
    skills: ['Generative AI', 'Gemini API', 'Vertex AI', 'Apache Spark', 'Dataflow', 'NLP APIs']
  },
  {
    title: 'Development',
    icon: '🌐',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Swift', 'React', 'Node.js', 'Streamlit', 'HTML/CSS']
  },
  {
    title: 'OS & Device Engineering',
    icon: '📱',
    skills: ['OS Internals', 'Device Debugging', 'Android', 'Performance Tuning', 'Custom ROMs', 'QA Testing']
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Google Cloud', 'Git', 'Linux', 'PostgreSQL', 'Docker']
  }
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-label reveal">Expertise</div>
        <div className="section-title reveal">Skills & Technologies</div>
        <div className="section-subtitle reveal">
          From Generative AI to OS internals — the tools I use to build, optimize, and innovate.
        </div>

        <div className="skills-categories">
          {skillCategories.map((cat, ci) => (
            <div className="skills-category reveal" key={ci}>
              <div className="category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-name">{cat.title}</h3>
              </div>
              <div className="skills-tags">
                {cat.skills.map((skill, si) => (
                  <span className="skill-tag" key={si}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
