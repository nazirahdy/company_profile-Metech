import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// 1. Pindahkan menuItems ke luar agar tidak menyebabkan warning di useEffect
const menuItems = [
  { name: 'HOME', link: '#home' },
  { name: 'ABOUT', link: '#about' },
  { name: 'SERVICES', link: '#services' },
  { name: 'PORTFOLIO', link: '#portfolio' },
  { name: 'BLOG', link: '#blog' },
  { name: 'TESTIMONIAL', link: '#testimonials' },
  { name: 'CONTACT', link: '#contact' },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('HOME');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // FUNGSI 1: Deteksi otomatis menu aktif berdasarkan posisi scroll
  useEffect(() => {
    if (!isHomePage) return;

    const options = {
      root: null,
      rootMargin: '-150px 0px -50% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const currentItem = menuItems.find(item => item.link === `#${id}`);
          if (currentItem) setActiveMenu(currentItem.name);
        }
      });
    }, options);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
    // Sekarang hanya butuh isHomePage, garis kuning akan hilang
  }, [isHomePage]);

  // FUNGSI 2: Handle klik navigasi
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveMenu(item.name);

    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        scrollToSection(item.link.substring(1));
      }, 300);
    } else {
      scrollToSection(item.link.substring(1));
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white custom-nav fixed-top shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => setActiveMenu('HOME')}>
          <img 
            src="/logo metech.png" 
            alt="Me-tech Logo" 
            className="nav-logo-animate"
            style={{ height: '40px' }}
          />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-2">
            {menuItems.map((item) => (
              <li className="nav-item position-relative" key={item.name}>
                <a 
                  className={`nav-link fw-bold px-3 ${activeMenu === item.name ? 'active-item' : ''}`} 
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{
                    color: activeMenu === item.name ? '#00ced1' : '#888',
                    fontSize: '14px',
                    transition: '0.3s'
                  }}
                >
                  {item.name}
                  <span className={`nav-underline ${activeMenu === item.name ? 'show' : ''}`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .nav-link {
          position: relative;
          padding-bottom: 5px;
          cursor: pointer;
        }

        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background-color: #00ced1;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 10px;
        }

        .nav-underline.show {
          width: 70%;
        }

        .nav-link:hover {
          color: #00ced1 !important;
        }

        .nav-logo-animate:hover {
          transform: scale(1.1);
          transition: 0.3s;
        }

        @media (max-width: 991px) {
          .nav-underline { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;