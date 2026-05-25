import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">Sheila Sieyoji</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#how-i-work">How I Work</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li>
            <a
              href="mailto:sieyojisheila@gmail.com"
              className="nav-cta"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
