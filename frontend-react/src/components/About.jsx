import React from 'react';

const About = () => {
  return (
    <section 
      className="about-section py-5 position-relative overflow-hidden" 
      id="about" 
      style={{ backgroundColor: '#ffffff', margin: 0, border: 'none' }}
    >
      {/* Dekorasi Bulatan Latar Belakang */}
      <div className="position-absolute" style={{ top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(0, 206, 209, 0.05)', borderRadius: '50%', zIndex: 0 }}></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title fw-bold mt-2" style={{ fontSize: '2.8rem', color: '#1a1a3d' }}>
            About <span style={{ color: '#00ced1' }}>Us</span>
          </h2>
          {/* Garis Bawah Tetap Seperti Awal (Turquoise Solid) */}
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>

        <div className="row align-items-center g-5">
          {/* Sisi Gambar dengan Frame Modern */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image-wrapper p-2">
              <div className="image-border-decoration"></div>
              <img 
                src="team.jpg" 
                className="img-fluid rounded-5 shadow-lg position-relative" 
                alt="Me-Tech Team" 
                style={{ zIndex: 2, border: '5px solid white' }}
              />
              {/* Badge kecil pemanis */}
              <div className="stats-badge shadow-lg d-none d-md-block">
                <h4 className="fw-bold mb-0 text-white" style={{ fontSize: '1.1rem' }}>Trustworthy</h4>
                <small style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>IT Partner</small>
              </div>
            </div>
          </div>

          {/* Sisi Teks */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="ps-lg-4">
              <h3 className="fw-bold mb-3" style={{ color: '#1a1a3d', fontSize: '2.2rem', lineHeight: '1.2' }}>
                Who We Are
              </h3>
              
              <div className="highlight-box mb-4">
                <p className="lead-text mb-0" style={{ color: '#008b8b', fontWeight: '600', fontSize: '1.2rem', borderLeft: '4px solid #00ced1', paddingLeft: '15px' }}>
                  Me-Tech Menyajikan Solusi IT dan Teknologi Terpercaya Untuk Bisnis Anda
                </p>
              </div>

              <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Me-Tech adalah mitra bisnis pilihan bagi banyak perusahaan terkemuka di Indonesia, 
                mulai dari UKM hingga korporasi besar. Kami berdedikasi untuk membantu meningkatkan 
                performa bisnis Anda melalui pengembangan perangkat lunak khusus, desain produk yang intuitif, 
                serta layanan konsultasi IT yang strategis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-image-wrapper {
          position: relative;
        }

        .image-border-decoration {
          position: absolute;
          top: -15px;
          left: -15px;
          width: 60%;
          height: 60%;
          border: 8px solid #f0fdfa;
          border-radius: 30px;
          z-index: 1;
        }

        .stats-badge {
          position: absolute;
          bottom: 10%;
          left: -5%;
          background: #1a1a3d;
          padding: 12px 20px;
          border-radius: 15px;
          z-index: 3;
          border-left: 4px solid #00ced1;
        }

        .highlight-box {
          background: #f8fdfd;
          padding: 18px;
          border-radius: 12px;
        }

        @media (max-width: 991px) {
          .image-border-decoration { display: none; }
          .stats-badge { bottom: 10px; left: 10px; }
        }
      `}</style>
    </section>
  );
};

export default About;