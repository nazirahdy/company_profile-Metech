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
  const API_BASE_URL = 'http://127.0.0.1:8000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/messages`, formData);
      
      if (response.status === 201 || response.status === 200) {
        alert('Pesan Terkirim! Silakan cek menu Contacts di Admin.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error("Detail Error:", error.response?.data);
      alert("Gagal mengirim pesan. Pastikan backend Laravel menyala.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact <span style={{ color: '#00ced1' }}>Us</span></h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>

        <div className="row g-4">
          {/* INFO KONTAK & MAPS */}
          <div className="col-lg-5">
            <div className="card p-4 shadow-sm border-0 h-100">
              {/* Address */}
              <div className="d-flex mb-4">
                <div className="icon-box me-3">
                  <i className="bi bi-geo-alt-fill fs-4" style={{ color: '#00ced1' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Address</h6>
                  <p className="text-muted small mb-0">
                    Jln. Kawaluyaan indah XXI no.8<br />
                    Kota Bandung - Jawa Barat
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="d-flex mb-4">
                <div className="icon-box me-3">
                  <i className="bi bi-telephone-fill fs-4" style={{ color: '#00ced1' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="text-muted small mb-0">+62 878-2323-7339</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="d-flex mb-4">
                <div className="icon-box me-3">
                  <i className="bi bi-envelope-fill fs-4" style={{ color: '#00ced1' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email Us</h6>
                  <p className="text-muted small mb-0">info@me-tech.id</p>
                </div>
              </div>

              {/* Open Hours */}
              <div className="d-flex mb-4">
                <div className="icon-box me-3">
                  <i className="bi bi-clock-fill fs-4" style={{ color: '#00ced1' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Open Hours</h6>
                  <p className="text-muted small mb-0">
                    Monday - Friday<br />
                    10:00AM - 06:00PM
                  </p>
                </div>
              </div>

              {/* MAPS: Menggunakan koordinat Bandung umum sebagai fallback */}
              <div className="mt-2 rounded-4 overflow-hidden border shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.783100222074!2d107.6599298!3d-6.9387431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d93427f7f5%3A0x6764726f1c712803!2sJl.%20Kawaluyaan%20Indah%20XXI%2C%20Jatisari%2C%20Kec.%20Buahbatu%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* FORM KONTAK */}
          <div className="col-lg-7">
            <form className="p-4 shadow-sm rounded-4 bg-white border-0 h-100" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Nama Lengkap</label>
                  <input type="text" name="name" className="form-control bg-light border-0 py-2" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Email</label>
                  <input type="email" name="email" className="form-control bg-light border-0 py-2" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">No Telepon</label>
                  <input type="text" name="phone" className="form-control bg-light border-0 py-2" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Subjek</label>
                  <input type="text" name="subject" className="form-control bg-light border-0 py-2" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold">Pesan</label>
                  <textarea name="message" className="form-control bg-light border-0 py-2" rows="11" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" disabled={loading} className="btn text-white px-5 py-3 rounded-pill fw-bold w-100" style={{ backgroundColor: '#00ced1', border: 'none' }}>
                    {loading ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;