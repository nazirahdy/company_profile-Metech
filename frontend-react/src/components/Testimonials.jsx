import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const API_BASE_URL = 'http://127.0.0.1:8000';

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/testimonials`)
      .then(res => setTestimonials(res.data))
      .catch(err => console.error("Error fetching testimonials:", err));
  }, []);

  return (
    <section id="testimonials" className="py-5 bg-light" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Client <span style={{ color: '#00ced1' }}>Testimonials</span></h2>
          <div style={{ width: '50px', height: '5px', background: '#00ced1', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>

        <div className="row g-4">
          {testimonials.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="testimonial-card shadow-sm h-100 p-4 text-center">
                
                {/* Icon Tanda Kutip Dekoratif */}
                <div className="quote-mark">“</div>

                <div className="mb-4">
                  <img 
                    src={item.avatar ? `${API_BASE_URL}/storage/${item.avatar}` : 'https://via.placeholder.com/80'} 
                    className="avatar-img shadow"
                    alt={item.name}
                  />
                </div>

                <div className="content-area">
                  <p className="testimonial-text text-secondary mb-4">
                    {item.content}
                  </p>
                  
                  <div className="client-info">
                    <h6 className="fw-bold mb-1 text-dark" style={{ letterSpacing: '0.5px' }}>{item.name}</h6>
                    <small className="position-tag">{item.position}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Langsung di dalam Komponen */}
      <style>{`
        .testimonial-card {
          background: #ffffff;
          border-radius: 25px;
          border: none;
          transition: all 0.3s ease-in-out;
          position: relative;
          z-index: 1;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 206, 209, 0.15) !important;
        }

        .quote-mark {
          position: absolute;
          top: 10px;
          right: 30px;
          font-size: 80px;
          color: #00ced1;
          opacity: 0.1;
          font-family: serif;
          line-height: 1;
        }

        .avatar-img {
          width: 90px;
          height: 90px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #fff;
          outline: 2px solid #00ced1;
        }

        .testimonial-text {
          font-style: italic;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .position-tag {
          color: #00ced1;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          background: rgba(0, 206, 209, 0.08);
          padding: 4px 12px;
          border-radius: 50px;
        }

        .bg-light {
          background-color: #f9fbfb !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;