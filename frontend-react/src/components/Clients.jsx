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
    <section id="clients" className="py-5" style={{ backgroundColor: '#f6f9ff', boxShadow: '0 7px 25px 0 rgba(0,0,0,0.05)' }}>
      <div className="container" data-aos="fade-up">
        {/* Header Section sesuai foto */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#333' }}>
            Our <span style={{ color: '#00ced1' }}>Clients</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
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
              <div className="client-box bg-white p-3 d-flex align-items-center justify-content-center shadow-sm" 
                   style={{ height: '100px', borderRadius: '12px' }}>
                <img 
                  src={`https://storage.me-tech.id/clients/${logo}`} 
                  className="img-fluid" 
                  alt="Client Logo" 
                  style={{ maxHeight: '65px', objectFit: 'contain' }} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .client-box { transition: transform 0.3s ease; border: 1px solid #f0f0f0; }
        .client-box:hover { transform: translateY(-5px); }
        .swiper-pagination-bullet-active { background-color: #00ced1 !important; }
      `}</style>
    </section>
  );
};

export default Clients;