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
        // Kita balik (reverse) agar yang baru diinput di Filament muncul pertama
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
        <div className="mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#1a1a3d' }}>
            Our <span style={{ color: '#00ced1' }}>Portfolio</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto 0', borderRadius: '10px' }}></div>
        </div>
        
        {loading ? (
          <div className="spinner-border text-info" role="status"></div>
        ) : (
          <div className="row g-4 mb-5">
            {projects.map((p) => (
              <div className="col-lg-4 col-md-6 col-6" key={p.id}>
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
        )}

        <Link to="/portfolio-explore" className="btn text-white rounded-pill px-5 py-2 fw-bold" style={{ backgroundColor: '#00ced1' }}>
          See All Projects →
        </Link>
      </div>
      <style>{`
        .portfolio-hover { transition: 0.3s; }
        .portfolio-hover:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
      `}</style>
    </section>
  );
};

export default Portfolio;