import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Leaders = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = 'http://127.0.0.1:8000';

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/leaders`);
        setLeaders(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching leaders:", error);
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    // ID team sangat penting untuk fungsi tombol kembali nanti
    <section id="team" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold" style={{ color: '#1a1a3d', fontSize: '2.5rem' }}>
            Our <span style={{ color: '#00ced1' }}>Leaders</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {leaders.slice(0, 3).map((leader, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6" key={leader.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="leader-item text-center">
                <div className="img-circle-frame mx-auto mb-4 shadow-sm">
                  <img 
                    src={`${API_BASE_URL}/storage/${leader.photo}`} 
                    className="img-fluid rounded-circle" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = "https://via.placeholder.com/180"; }} 
                    alt={leader.name}
                  />
                </div>
                <h5 className="fw-bold mb-1" style={{ color: '#1a1a3d' }}>{leader.name}</h5>
                <p className="text-muted small text-uppercase" style={{ letterSpacing: '1px' }}>{leader.position}</p>
              </div>
            </div>
          ))}
        </div>

        {leaders.length > 3 && (
          <div className="text-center mt-5" data-aos="zoom-in">
            <Link to="/team" className="btn-see-more">
              See All Team <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .img-circle-frame { width: 180px; height: 180px; border-radius: 50%; border: 1px solid #f0f0f0; padding: 8px; background: #fff; transition: 0.4s ease; }
        .leader-item:hover .img-circle-frame { transform: translateY(-10px); border-color: #00ced1; box-shadow: 0 15px 30px rgba(0, 206, 209, 0.2) !important; }
        .btn-see-more { display: inline-block; padding: 12px 40px; border-radius: 50px; background: #00ced1; color: #fff; font-weight: 700; text-decoration: none; transition: 0.3s ease; }
        .btn-see-more:hover { background: #00ced1; color: #fff; transform: scale(1.05); }
      `}</style>
    </section>
  );
};

export default Leaders;