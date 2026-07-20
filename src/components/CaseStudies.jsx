import React, { useEffect, useRef } from 'react';
import './CaseStudies.css';

function LumierePreview() {
  return (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', borderRadius: '8px 8px 0 0' }}>
      <rect width="280" height="140" fill="#1C1C1C"/>
      <rect x="0" y="0" width="280" height="22" fill="#2A2016"/>
      <text x="14" y="15" fill="#C9963E" fontSize="8" fontWeight="700" fontFamily="Georgia, serif">Lumiere Hair Studio</text>
      <rect x="220" y="6" width="46" height="12" rx="6" fill="#C9963E"/>
      <text x="243" y="15" fill="white" fontSize="7" fontWeight="600" textAnchor="middle">Book Now</text>
      <text x="14" y="44" fill="#9C7B65" fontSize="6" letterSpacing="2">OTTAWA, CANADA</text>
      <text x="14" y="60" fill="white" fontSize="13" fontWeight="700" fontFamily="Georgia, serif">Where Every Visit</text>
      <text x="14" y="76" fill="#C9963E" fontSize="13" fontWeight="700" fontFamily="Georgia, serif" fontStyle="italic">Feels Like Art</text>
      <text x="14" y="90" fill="#9C8C84" fontSize="6">Premium hair care for every texture</text>
      <rect x="14" y="100" width="64" height="16" rx="8" fill="#C9963E"/>
      <text x="46" y="111" fill="white" fontSize="6.5" fontWeight="700" textAnchor="middle">Book Now</text>
      <rect x="84" y="100" width="64" height="16" rx="8" fill="transparent" stroke="#C9963E" strokeWidth="1"/>
      <text x="116" y="111" fill="#C9963E" fontSize="6.5" textAnchor="middle">Our Services</text>
      <rect x="160" y="26" width="110" height="108" rx="8" fill="#2A2016"/>
      <rect x="168" y="34" width="46" height="56" rx="6" fill="#1C1C1C" stroke="#C9963E" strokeWidth="0.5"/>
      <text x="191" y="58" fontSize="18" textAnchor="middle">🌸</text>
      <text x="191" y="72" fill="#C9963E" fontSize="6" textAnchor="middle">Balayage</text>
      <text x="191" y="82" fill="#9C8C84" fontSize="5" textAnchor="middle">$160+</text>
      <rect x="222" y="34" width="40" height="56" rx="6" fill="#1C1C1C" stroke="#2A2016" strokeWidth="0.5"/>
      <text x="242" y="58" fontSize="16" textAnchor="middle">✂️</text>
      <text x="242" y="72" fill="#9C8C84" fontSize="6" textAnchor="middle">Cut</text>
      <text x="242" y="82" fill="#9C8C84" fontSize="5" textAnchor="middle">$65+</text>
    </svg>
  );
}

function FloraPreview() {
  return (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', borderRadius: '8px 8px 0 0' }}>
      <rect width="280" height="140" fill="#F0F7F0"/>
      <rect x="0" y="0" width="280" height="22" fill="#1A2E1A"/>
      <text x="14" y="14" fill="#95D5B2" fontSize="8" fontWeight="700" fontFamily="Georgia, serif">Flora Memory</text>
      <text x="14" y="42" fontSize="16" textAnchor="start">🌿</text>
      <text x="40" y="45" fill="#1A2E1A" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Flora Memory</text>
      <text x="40" y="57" fill="#52B788" fontSize="6" letterSpacing="1.5">FLIP · MATCH · REMEMBER</text>
      <text x="14" y="76" fill="#7A9E7E" fontSize="6" letterSpacing="1">CHOOSE A THEME</text>
      <rect x="14" y="81" width="52" height="32" rx="6" fill="#D8F3DC" stroke="#2D6A4F" strokeWidth="1.5"/>
      <text x="40" y="98" fontSize="14" textAnchor="middle">🌸</text>
      <text x="40" y="108" fill="#2D6A4F" fontSize="5.5" fontWeight="700" textAnchor="middle">Flowers ✓</text>
      <rect x="72" y="81" width="52" height="32" rx="6" fill="#F0F7F0" stroke="#C0DD97" strokeWidth="1"/>
      <text x="98" y="98" fontSize="14" textAnchor="middle">🦋</text>
      <text x="98" y="108" fill="#7A9E7E" fontSize="5.5" textAnchor="middle">Animals</text>
      <rect x="130" y="81" width="52" height="32" rx="6" fill="#F0F7F0" stroke="#C0DD97" strokeWidth="1"/>
      <text x="156" y="98" fontSize="14" textAnchor="middle">🪐</text>
      <text x="156" y="108" fill="#7A9E7E" fontSize="5.5" textAnchor="middle">Space</text>
      <rect x="14" y="120" width="230" height="14" rx="7" fill="#2D6A4F"/>
      <text x="129" y="130" fill="white" fontSize="7" fontWeight="700" textAnchor="middle">Start Game →</text>
    </svg>
  );
}

function NoirePreview() {
  return (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', borderRadius: '8px 8px 0 0' }}>
      <rect width="280" height="140" fill="#FAF6F0"/>
      <rect x="0" y="0" width="280" height="22" fill="#FAF6F0" stroke="#E8E3DC" strokeWidth="0.5"/>
      <text x="14" y="15" fill="#1C1C1C" fontSize="9" fontWeight="700" fontFamily="Georgia, serif">Noire <tspan fill="#C9963E">&amp;</tspan> Co.</text>
      <rect x="220" y="5" width="46" height="13" rx="6" fill="#1C1C1C"/>
      <text x="243" y="14.5" fill="white" fontSize="6.5" fontWeight="600" textAnchor="middle">Shop Now</text>
      <rect x="0" y="22" width="140" height="80" fill="#FFFCF8"/>
      <text x="14" y="40" fill="#9C7B65" fontSize="5" letterSpacing="2">PREMIUM SKINCARE</text>
      <text x="14" y="54" fill="#1C1C1C" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Skincare That</text>
      <text x="14" y="67" fill="#1C1C1C" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Celebrates</text>
      <text x="14" y="80" fill="#C9963E" fontSize="11" fontWeight="700" fontFamily="Georgia, serif" fontStyle="italic">Your Skin.</text>
      <rect x="140" y="22" width="140" height="80" fill="#FBF3EE"/>
      <rect x="152" y="30" width="56" height="64" rx="8" fill="#FFF8E7"/>
      <rect x="168" y="34" width="24" height="4" rx="2" fill="#2C1A0E"/>
      <rect x="172" y="28" width="16" height="10" rx="3" fill="#2C1A0E"/>
      <rect x="155" y="38" width="50" height="52" rx="6" fill="#F5E0A0"/>
      <rect x="163" y="58" width="34" height="18" rx="2" fill="white" opacity="0.8"/>
      <rect x="167" y="62" width="26" height="1.5" rx="0.75" fill="#2C1A0E" opacity="0.4"/>
      <rect x="167" y="66" width="22" height="1.5" rx="0.75" fill="#2C1A0E" opacity="0.3"/>
      <rect x="210" y="30" width="60" height="64" rx="8" fill="#F0F7F0"/>
      <ellipse cx="240" cy="52" rx="18" ry="20" fill="#C8E6C9"/>
      <ellipse cx="240" cy="72" rx="22" ry="6" fill="#C8E6C9"/>
      <rect x="229" y="72" width="22" height="14" rx="3" fill="#1B5E20" opacity="0.6"/>
      <rect x="0" y="102" width="280" height="38" fill="#1C1C1C"/>
      <text x="14" y="116" fill="rgba(255,255,255,0.85)" fontSize="6">Use code </text>
      <text x="46" y="116" fill="#C9963E" fontSize="6" fontWeight="700">NOIRE20</text>
      <text x="82" y="116" fill="rgba(255,255,255,0.85)" fontSize="6"> for 20% off your first order</text>
      <rect x="210" y="107" width="56" height="14" rx="7" fill="#C9963E"/>
      <text x="238" y="116.5" fill="white" fontSize="6" fontWeight="700" textAnchor="middle">Claim Offer</text>
    </svg>
  );
}

function DashboardPreview() {
  return (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', borderRadius: '8px 8px 0 0' }}>
      <rect width="280" height="140" fill="#F8F6F2"/>
      <rect x="0" y="0" width="280" height="26" fill="#0F2044"/>
      <rect x="8" y="7" width="36" height="12" rx="2" fill="white" opacity="0.9"/>
      <rect x="8" y="7" width="12" height="12" fill="#D52B1E" opacity="0.9"/>
      <rect x="32" y="7" width="12" height="12" fill="#D52B1E" opacity="0.9"/>
      <rect x="20" y="7" width="12" height="12" fill="white" opacity="0.9"/>
      <text x="52" y="17" fill="white" fontSize="7.5" fontWeight="700" fontFamily="Georgia, serif">UniStats Canada</text>
      <rect x="200" y="8" width="70" height="12" rx="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
      <text x="225" y="17" fill="white" fontSize="6" fontWeight="700" textAnchor="middle">English</text>
      <text x="238" y="17" fill="rgba(255,255,255,0.4)" fontSize="6">|</text>
      <text x="254" y="17" fill="rgba(255,255,255,0.55)" fontSize="6">Français</text>
      <rect x="8" y="32" width="60" height="22" rx="4" fill="white" stroke="#E2DDD8" strokeWidth="0.5"/>
      <rect x="8" y="32" width="3" height="22" rx="2" fill="#2D6A4F"/>
      <text x="16" y="41" fill="#8A827C" fontSize="4.5" fontWeight="600" letterSpacing="0.5">TOTAL UNDERGRADS</text>
      <text x="16" y="50" fill="#1A1A1A" fontSize="8" fontWeight="700" fontFamily="Georgia, serif">332,100</text>
      <rect x="74" y="32" width="60" height="22" rx="4" fill="white" stroke="#E2DDD8" strokeWidth="0.5"/>
      <rect x="74" y="32" width="3" height="22" rx="2" fill="#C9963E"/>
      <text x="82" y="41" fill="#8A827C" fontSize="4.5" fontWeight="600" letterSpacing="0.5">AVG PER UNIV.</text>
      <text x="82" y="50" fill="#1A1A1A" fontSize="8" fontWeight="700" fontFamily="Georgia, serif">33,210</text>
      <rect x="140" y="32" width="60" height="22" rx="4" fill="white" stroke="#E2DDD8" strokeWidth="0.5"/>
      <rect x="140" y="32" width="3" height="22" rx="2" fill="#3A6EA8"/>
      <text x="148" y="41" fill="#8A827C" fontSize="4.5" fontWeight="600" letterSpacing="0.5">LARGEST UNIV.</text>
      <text x="148" y="50" fill="#1A1A1A" fontSize="8" fontWeight="700" fontFamily="Georgia, serif">U of T</text>
      <rect x="206" y="32" width="66" height="22" rx="4" fill="white" stroke="#E2DDD8" strokeWidth="0.5"/>
      <rect x="206" y="32" width="3" height="22" rx="2" fill="#8B6FBF"/>
      <text x="214" y="41" fill="#8A827C" fontSize="4.5" fontWeight="600" letterSpacing="0.5">5-YEAR GROWTH</text>
      <text x="214" y="50" fill="#1A1A1A" fontSize="8" fontWeight="700" fontFamily="Georgia, serif">+5.9%</text>
      <rect x="8" y="60" width="130" height="74" rx="6" fill="white" stroke="#E2DDD8" strokeWidth="0.5"/>
      <text x="14" y="70" fill="#1A1A1A" fontSize="6" fontWeight="700" fontFamily="Georgia, serif">Enrolment by University</text>
      <line x1="14" y1="78" x2="132" y2="78" stroke="#E2DDD8" strokeWidth="0.5"/>
      <line x1="14" y1="95" x2="132" y2="95" stroke="#E8E3DC" strokeWidth="0.3"/>
      <line x1="14" y1="110" x2="132" y2="110" stroke="#E8E3DC" strokeWidth="0.3"/>
      <rect x="20" y="88" width="10" height="22" rx="2" fill="#2D6A4F" opacity="0.75"/>
      <rect x="34" y="82" width="10" height="28" rx="2" fill="#C9963E"/>
      <rect x="48" y="90" width="10" height="20" rx="2" fill="#2D6A4F" opacity="0.75"/>
      <rect x="62" y="93" width="10" height="17" rx="2" fill="#2D6A4F" opacity="0.75"/>
      <rect x="76" y="96" width="10" height="14" rx="2" fill="#2D6A4F" opacity="0.75"/>
      <rect x="90" y="94" width="10" height="16" rx="2" fill="#2D6A4F" opacity="0.75"/>
      <rect x="104" y="97" width="10" height="13" rx="2" fill="#2D6A4F" opacity="0.75"/>
      <line x1="14" y1="88" x2="132" y2="88" stroke="#C9963E" strokeWidth="0.8" strokeDasharray="3 2"/>
      <text x="14" y="122" fill="#8A827C" fontSize="4">U of T</text>
      <text x="28" y="122" fill="#8A827C" fontSize="4">York</text>
      <text x="44" y="122" fill="#8A827C" fontSize="4">TMU</text>
      <text x="58" y="122" fill="#8A827C" fontSize="4">uOtt</text>
      <text x="74" y="122" fill="#8A827C" fontSize="4">Carl</text>
      <text x="86" y="122" fill="#8A827C" fontSize="4">West</text>
      <text x="100" y="122" fill="#8A827C" fontSize="4">Mac</text>
      <rect x="144" y="60" width="128" height="74" rx="6" fill="white" stroke="#E2DDD8" strokeWidth="0.5"/>
      <text x="150" y="70" fill="#1A1A1A" fontSize="6" fontWeight="700" fontFamily="Georgia, serif">Enrolment Trends (2019–2023)</text>
      <line x1="150" y1="78" x2="266" y2="78" stroke="#E2DDD8" strokeWidth="0.5"/>
      <polyline points="158,108 178,104 198,100 218,96 238,92" fill="none" stroke="#2D6A4F" strokeWidth="1.5"/>
      <polyline points="158,112 178,109 198,106 218,103 238,100" fill="none" stroke="#C9963E" strokeWidth="1.5"/>
      <polyline points="158,114 178,111 198,108 218,105 238,102" fill="none" stroke="#3A6EA8" strokeWidth="1.5"/>
      <circle cx="238" cy="92" r="2.5" fill="#2D6A4F"/>
      <circle cx="238" cy="100" r="2.5" fill="#C9963E"/>
      <circle cx="238" cy="102" r="2.5" fill="#3A6EA8"/>
      <text x="158" y="122" fill="#8A827C" fontSize="4">2019</text>
      <text x="188" y="122" fill="#8A827C" fontSize="4">2020</text>
      <text x="218" y="122" fill="#8A827C" fontSize="4">2023</text>
      <line x1="150" y1="95" x2="266" y2="95" stroke="#E8E3DC" strokeWidth="0.3"/>
      <line x1="150" y1="108" x2="266" y2="108" stroke="#E8E3DC" strokeWidth="0.3"/>
    </svg>
  );
}

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
    Preview: LumierePreview,
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
    Preview: FloraPreview,
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
    Preview: NoirePreview,
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
    Preview: DashboardPreview,
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
              <div className="cs-preview">
                <c.Preview />
              </div>

              <div className="cs-card-body">
                <div className="cs-card-top">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}