import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const API_BASE_URL = 'http://127.0.0.1:8000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await axios.post(`${API_BASE_URL}/api/messages`, formData);
      if (response.status === 201 || response.status === 200) {
        setStatus({ 
          type: 'success', 
          message: 'Pesan Anda telah kami terima. Tim Me-tech akan segera menghubungi Anda kembali.' 
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus({ 
        type: 'danger', 
        message: 'Gagal mengirim pesan. Silakan coba lagi nanti.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#1a1a3d' }}>Contact <span style={{ color: '#00ced1' }}>Us</span></h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto', borderRadius: '10px' }}></div>
          <p className="text-muted">Hubungi kami untuk kolaborasi atau pertanyaan lebih lanjut</p>
        </div>

        <div className="row g-4">
          {/* INFO KONTAK */}
          <div className="col-lg-5">
            <div className="card p-4 shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
              <div className="d-flex mb-4 align-items-center">
                <div className="icon-circle me-3 shadow-sm">
                  <i className="bi bi-geo-alt-fill fs-5" style={{ color: '#00ced1' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Address</h6>
                  <p className="text-muted small mb-0">Jln. Kawaluyaan indah XXI no.8, Bandung</p>
                </div>
              </div>

              <div className="d-flex mb-4 align-items-center">
                <div className="icon-circle me-3 shadow-sm">
                  <i className="bi bi-telephone-fill fs-5" style={{ color: '#00ced1' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Call Us</h6>
                  <p className="text-muted small mb-0">+62 859-4201-1511</p>
                </div>
              </div>

              <div className="d-flex mb-4 align-items-center">
                <div className="icon-circle me-3 shadow-sm">
                  <i className="bi bi-envelope-fill fs-5" style={{ color: '#00ced1' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Email Us</h6>
                  <p className="text-muted small mb-0">info@me-tech.id</p>
                </div>
              </div>

              <div className="mt-2 rounded-4 overflow-hidden border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.672439185125!2d107.6621374!3d-6.9297316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7dfd90a7863%3A0xc682245b0d065842!2sJl.%20Kawaluyaan%20Indah%20XXI%20No.8%2C%20Jatisari%2C%20Kec.%20Buahbatu%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040286!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%" height="280" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* FORM KONTAK */}
          <div className="col-lg-7">
            <div className="p-4 shadow-sm rounded-4 bg-white border-0 h-100 position-relative" style={{ overflow: 'hidden' }}>
              
              {/* Overlay Konfirmasi */}
              {status.type && (
                <div className="status-overlay-direct">
                  <div className="text-center">
                    <div className="success-checkmark-container">
                      <div className={`check-icon-glow ${status.type === 'success' ? 'glow-turquoise' : 'glow-red'}`}>
                        {status.type === 'success' ? (
                          <i className="bi bi-check-lg"></i>
                        ) : (
                          <i className="bi bi-x-lg"></i>
                        )}
                      </div>
                    </div>
                    
                    <h2 className="fw-bold mt-4 animate-text" style={{ color: '#1a1a3d' }}>
                      {status.type === 'success' ? 'Terima Kasih!' : 'Oops!'}
                    </h2>
                    
                    <p className="text-muted px-4 mb-4 animate-text" style={{ maxWidth: '400px', margin: '0 auto' }}>
                      {status.message}
                    </p>
                    
                    <button 
                      className="btn-finish-premium animate-text" 
                      onClick={() => setStatus({ type: null, message: '' })}
                    >
                      SELESAI
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className={status.type ? 'invisible' : ''}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Nama Lengkap</label>
                    <input type="text" name="name" className="form-control bg-light border-0 py-2 custom-input" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Email</label>
                    <input type="email" name="email" className="form-control bg-light border-0 py-2 custom-input" value={formData.email} onChange={handleChange} required placeholder="name@example.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">No Telepon</label>
                    <input type="text" name="phone" className="form-control bg-light border-0 py-2 custom-input" value={formData.phone} onChange={handleChange} required placeholder="0812..." />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Subjek</label>
                    <input type="text" name="subject" className="form-control bg-light border-0 py-2 custom-input" value={formData.subject} onChange={handleChange} required placeholder="Konsultasi Proyek" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-bold">Pesan</label>
                    <textarea name="message" className="form-control bg-light border-0 py-2 custom-input" rows="8" value={formData.message} onChange={handleChange} required placeholder="Tuliskan pesan Anda..."></textarea>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button type="submit" disabled={loading} className="btn text-white px-5 py-3 rounded-pill fw-bold w-100 shadow-sm btn-submit-contact">
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Mengirim...
                        </>
                      ) : 'Kirim Pesan Sekarang'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .icon-circle {
          width: 45px; height: 45px; background: #f0fdfa; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        
        .custom-input:focus {
          background-color: #fff !important;
          box-shadow: 0 0 0 3px rgba(0, 206, 209, 0.1);
          border: 1px solid #00ced1 !important; outline: none;
        }

        .btn-submit-contact {
          background-color: #00ced1; transition: all 0.3s ease; border: none;
        }
        .btn-submit-contact:hover {
          background-color: #1a1a3d; transform: translateY(-2px);
        }

        /* OVERLAY KONFIRMASI */
        .status-overlay-direct {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255, 255, 255, 0.98);
          display: flex; align-items: center; justify-content: center;
          z-index: 10; border-radius: 24px;
        }

        /* EFEK CAHAYA CEKLIS */
        .check-icon-glow {
          width: 100px; height: 100px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 3.5rem; margin: 0 auto; position: relative;
          animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .glow-turquoise {
          color: #00ced1; background: #fff;
          box-shadow: 0 0 20px rgba(0, 206, 209, 0.3), 0 0 40px rgba(0, 206, 209, 0.1);
          border: 3px solid #00ced1;
        }

        /* BUTTON SELESAI PREMIUM */
        .btn-finish-premium {
          background: linear-gradient(135deg, #00ced1 0%, #008b8b 100%);
          color: white; border: none; padding: 12px 50px;
          border-radius: 50px; font-weight: 700; font-size: 0.9rem;
          letter-spacing: 2px; transition: all 0.4s ease;
          box-shadow: 0 10px 20px rgba(0, 206, 209, 0.4);
          cursor: pointer; position: relative; overflow: hidden;
        }

        .btn-finish-premium:hover {
          background: linear-gradient(135deg, #00ced1 0%, #008b8b 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 206, 209, 0.4);
          color: white;
        }

        .btn-finish-premium:active {
          transform: translateY(-1px);
        }

        /* ANIMASI */
        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-text {
          animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;