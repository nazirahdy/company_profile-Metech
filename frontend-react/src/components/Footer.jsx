import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-white pt-5 pb-4 border-top mt-auto">
      <div className="container">
        <div className="row gy-4">
          
          {/* Logo & Social Media */}
          <div className="col-lg-4 col-md-12 footer-info text-center text-lg-start">
            <div className="logo mb-3">
              <img 
                src="logo metech.png" 
                alt="Me-tech Logo" 
                style={{ height: '50px' }} 
              />
            </div>
            <div className="social-links d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
              <a href="https://www.facebook.com/MilenialEliteTeknologi" target="_blank" rel="noreferrer" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/metech.id/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/metechid/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-4 col-6 footer-links">
            <h5 className="fw-bold mb-3" style={{ color: '#00ced1' }}>Useful Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><HashLink to="/#home" className="text-muted text-decoration-none">Home</HashLink></li>
              <li className="mb-2"><HashLink to="/#about" className="text-muted text-decoration-none">About us</HashLink></li>
              <li className="mb-2"><HashLink to="/#services" className="text-muted text-decoration-none">Services</HashLink></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-lg-3 col-md-4 col-6 footer-links">
            <h5 className="fw-bold mb-3" style={{ color: '#00ced1' }}>Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="https://produk.me-tech.id/layanan-kami/" className="text-muted text-decoration-none">Software Development</a></li>
              <li className="mb-2"><a href="https://mepay.co.id/" className="text-muted text-decoration-none">Digital Payment</a></li>
              <li className="mb-2"><a href="https://produk.me-tech.id/online-ticketing/" className="text-muted text-decoration-none">Online Ticketing</a></li>
              <li className="mb-2"><a href="https://produk.me-tech.id/custom-apps-sistem-umroh-dan-haji/" className="text-muted text-decoration-none">Umrah & Haji Apps</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-4 col-12 footer-contact text-center text-md-start">
            <h5 className="fw-bold mb-3" style={{ color: '#00ced1' }}>Contact Us</h5>
            <p className="text-muted small">
              Jln. Kawaluyaan indah XXI no.8<br />
              Kota Bandung – Jawa Barat<br /><br />
              <strong>Phone:</strong> +62 878-2323-7339<br />
              <strong>Email:</strong> info@me-tech.id
            </p>
          </div>

        </div>
      </div>

      {/* Baris Copyright */}
      <div className="container mt-5 pt-3 border-top">
        <div className="text-center text-muted small">
          © 2026 <strong>PT MILENIAL ELITE TEKNOLOGI</strong>. All Rights Reserved.
        </div>
      </div>

      <style>{`
        .social-icon {
          width: 36px;
          height: 36px;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #333;
          transition: 0.3s;
          text-decoration: none;
        }
        .social-icon:hover {
          background: #00ced1;
          color: white;
          transform: translateY(-3px);
        }
        .footer-links a:hover {
          color: #00ced1 !important;
          padding-left: 5px;
          transition: 0.3s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;