import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { name: 'HOME', link: '#home' },
  { name: 'ABOUT', link: '#about' },
  { name: 'SERVICES', link: '#services' },
  { name: 'PORTFOLIO', link: '#portfolio' },
  { name: 'BLOG', link: '#blog' },
  { name: 'TESTIMONI', link: '#testimonials' },
  { name: 'CONTACT', link: '#contact' },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('HOME');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const options = {
      root: null,
      // Ubah rootMargin agar deteksi lebih luas, terutama untuk bagian bawah halaman
      rootMargin: '-20% 0px -20% 0px', 
      threshold: 0.1 // Sedikit bagian section terlihat sudah cukup untuk mengaktifkan menu
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

    // Ambil semua section yang ada ID-nya
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Tambahan: Logika khusus untuk mendeteksi jika sudah mentok di paling bawah (Contact)
    const handleBottomScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveMenu('CONTACT');
      }
    };

    window.addEventListener('scroll', handleBottomScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleBottomScroll);
    };
  }, [isHomePage]);

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
      const offset = 80; 
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