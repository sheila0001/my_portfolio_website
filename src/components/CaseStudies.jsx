import React, { useEffect, useRef } from 'react';
import './CaseStudies.css';

const cases = [
  {
    id: 1,
    label: 'Design 1 — Service Site',
    title: 'Lumiere Hair Studio',
    description: 'A premium hair salon site for Ottawa with appointment booking, service browsing, and a clean accessible design.',
    tag: 'Service Design',
    color: '#E8F0E8',
    accent: '#7A9E7E',
    link: 'https://sheila0001.github.io/lumiere-salon',
    icon: (<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" width="40" height="40"><rect x="6" y="14" width="28" height="20" rx="3" /><path d="M14 14V10a6 6 0 0112 0v4" /><circle cx="20" cy="24" r="3" /></svg>),
  },
  {
    id: 2,
    label: 'Design 2 — Memory Game',
    title: 'Flora Memory',
    description: 'A botanical card-matching memory game with theme selection, three difficulty levels, and a star-based performance rating.',
    tag: 'Interactive Design',
    color: '#EDE8F5',
    accent: '#8B6FBF',
    link: 'https://sheila0001.github.io/flora-memory',
    icon: (<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" width="40" height="40"><rect x="4" y="10" width="14" height="20" rx="3" /><rect x="22" y="10" width="14" height="20" rx="3" /><path d="M11 20h18" strokeDasharray="2 3" /></svg>),
  },
  {
    id: 3,
    label: 'Design 3 — E-Commerce',
    title: 'Noire & Co.',
    description: 'A premium skincare e-commerce store for melanin-rich skin, featuring faceted product search, a full checkout flow, and a post-purchase feedback survey.',
    tag: 'E-Commerce Design',
    color: '#FDF0E8',
    accent: '#C4614A',
    link: 'https://sheila0001.github.io/noire-co',
    icon: (<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" width="40" height="40"><path d="M6 8h4l4 16h16" /><circle cx="18" cy="30" r="2" /><circle cx="28" cy="30" r="2" /><path d="M10 12h24l-3 12H13L10 12z" /></svg>),
  },
  {
    id: 4,
    label: 'Design 4 — Analytics Dashboard',
    title: 'UniStats Canada',
    description: 'A bilingual interactive dashboard visualizing Ontario university enrolment data, with a bar chart, a line chart, regional filters, and full English/French localization.',
    tag: 'Data Visualization',
    color: '#E8F0F8',
    accent: '#3A6EA8',
    link: 'https://sheila0001.github.io/uni-dashboard',
    icon: (<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" width="40" height="40"><rect x="5" y="24" width="6" height="10" rx="1" /><rect x="17" y="16" width="6" height="18" rx="1" /><rect x="29" y="8" width="6" height="26" rx="1" /><path d="M5 18l12-8 12 6" /></svg>),
  },
];

export default function CaseStudies() {
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
    <section className="case-studies" id="case-studies" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">03 — Work</p>
        <h2 className="section-title fade-in">Case Studies</h2>
        <p className="cs-intro fade-in">
          Four design projects built as part of my UI Design course at the University of Ottawa.
          Each one applies a different set of user-centered design principles to a real-world problem.
        </p>

        <div className="cs-grid">
          {cases.map((c) => (
            <div
              className="cs-card fade-in"
              key={c.id}
              style={{ '--card-bg': c.color, '--card-accent': c.accent }}
            >
              <div className="cs-card-top">
                <div className="cs-icon" style={{ color: c.accent }}>{c.icon}</div>
                <span className="cs-tag" style={{ color: c.accent, background: c.color }}>{c.tag}</span>
              </div>
              <p className="cs-label">{c.label}</p>
              <h3 className="cs-title">{c.title}</h3>
              <p className="cs-desc">{c.description}</p>
              <div className="cs-footer">
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer" className="cs-live-link" style={{ color: c.accent }}>
                    View Project
                  </a>
                ) : (
                  <span className="cs-coming">Coming Soon</span>
                )}
                <span className="cs-arrow">&#8594;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}