import { useState } from 'react';
import '../styles/Certifications.css';

const certGroups = [
  {
    issuer: 'Google Cloud Skills Boost',
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
    ]
  },
  {
    issuer: 'IBM SkillsBuild',
    certs: [
      {
        title: 'Artificial Intelligence Fundamentals',
        date: '2024',
        skills: ['AI Fundamentals', 'Machine Learning', 'Neural Networks', 'NLP'],
      },
    ]
  }
];

export default function Certifications() {
  const [expandedGroup, setExpandedGroup] = useState(0);

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-label reveal">Credentials</div>
        <div className="section-title reveal">Certifications & Courses</div>
        <div className="section-subtitle reveal">
          Verified credentials from Google Cloud and IBM, showcasing continuous learning and professional growth.
        </div>

        <div className="certs-groups">
          {certGroups.map((group, gi) => (
            <div className="cert-group reveal" key={gi}>
              <button
                className={`cert-group-header ${expandedGroup === gi ? 'expanded' : ''}`}
                onClick={() => setExpandedGroup(expandedGroup === gi ? -1 : gi)}
              >
                <div className="cert-group-info">
                  <h3 className="cert-group-name">{group.issuer}</h3>
                  <span className="cert-group-count">{group.certs.length} certification{group.certs.length > 1 ? 's' : ''}</span>
                </div>
                <div className="cert-group-toggle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" className="vert-line" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              <div className={`cert-group-body ${expandedGroup === gi ? 'expanded' : ''}`}>
                {group.certs.map((cert, ci) => (
                  <div className="cert-item" key={ci}>
                    <div className="cert-item-header">
                      <h4 className="cert-item-title">{cert.title}</h4>
                      <span className="cert-item-date">{cert.date}</span>
                    </div>
                    <div className="cert-item-skills">
                      {cert.skills.map((skill, si) => (
                        <span className="cert-skill-tag" key={si}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
                <a
                  href="https://www.credly.com/users/swetabhsingh/badges"
                  target="_blank"
                  rel="noreferrer"
                  className="cert-verify-link"
                >
                  Verify on Credly
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
