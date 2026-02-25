import React from 'react';

const Philosophy = () => {
  const data = [
    {
      title: "KOMITMEN KERJASAMA",
      desc: "Kami menjadikan kepuasan klien sebagai prioritas utama dalam setiap kerjasama, berkomitmen memberikan layanan terbaik dan membangun hubungan langgeng.",
      icon: "bi-people-fill"
    },
    {
      title: "SINERGI STAKEHOLDER",
      desc: "Dengan tulus dan tekad, kami berkomitmen mengoptimalkan kualitas dan performa melalui sinergi yang kuat antara semua pihak yang terlibat.",
      icon: "bi-rocket-takeoff-fill"
    },
    {
      title: "INTEGRITAS & TRANSPARANSI",
      desc: "Mengejar keberlanjutan bisnis dengan tekad kuat, menjaga kepercayaan stakeholder melalui transparansi, integritas, dan komitmen tak tergoyahkan.",
      icon: "bi-clipboard-check-fill"
    }
  ];

  return (
    // marginTop dikurangi jadi 40px agar jaraknya pas dengan About
    <section id="philosophy" className="py-5" style={{ marginTop: '40px', marginBottom: '80px' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
            Our <span style={{ color: '#00ced1' }}>Philosophy</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto 25px' }}></div>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Me-Tech hadir memberikan solusi teknologi sesuai dengan kebutuhan bisnis anda
          </p>
        </div>

        <div className="row g-4">
          {data.map((item, index) => (
            <div className="col-lg-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-sm p-4 text-center transition-card" style={{ borderRadius: '20px' }}>
                <div className="icon-box-p mx-auto mb-4" style={{ backgroundColor: '#f0fefe', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize: '2rem', color: '#00ced1' }}></i>
                </div>
                <h5 className="fw-bold mb-3" style={{ letterSpacing: '1px' }}>{item.title}</h5>
                <p className="text-muted small" style={{ lineHeight: '1.8' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;