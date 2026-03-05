import React from 'react';

const Features = () => {
  return (
    <section className="py-5 bg-white position-relative overflow-hidden">
      {/* Dekorasi Latar Belakang - Tipis & Modern */}
      <div className="position-absolute top-0 start-0 translate-middle" style={{ width: '400px', height: '400px', background: 'rgba(0, 206, 209, 0.03)', borderRadius: '50%', zIndex: 0 }}></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          
          {/* Kolom Gambar dengan Efek Floating */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="zoom-in">
            <div className="image-wrapper p-3">
              <img 
                src="/futures.jpeg" 
                alt="Work features" 
                className="img-fluid floating-img" 
                style={{ 
                  borderRadius: '30px 80px 30px 80px', 
                  boxShadow: '20px 20px 60px rgba(0,0,0,0.07)',
                  width: '100%',
                  border: '8px solid white'
                }}
              />
              {/* Badge kecil pemanis */}
              <div className="experience-badge shadow-lg">
                <h4 className="fw-bold mb-0 text-white">IT Solution</h4>
                <small className="text-white-50">Modern Platform</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
            {/* TULISAN FEATURES: Lebih Berkelas */}
            <div className="d-flex align-items-center mb-2">
              <div style={{ width: '30px', height: '2px', background: '#00ced1', marginRight: '10px' }}></div>
              <span style={{ color: '#00ced1', fontWeight: '800', letterSpacing: '4px', fontSize: '0.9rem' }}>DISCOVER FEATURES</span>
            </div>
            
            <h2 className="mb-4 display-5 fw-bold" style={{ color: '#1a1a3d', lineHeight: '1.1' }}>
              Dapatkan Solusi <span style={{ color: '#00ced1' }}>Teknologi</span> Bisnis Anda
            </h2>

            <p className="text-muted mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Tim kami membantu Anda bertransformasi melalui kemampuan teknologi terbaru untuk tetap menjadi yang terdepan dalam persaingan pasar digital.
            </p>

            {/* List dengan Gaya Modern Card-List */}
            <div className="features-list">
              {[
                { 
                  icon: "bi-check-lg", 
                  text: "Platform berkualitas, komitmen dan terjamin",
                  desc: "Keamanan dan stabilitas adalah prioritas utama kami." 
                },
                { 
                  icon: "bi-graph-up-arrow", 
                  text: "Pengembangan usaha terintegrasi digital",
                  desc: "Membangun ekosistem entrepreneurship yang modern." 
                },
                { 
                  icon: "bi-shield-lock-fill", 
                  text: "Optimalisasi keuntungan material",
                  desc: "Membantu meningkatkan profitabilitas secara terukur." 
                }
              ].map((item, index) => (
                <div key={index} className="feature-item-modern mb-4 d-flex align-items-start">
                  <div className="icon-box-modern me-3 shadow-sm">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#1a1a3d' }}>{item.text}</h6>
                    <small className="text-muted">{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Animasi Gambar Melayang */
        .floating-img {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .experience-badge {
          position: absolute;
          bottom: 0%;
          right: 5%;
          background: #1a1a3d;
          padding: 20px 30px;
          border-radius: 20px;
          border-left: 5px solid #00ced1;
          animation: scaleBadge 1s ease-out;
        }

        .icon-box-modern {
          width: 50px;
          height: 50px;
          background: #f0fdfa;
          color: #00ced1;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .feature-item-modern {
          padding: 15px;
          border-radius: 20px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .feature-item-modern:hover {
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transform: translateX(10px);
        }

        .feature-item-modern:hover .icon-box-modern {
          background: #00ced1;
          color: white;
          transform: rotateY(180deg);
        }

        @media (max-width: 991px) {
          .experience-badge { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Features;