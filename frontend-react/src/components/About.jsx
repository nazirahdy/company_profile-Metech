import React from 'react';

const About = () => {
  return (
    /* PERBAIKAN: 
       1. Menghapus marginBottom agar tidak ada celah cokelat di bawah.
       2. Menambahkan backgroundColor putih agar konsisten.
       3. Menambahkan padding (py-5) agar jarak konten tetap bagus.
    */
    <section 
      className="about-section py-5" 
      id="about" 
      style={{ 
        backgroundColor: '#ffffff', 
        margin: 0, 
        border: 'none' 
      }}
    >
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#1a1a3d' }}>
            About Us
          </h2>
          <div className="underline" style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>

        <div className="row align-items-center m-0">
          <div className="col-lg-6 mb-4" data-aos="fade-right">
            <img src="team.jpg" className="img-fluid rounded-4 shadow-sm" alt="Team" />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="sub-title" style={{ fontWeight: 'bold', color: '#1a1a3d' }}>Who We Are</h3>
            <p className="lead-text" style={{ color: '#00ced1', fontWeight: '500', fontSize: '1.2rem' }}>
              Me-Tech Menyajikan Solusi IT dan Teknologi Terpercaya Untuk Bisnis Anda
            </p>
            <p className="text-muted">
              Me-Tech adalah mitra bisnis pilihan bagi banyak perusahaan terkemuka di Indonesia,
              UKM dan penantang teknologi. Kami membantu meningkatkan bisnis melalui pengembangan
              perangkat lunak khusus, desain produk, dan layanan konsultasi IT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;