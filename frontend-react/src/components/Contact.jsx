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
      // Menggunakan 'response' agar garis merah di VS Code hilang
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
              <div className="mb-3">
                <h6 className="fw-bold"><i className="bi bi-geo-alt-fill me-2" style={{ color: '#00ced1' }}></i> Lokasi</h6>
                <p className="text-muted small">Bandung, Jawa Barat, Indonesia</p>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold"><i className="bi bi-envelope-fill me-2" style={{ color: '#00ced1' }}></i> Email</h6>
                <p className="text-muted small">info@metech.co.id</p>
              </div>

              {/* MAPS FIX: Link Embed Bandung Valid */}
              <div className="mt-2 rounded-4 overflow-hidden border shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.573116!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398251077d%3A0x1116c478a87677a2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%" 
                  height="280" 
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
            <form className="p-4 shadow-sm rounded-4 bg-white border-0" onSubmit={handleSubmit}>
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
                  <textarea name="message" className="form-control bg-light border-0 py-2" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" disabled={loading} className="btn text-white px-5 py-2 rounded-pill fw-bold" style={{ backgroundColor: '#00ced1', border: 'none' }}>
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