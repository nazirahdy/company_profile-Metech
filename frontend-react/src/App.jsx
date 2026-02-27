import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Komponen Global
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Komponen Landing Page
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Leaders from './components/Leaders';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials'; // Import Testimonials Baru

// Komponen Portfolio
import Portfolio from './components/portfolioc/Portfolio'; 
import FullPortfolio from './components/portfolioc/FullPortfolio';
import PortfolioDetail from './components/portfolioc/PortfolioDetail';

// Komponen Blog
import Blog from './components/Blogger/Blog';
import FullBlog from './components/Blogger/FullBlog'; 
import BlogDetail from './components/Blogger/BlogDetail';

import "./App.css";

function AppContent() {
  const location = useLocation();
  
  // Navbar disembunyikan hanya jika diperlukan
  const hideNavbarPaths = ['/portfolio-explore-hidden']; 
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="App d-flex flex-column min-vh-100">
      {showNavbar && <Navbar />}
      
      <div className="flex-grow-1">
        <Routes>
          {/* HALAMAN UTAMA (LANDING PAGE) */}
          <Route path="/" element={
            <main>
              <Hero />
              <section id="about"><About /></section>
              <Philosophy />
              <VisionMission />
              <Features />
              <section id="services"><Services /></section>
              <section id="portfolio"><Portfolio /></section>

              <section id="blog"><Blog /></section>
              <Leaders />
              {/* SECTION TESTIMONI DI SINI */}
              <section id="testimonials"><Testimonials /></section>
              <Clients />
              <section id="contact"><Contact /></section>
            </main>
          } />

          {/* HALAMAN EKSPLORASI PORTFOLIO */}
          <Route path="/portfolio-explore" element={<FullPortfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />

          {/* HALAMAN EKSPLORASI BLOG */}
          <Route path="/blog" element={<FullBlog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      mirror: false 
    });
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;