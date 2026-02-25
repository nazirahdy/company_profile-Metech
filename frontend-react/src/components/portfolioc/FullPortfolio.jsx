import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FullPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]); // State untuk kategori dari Admin
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Kamu bisa ubah angka ini untuk menentukan berapa banyak proyek per halaman
  const itemsPerPage = 6; 
  const API_BASE_URL = 'http://localhost:8000';

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/immutability
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Mengambil data Portfolio dan Kategori sekaligus dari web.php
      const [resProjects, resCategories] = await Promise.all([
        axios.get(`${API_BASE_URL}/api/portfolios`),
        axios.get(`${API_BASE_URL}/api/categories`)
      ]);
      
      setProjects(resProjects.data);
      setCategories(resCategories.data);
    } catch (err) {
      console.error('Gagal mengambil data dari admin:', err);
    }
  };

  // Logika Filter berdasarkan nama kategori di database
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category?.nama === filter);

  // --- PENJELASAN TOTALPAGES ---
  // Math.ceil digunakan untuk membulatkan ke atas. 
  // Jika ada 7 data dan 6 per halaman, maka butuh 2 halaman.
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const currentItems = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-light min-vh-100" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-8 text-center text-md-start">
            <h2 className="fw-bold mb-0" style={{ fontSize: '2.5rem', color: '#1a1a3d' }}>
              OUR <span style={{ color: '#00ced1' }}>PORTFOLIO</span>
            </h2>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <Link to="/" className="btn btn-info text-white rounded-pill px-4 shadow-sm" style={{ backgroundColor: '#00ced1', border: 'none' }}>
              ← Kembali
            </Link>
          </div>
        </div>

        <div className="row">
          {/* SIDEBAR FILTER OTOMATIS */}
          <div className="col-lg-3 mb-4">
            <div className="card border-0 shadow-sm p-3 sticky-top" style={{ top: '120px', borderRadius: '15px' }}>
              <h6 className="fw-bold mb-3 px-2 text-muted small">KATEGORI</h6>
              <div className="d-flex flex-column gap-1">
                <button
                  onClick={() => { setFilter('all'); setCurrentPage(1); }}
                  className="btn text-start py-2 px-3 border-0"
                  style={{ 
                    borderRadius: '10px', fontSize: '14px',
                    backgroundColor: filter === 'all' ? '#00ced1' : 'transparent',
                    color: filter === 'all' ? '#fff' : '#555'
                  }}
                >
                  Semua Portofolio
                </button>

                {/* Looping kategori langsung dari Admin Filament */}
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setFilter(cat.nama); setCurrentPage(1); }}
                    className="btn text-start py-2 px-3 border-0"
                    style={{ 
                      borderRadius: '10px', fontSize: '14px',
                      backgroundColor: filter === cat.nama ? '#00ced1' : 'transparent',
                      color: filter === cat.nama ? '#fff' : '#555'
                    }}
                  >
                    {cat.nama}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* GRID DATA */}
          <div className="col-lg-9">
            <div className="row g-4">
              {currentItems.length > 0 ? (
                currentItems.map((p) => (
                  <div className="col-md-6 col-lg-4 col-6" key={p.id}>
                    <Link to={`/portfolio/${p.id}`} className="text-decoration-none">
                      <div className="card shadow-sm rounded-4 overflow-hidden border-0 h-100 bg-white">
                        <img 
                          src={`${API_BASE_URL}/storage/${p.image}`} 
                          alt={p.title} 
                          className="w-100" 
                          style={{ aspectRatio: '4/3', objectFit: 'cover' }} 
                        />
                        <div className="p-3 text-center">
                          <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '14px' }}>{p.title}</h6>
                          <small className="text-info fw-semibold">
                            {p.category?.nama?.toUpperCase()}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5 text-muted">Data kosong.</div>
              )}
            </div>

            {/* NAVIGASI PAGINATION MENGGUNAKAN TOTALPAGES */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5 gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`btn shadow-sm ${currentPage === i + 1 ? 'btn-info text-white' : 'bg-white'}`}
                    style={{ width: '40px', height: '40px', borderRadius: '10px', border: 'none' }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPortfolio;