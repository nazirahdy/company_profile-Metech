import React, { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Software Development",
      description: "Percayakan manajemen pengembangan software bisnis Anda kepada kami demi menghasilkan produk yang baik dan berkualitas",
      image: "1.jpeg",
      color: "#00ced1",
      link: "https://produk.me-tech.id/layanan-kami/" // Link Aktif
    },
    {
      id: 2,
      title: "Digital Payment",
      description: "PBawa konsumen Anda dengan kemudahan bertransaksi lewat platform pembayaran digital",
      image: "2.jpeg",
      color: "#00ced1",
      link: "https://mepay.co.id/"
    },
    {
      id: 3,
      title: "Online Ticketing",
      description: "Bertransaksi dan akses layanan kini semudah chat lewat Whatsapp. Mari tingkatkan customer experience Anda dengan solusi Online Ticketing",
      image: "3.jpeg",
      color: "#00ced1",
      link: "https://produk.me-tech.id/online-ticketing/"
    },
    {
      id: 4,
      title: "Umra & Hajj Apps",
      description: "Optimalkan layanan Umrah dan Haji Biro Travel Anda dengan aplikasi Umrah dan Haji berbasis web dan mobile",
      image: "1.jpeg",
      color: "#00ced1",
      link: "https://produk.me-tech.id/custom-apps-sistem-umroh-dan-haji/"
    }
  ];

  return (
    <section id="services" className="services py-5 border-0" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        
        <header className="text-center mb-5">
          <h1 className="fw-bold">Our <span style={{ color: '#00ced1' }}>Services</span></h1>
          <p className="fs-5 text-secondary">Innovative Technology Solutions For Your Business</p>
          <div className="mx-auto" style={{ width: '60px', height: '4px', background: '#00ced1', borderRadius: '10px' }}></div>
        </header>

        <div className="row">
          {servicesData.map((s) => (
            <div className="col-lg-6 col-md-6 p-4" key={s.id}>
              <div 
                className="service-box text-center p-5 shadow-sm"
                onMouseEnter={() => setHoveredCard(s.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderRadius: '20px',
                  borderBottom: `4px solid ${s.color}`,
                  backgroundColor: hoveredCard === s.id ? s.color : '#fff',
                  color: hoveredCard === s.id ? '#fff' : '#333',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  cursor: 'pointer',
                  minHeight: '400px'
                }}
              >
                {/* BAGIAN FOTO/AVATAR */}
                <div className="d-flex justify-content-center mb-4">
                  <div 
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: hoveredCard === s.id ? 'rgba(255,255,255,0.2)' : '#e0fbfc',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: '0.3s'
                    }}
                  >
                    <img 
                      src={`/${s.image}`} 
                      alt={s.title}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        // Efek filter dimatikan untuk foto jpeg agar gambar asli tetap terlihat bagus
                        filter: hoveredCard === s.id ? 'brightness(1.1)' : 'none'
                      }}
                    />
                  </div>
                </div>

                <h3 className="fw-bold mb-3">{s.title}</h3>
                <p style={{ color: hoveredCard === s.id ? '#f0f0f0' : '#666' }}>{s.description}</p>
                
                {/* PERUBAHAN DI SINI: Menggunakan tag <a> agar bisa diklik */}
                <a 
                  href={s.link}
                  target="_blank" // Membuka di tab baru
                  rel="noopener noreferrer"
                  className="read-more fw-bold text-decoration-none d-inline-flex align-items-center mt-3"
                  style={{ 
                    color: hoveredCard === s.id ? '#fff' : s.color,
                    transition: '0.3s'
                  }}
                >
                  <span>Read More</span> 
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-box:hover h3, .service-box:hover p {
          color: #fff !important;
        }
        .service-box:hover {
          transform: translateY(-12px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        .read-more:hover {
          letter-spacing: 1px;
          opacity: 0.9;
        }
      `}</style>
    </section>
  );
};

export default Services;