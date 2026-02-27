import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = 'http://127.0.0.1:8000';

  useEffect(() => {
    const fetchAllLeaders = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/leaders`);
        setLeaders(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all team:", error);
        setLoading(false);
      }
    };
    fetchAllLeaders();
    window.scrollTo(0, 0); // Pastikan halaman mulai dari atas
  }, []);

  if (loading) return <div className="text-center py-5 mt-5">Loading Full Team...</div>;

  return (
    <div className="py-5" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <div className="container mt-5">
        
        {/* Judul Halaman */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#1a1a3d', fontSize: '2.5rem' }}>
            Meet Our <span style={{ color: '#00ced1' }}>Full Team</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto', borderRadius: '10px' }}></div>
          <p className="text-muted">The talented people behind Me-Tech who drive innovation every day.</p>
        </div>
        
        {/* Grid 3 Kolom Kesamping */}
        <div className="row g-5 justify-content-center">
          {leaders.map((leader) => (
            <div className="col-lg-4 col-md-4 col-sm-6 text-center" key={leader.id}>
              <div className="full-team-item">
                <div className="img-circle-frame mx-auto mb-4">
                  <img 
                    src={`${API_BASE_URL}/storage/${leader.photo}`} 
                    className="w-100 h-100 rounded-circle" 
                    style={{ objectFit: 'cover' }}
                    alt={leader.name}
                    onError={(e) => { e.target.src = "https://via.placeholder.com/180"; }}
                  />
                </div>
                <h5 className="fw-bold mb-1" style={{ color: '#1a1a3d' }}>{leader.name}</h5>
                <p className="text-muted small text-uppercase" style={{ letterSpacing: '1px' }}>{leader.position}</p>
              </div>
            </div>
          ))}
        </div>

       {/* TOMBOL KEMBALI DI BAWAH (Ke Halaman Home) */}
        <div className="text-center mt-5 pt-5">
        <Link 
            to="/" 
            className="btn-kembali-home text-decoration-none d-inline-block"
            style={{
            backgroundColor: '#00ced1',
            color: '#fff',
            padding: '12px 30px',
            borderRadius: '50px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            border: '2px solid #00ced1'
            }}
        >
            <i className="bi bi-house-door me-2"></i> Kembali 
        </Link>
        </div>

        <style>{`
        .btn-kembali-home:hover {
            background-color: transparent !important;
            color: #00ced1 !important;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 206, 209, 0.2);
        }
        `}</style>

      </div>

      <style>{`
        .img-circle-frame {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 1px solid #eee;
          padding: 8px;
          background: #fff;
          transition: 0.4s ease;
        }
        
        .full-team-item:hover .img-circle-frame {
          transform: translateY(-8px);
          border-color: #00ced1;
          box-shadow: 0 10px 25px rgba(0, 206, 209, 0.2);
        }

        .btn-back-home {
          display: inline-block;
          text-decoration: none;
          color: #00ced1;
          font-weight: 700;
          padding: 12px 35px;
          border-radius: 50px;
          border: 2px solid #00ced1;
          transition: 0.3s ease;
        }

        .btn-back-home:hover {
          background: #00ced1;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 206, 209, 0.2);
        }
      `}</style>
    </div>
  );
};

export default TeamPage;