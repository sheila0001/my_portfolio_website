import React, { useEffect, useRef } from 'react';
import './HowIWork.css';

const steps = [
  {
    number: '01',
    title: 'Understand the User',
    desc: 'Every design starts with understanding who will use the product. I learn to apply user-centered design methods to make sure the decisions I take are grounded in real human needs, not assumptions.',
  },
  {
    number: '02',
    title: 'Explore and Iterate',
    desc: 'I sketch ideas and iterate quickly. Good design is rarely right the first time, so I embrace feedback and revision as a core part of the process rather than a setback.',
  },
  {
    number: '03',
    title: 'Evaluate and Refine',
    desc: 'I am learning to apply heuristic evaluation principles from the Nielsen Norman Group to assess my designs. This helps me identify usability issues early and build solutions that feel natural.',
  },
  {
    number: '04',
    title: 'Build and Ship',
    desc: 'With a solid foundation in Java, Python, JavaScript, and TypeScript, I am comfortable translating designs into working code. I care about both how things look and how they work under the hood.',
  },
];

export default function HowIWork() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-in').forEach((node, i) => {
            setTimeout(() => node.classList.add('visible'), i * 100);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="how-i-work" id="how-i-work" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">02 — Process</p>
        <h2 className="section-title fade-in">How I Work</h2>

        <div className="hiw-note fade-in">
          <p>
            I am currently enrolled in a UI Design course at the University of Ottawa,
            actively learning design elements and human-computer interaction principles.
            I reference resources like the{' '}
            <a
              href="https://www.nngroup.com"
              target="_blank"
              rel="noreferrer"
              className="hiw-link"
            >
              Nielsen Norman Group
            </a>{' '}
            and the{' '}
            <a
              href="https://www.interaction-design.org"
              target="_blank"
              rel="noreferrer"
              className="hiw-link"
            >
              Interaction Design Foundation
            </a>{' '}
            to deepen my understanding of user-centered design, visual communication. As the semester progresses, I will document
            each concept I apply in the case studies below.
          </p>
        </div>

        <div className="hiw-grid">
          {steps.map((s) => (
            <div className="hiw-card fade-in" key={s.number}>
              <span className="hiw-number">{s.number}</span>
              <h3 className="hiw-card-title">{s.title}</h3>
              <p className="hiw-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline / Experience */}
        <div className="exp-section">
          <h3 className="exp-heading fade-in">Experience &amp; Education</h3>
          <div className="timeline">

            <div className="timeline-item fade-in">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period">Jan 2026 — Present</span>
                <h4 className="timeline-role">Software Engineering Intern (Co-op)</h4>
                <p className="timeline-org">Communication Security Establishment (CSE Canada)</p>
                <p className="timeline-detail">
                  Provisioning cloud resources with Terraform, designing virtual cloud
                  networks, and developing Python automation scripts for infrastructure
                  deployment in a highly secure government environment.
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period">Jun 2025 — Dec 2025</span>
                <h4 className="timeline-role">Software Developer Intern (Co-op)</h4>
                <p className="timeline-org">Employment and Social Development Canada (ESDC)</p>
                <p className="timeline-detail">
                  Collaborated in an 11-member agile team to deliver features on a
                  Microsoft Dynamics 365 app. Built a TypeScript dynamic dropdown,
                  deployed via Azure DevOps pipelines, and audited 50+ database tables
                  for change tracking.
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period">Expected Dec 2028</span>
                <h4 className="timeline-role">B.Sc. Software Engineering</h4>
                <p className="timeline-org">University of Ottawa</p>
                <p className="timeline-detail">
                  Dean's List recipient and Entrance Scholarship recipient (2000$).
                  Coursework includes Data Structures and Algorithms, Computer
                  Architecture, Probability &amp; Statistics for Engineers, and
                  Introduction to Software Engineering.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
