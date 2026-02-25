import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaders = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = 'http://127.0.0.1:8000';

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/leaders`);
        setLeaders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching leaders data:", error);
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  if (loading) return <div className="text-center py-5 bg-white">Loading...</div>;

  return (
    <section 
      id="team" 
      className="py-3" 
      style={{ 
        backgroundColor: '#ffffff', 
        marginTop: '-50px', 
        paddingTop: '80px', 
        position: 'relative',
        zIndex: 2,
        border: 'none'
      }}
    >
      <div className="container text-center">
        <div className="mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#1a1a3d' }}>
            Our <span style={{ color: '#00ced1' }}>Leaders</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto 0', borderRadius: '10px' }}></div>
          <p className="text-muted mt-3">The talented people behind Me-Tech who drive innovation every day.</p>
        </div>

        <div className="row g-4 justify-content-center m-0">
          {leaders.map((leader, index) => (
            <div className="col-lg-3 col-md-6" key={leader.id || index}>
              <div className="p-3" style={{ backgroundColor: 'transparent' }}>
                <div 
                  className="img-container mb-4 mx-auto"
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    border: '1px solid #eee', // Border default tipis
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    transition: '0.4s ease',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <img 
                    /* PERBAIKAN: Menggunakan .photo sesuai Migration */
                    src={`${API_BASE_URL}/storage/${leader.photo}`} 
                    alt={leader.name} 
                    className="img-fluid rounded-circle" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    /* Placeholder jika foto gagal load */
                    onError={(e) => { e.target.src = "https://via.placeholder.com/180?text=No+Photo"; }} 
                  />
                </div>
                <h5 className="fw-bold mb-1" style={{ color: '#1a1a3d' }}>{leader.name}</h5>
                {/* PERBAIKAN: Menggunakan .position sesuai Migration */}
                <p className="text-muted small" style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {leader.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .img-container:hover { 
            transform: translateY(-10px); 
            border-color: #00ced1 !important; 
            box-shadow: 0 15px 30px rgba(0, 206, 209, 0.2) !important;
        }
      `}</style>
    </section>
  );
};

export default Leaders;