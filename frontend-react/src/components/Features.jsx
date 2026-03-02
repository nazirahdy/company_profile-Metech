import React from 'react';

const Features = () => {
  return (
    <section className="py-5 bg-white border-0" style={{ border: 'none', outline: 'none' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <img 
              src="/futures.jpeg" 
              alt="Work features" 
              className="img-fluid" 
              style={{ 
                borderRadius: '50px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                width: '100%'
              }}
            />
          </div>

          <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
            {/* TULISAN FEATURES: Gede dan Sangat Tebal */}
            <h2 className="mb-2" style={{ 
              color: '#00ced1', 
              letterSpacing: '3px', 
              fontSize: '3rem', 
              fontWeight: '900' 
            }}>
              FEATURES
            </h2>

            {/* KALIMAT SOLUSI: Lebih Kecil tapi Tetap Bold */}
            <h6 className="mb-3" style={{ 
              fontSize: '1.25rem', 
              lineHeight: '1.4', 
              fontWeight: '700', // Tetap Bold
              color: '#333335',
              textTransform: 'uppercase'
            }}>
              Dapatkan Solusi Kebutuhan Teknologi Bisnis Anda Bersama Kami
            </h6>

            <div style={{ width: '70px', height: '5px', background: '#00ced1', borderRadius: '10px', marginBottom: '30px' }}></div>
            
            <p className="text-muted fst-italic mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              Tim kami dapat membantu Anda dalam mengubah bisnis Anda melalui kemampuan teknologi terbaru untuk tetap menjadi yang terdepan.
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="me-3" style={iconCircleStyle}>
                  <i className="bi bi-check-lg" style={{ fontSize: '20px' }}></i>
                </div>
                <span className="fw-bold" style={{ color: '#444', marginTop: '5px' }}>
                  Menyediakan platform yang berkualitas, komitmen dan terjamin
                </span>
              </li>
              
              <li className="d-flex align-items-start mb-4">
                <div className="me-3" style={iconCircleOutlineStyle}>
                  <i className="bi bi-clock" style={{ fontSize: '18px' }}></i>
                </div>
                <span className="fw-bold" style={{ color: '#444', marginTop: '5px' }}>
                  Membuka peluang pengembangan usaha (entrepreneurship), yang terintegrasi dengan layanan digital (online)
                </span>
              </li>

              <li className="d-flex align-items-start">
                <div className="me-3" style={iconCircleStyle}>
                  <i className="bi bi-shield-check" style={{ fontSize: '18px' }}></i>
                </div>
                <span className="fw-bold" style={{ color: '#444', marginTop: '5px' }}>
                  Membantu para pelaku usaha untuk meningkatkan peluang positif dari segi keuntungan material.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const iconCircleStyle = {
  width: '40px', height: '40px', backgroundColor: '#00ced1', borderRadius: '50%',
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
  flexShrink: 0, boxShadow: '0 4px 10px rgba(0, 206, 209, 0.3)'
};

const iconCircleOutlineStyle = {
  width: '40px', height: '40px', backgroundColor: 'transparent', border: '2px solid #00ced1',
  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#00ced1', flexShrink: 0, boxShadow: '0 4px 10px rgba(0, 206, 209, 0.1)'
};

export default Features;