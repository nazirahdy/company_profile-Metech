import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = 'http://localhost:8000';

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/portfolios`)
      .then(res => {
        // Kita balik (reverse) agar yang baru diinput muncul pertama
        setProjects(res.data.reverse().slice(0, 6)); 
        setLoading(false);
      })
      .catch(err => {
        console.error('Gagal fetch data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="portfolio" className="py-5 bg-white">
      <div className="container text-center">
        <div className="mb-5" data-aos="fade-up">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#1a1a3d' }}>
            Our <span style={{ color: '#00ced1' }}>Portfolio</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto 0', borderRadius: '10px' }}></div>
        </div>
        
        {loading ? (
          <div className="spinner-border text-info" role="status"></div>
        ) : (
          <>
            <div className="row g-4 mb-5">
              {projects.map((p, index) => (
                <div className="col-lg-4 col-md-6 col-6" key={p.id} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Link to={`/portfolio/${p.id}`} className="text-decoration-none">
                    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden portfolio-hover">
                      <img 
                        src={`${API_BASE_URL}/storage/${p.image}`} 
                        className="card-img-top" 
                        alt={p.title} 
                        style={{ aspectRatio: '4/3', objectFit: 'cover' }} 
                      />
                      <div className="p-3 text-start">
                        <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '15px' }}>{p.title}</h6>
                        <small className="text-info fw-bold">{p.category?.nama || 'General'}</small>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* TOMBOL SEE ALL YANG DISAMAKAN DENGAN LEADERS */}
            <div className="text-center mt-2" data-aos="zoom-in">
              <Link to="/portfolio-explore" className="btn-see-more-portfolio">
                See All Projects <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </>
        )}
      </div>

      <style>{`
        .portfolio-hover { transition: 0.3s; }
        .portfolio-hover:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
        
        /* Style Tombol yang disamakan dengan Leaders */
        .btn-see-more-portfolio { 
          display: inline-block; 
          padding: 12px 40px; 
          border-radius: 50px; 
          background-color: #00ced1; 
          color: #fff; 
          font-weight: 700; 
          text-decoration: none; 
          transition: 0.3s ease; 
          border: 2px solid #00ced1;
        }
        
        .btn-see-more-portfolio:hover { 
          background-color: #00ced1; 
          color: #fff; 
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 206, 209, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;