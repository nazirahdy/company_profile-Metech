import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="home" style={{ padding: '100px 0' }}>
      <div className="container text-center" data-aos="fade-up">
        <h1 className="hero-title" style={{ fontWeight: 800, fontSize: '3.5rem', color: '#333' }}>
          PT. MILENIAL ELITE TEKNOLOGI
        </h1>
        <h2 className="hero-subtitle" style={{ color: '#00ced1', fontWeight: 700, marginTop: '10px' }}>
          Innovative Technology Solution
        </h2>
        <p className="hero-text" style={{ maxWidth: '700px', margin: '20px auto', color: '#666' }}>
          Me-Tech hadir memberikan solusi teknologi yang inovatif untuk bisnis Anda
        </p>
        
        {/* Tombol Hubungi Kami dengan warna #00ced1 */}
        <a 
          href="#contact" 
          className="btn-hubungi mt-4 d-inline-block text-decoration-none"
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
          Hubungi Kami →
        </a>
      </div>

      {/* Style untuk efek hover tombol */}
      <style>{`
        .btn-hubungi:hover {
          background-color: transparent !important;
          color: #00ced1 !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 206, 209, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;