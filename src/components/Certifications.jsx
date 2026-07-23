import { useState } from 'react';
import '../styles/Certifications.css';

const certGroups = [
  {
    issuer: 'Google Cloud Skills Boost',
    icon: '📂',
    certs: [
      {
        title: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG',
        date: '2024',
        skills: ['Gemini AI', 'Multimodal RAG', 'Document AI', 'LLMs'],
      },
      {
        title: 'Develop GenAI Apps with Gemini and Streamlit',
        date: '2024',
        skills: ['Generative AI', 'Gemini API', 'Streamlit', 'Python'],
      },
      {
        title: 'Build and Deploy Machine Learning Solutions on Vertex AI',
        date: '2024',
        skills: ['Vertex AI', 'MLOps', 'Model Deployment', 'AutoML'],
      },
      {
        title: 'Networking Learning Track — Gen AI Academy 2.0',
        date: '2024',
        skills: ['Cloud Networking', 'VPC', 'Load Balancing'],
      },
      {
        title: 'Data Preparation using Dataprep and Dataflow',
        date: '2024',
        skills: ['Dataprep', 'Dataflow', 'ETL Pipelines', 'BigQuery'],
      },
      {
        title: 'Apache Spark on Dataproc',
        date: '2024',
        skills: ['Apache Spark', 'Dataproc', 'Big Data', 'PySpark'],
      },
      {
        title: 'ML APIs including Natural Language',
        date: '2024',
        skills: ['Natural Language API', 'Vision API', 'Translation API'],
      },
    ],
  },
  {
    issuer: 'IBM SkillsBuild',
    icon: '📂',
    certs: [
      {
        title: 'Artificial Intelligence Fundamentals',
        date: '2024',
        skills: ['AI Fundamentals', 'Machine Learning', 'Neural Networks', 'NLP'],
      },
    ],
  },
];

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
);

export default function Certifications() {
  const [expanded, setExpanded] = useState(0);

  const toggle = (i) => setExpanded(expanded === i ? -1 : i);

  return (
    <section className="certs-section" id="certifications" aria-label="Certifications">
      <div className="container px-3">

        <div className="mac-section-label reveal">Credentials</div>
        <h2 className="mac-section-title reveal">Certifications &amp; Courses</h2>
        <p className="mac-section-subtitle reveal">
          Verified credentials from Google Cloud and IBM, showcasing continuous learning and professional growth.
        </p>

        <div className="reveal">
          {certGroups.map((group, gi) => (
            <div className="cert-group" key={gi}>

              {/* Folder header row */}
              <button
                className={`cert-group-header ${expanded === gi ? 'expanded' : ''}`}
                onClick={() => toggle(gi)}
                aria-expanded={expanded === gi}
                aria-controls={`cert-body-${gi}`}
              >
                <div className="cert-folder-tab" aria-hidden="true">
                  {group.icon}
                </div>
                <div className="cert-group-info">
                  <div className="cert-group-name">{group.issuer}</div>
                  <div className="cert-group-count">
                    {group.certs.length} certification{group.certs.length > 1 ? 's' : ''}
                  </div>
                </div>
                <div className="cert-group-arrow" aria-hidden="true">
                  {expanded === gi ? '▲' : '▼'}
                </div>
              </button>

              {/* File list body */}
              <div
                id={`cert-body-${gi}`}
                className={`cert-group-body ${expanded === gi ? 'expanded' : ''}`}
                role="region"
                aria-label={group.issuer}
              >
                {group.certs.map((cert, ci) => (
                  <div className="cert-item" key={ci}>
                    <div className="cert-item-header">
                      <h4 className="cert-item-title">{cert.title}</h4>
                      <span className="cert-item-date">{cert.date}</span>
                    </div>
                    <div className="cert-skill-tags">
                      {cert.skills.map((skill, si) => (
                        <span className="cert-skill-tag" key={si}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Credly verify link */}
                <div className="cert-verify-row">
                  <a
                    href="https://www.credly.com/users/swetabhsingh/badges"
                    target="_blank"
                    rel="noreferrer"
                    className="cert-verify-link"
                  >
                    Verify on Credly <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
