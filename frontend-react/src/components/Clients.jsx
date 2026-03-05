import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Clients = () => {
  const clientLogos = [
    "9kita.png", "Aeroticket.png", "Alba.png", "Azkia.png", "Belibis.png", 
    "BPTJ.png", "BRI_1.png", "bridge_syari_1.png", "Cari_ustadz.png", "ddi_1.png", 
    "dinas-sosial.png", "Dunia_Halal.png", "Faedah.png", "gomasgo.png", "Hot_job.png", 
    "KFC.png", "Kosami.png", "MMBC.png", "Nushinushi.png", "Nushinushi-1.png", 
    "Pacific_travel.png", "Palapa_Mall.png", "Payment.png", "Pro_umkm.png", 
    "Puri_yatim.png", "Rama_Optik.png", "Real_Travel.png", "Spirit_tour.png", 
    "Suzuki.png", "Syirkahmu.png", "Wakuliner.png", "Warung_dekat.png", "YAKESNA.png"
  ];

  return (
    <section id="clients" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-4" data-aos="fade-up">
        
        {/* Header Section Minimalis */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1a1a3d' }}>
            Our Trusted <span style={{ color: '#00ced1' }}>Clients</span>
          </h2>
          <div style={{ 
            width: '50px', 
            height: '4px', 
            background: '#00ced1', 
            margin: '0 auto', 
            borderRadius: '10px' 
          }}></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          autoplay={{ 
            delay: 2000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="pb-5"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="logo-item-wrapper">
                <img 
                  src={`https://storage.me-tech.id/clients/${logo}`} 
                  className="img-fluid client-logo-clean" 
                  alt={`Client ${index}`} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .logo-item-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
          padding: 10px;
          transition: all 0.3s ease;
        }

        .client-logo-clean {
          max-height: 75px;
          width: auto;
          object-fit: contain;
          transition: all 0.4s ease;
          /* Logo berwarna langsung, sedikit transparansi agar elegan */
          opacity: 0.85; 
        }

        .logo-item-wrapper:hover .client-logo-clean {
          transform: scale(1.15);
          opacity: 1;
          /* Efek bayangan halus di belakang logo saat hover */
          filter: drop-shadow(0 10px 15px rgba(0, 206, 209, 0.2));
        }

        /* Pagination Dots Modern */
        .swiper-pagination-bullet {
          background: #d1d1d1 !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background: #00ced1 !important;
          width: 20px !important;
          border-radius: 5px !important;
        }

        @media (max-width: 768px) {
          .logo-item-wrapper { height: 80px; }
          .client-logo-clean { max-height: 50px; }
        }
      `}</style>
    </section>
  );
};

export default Clients;