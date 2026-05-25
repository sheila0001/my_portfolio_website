import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">Sheila Sieyoji</p>
          <p className="footer-sub">Software Engineering Student &mdash; University of Ottawa</p>
        </div>
        <div className="footer-right">
          <a href="mailto:sieyojisheila@gmail.com" className="footer-link">
            sieyojisheila@gmail.com
          </a>
          <a href="tel:8736600339" className="footer-link">
            (873) 660-0339
          </a>
        </div>
      </div>
      <div className="container footer-copy">
        <p>&copy; {new Date().getFullYear()} Sheila Sieyoji. All rights reserved.</p>
      </div>
    </footer>
  );
}
