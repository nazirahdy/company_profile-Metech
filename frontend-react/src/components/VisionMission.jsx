import React from 'react';

const VisionMission = () => {
  const missions = [
    { title: "Solusi Inovatif", desc: "Memberikan solusi teknologi yang relevan dengan perkembangan zaman." },
    { title: "Kualitas Terbaik", desc: "Menjaga standar kualitas tinggi dalam setiap pengembangan software." },
    { title: "Kemitraan Strategis", desc: "Membangun hubungan jangka panjang dengan klien sebagai mitra tumbuh." }
  ];

  return (
    <>
      {/* VISION SECTION */}
      <section className="vision-section" style={{ backgroundImage: "url('/mission.jpeg')" }}>
        <div className="vision-overlay">
          <div className="container text-center" data-aos="zoom-in">
            <h2 className="vision-title">Vision</h2>
            <p className="vision-text">
              Menjadi sebuah perusahaan teknologi informasi dan komunikasi
              yang mampu bersaing dalam dunia global saat ini
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Mission</h2>
            <div className="underline"></div>
          </div>
          <div className="row g-4">
            {missions.map((m, index) => (
              <div className="col-lg-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="mission-card">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;