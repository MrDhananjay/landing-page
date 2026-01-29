import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Recruitment from './components/Recruitment';
import Impact from './components/Impact';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Recruitment />
      <Impact />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
