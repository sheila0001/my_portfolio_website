import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowIWork from './components/HowIWork';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowIWork />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
