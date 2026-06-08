import React, { useEffect, useRef } from 'react';
import './About.css';
import avatar from '../assets/avatar.png';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-in').forEach((node, i) => {
            setTimeout(() => node.classList.add('visible'), i * 120);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">01 — About Me</p>
        <h2 className="section-title fade-in">Who I Am</h2>

        <div className="about-grid">
          <div className="about-img-col fade-in">
            <div className="about-img-frame">
              <img src={avatar} alt="Sheila Sieyoji" />
            </div>
            <div className="about-tag">Software Engineering Student</div>
          </div>

          <div className="about-text-col">
            <p className="about-text fade-in">
              Hi, I am Sheila Sieyoji, a second-year Software Engineering student at
              the University of Ottawa. I am passionate about building things that are
              both functional and meaningful, whether that is a secure cloud
              infrastructure or a clean user-facing interface.
            </p>
            <p className="about-text fade-in">
              Outside the classroom, I have had the chance to work as a Software
              Engineering Co-op at the Communication Security Establishment (CSE),
              where I work with Terraform and cloud infrastructure, and previously
              at Employment and Social Development Canada (ESDC), where I built
              features in an agile team using Microsoft Dynamics 365 and Azure
              DevOps.
            </p>
            <p className="about-text fade-in">
              I am fluent in both French and English, and I bring five years of
              project management experience from my time as a Regional Project Manager
              at Epelle-Moi Canada. I am always looking to grow, collaborate, and
              create impact.
            </p>

            <div className="about-skills fade-in">
              {[
                'Java', 'Python', 'JavaScript', 'TypeScript',
                'Terraform', 'Azure DevOps', 'HTML & CSS', 'SQL',
              ].map((skill) => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>

            <a
              href="mailto:sieyojisheila@gmail.com"
              className="about-cta fade-in"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
