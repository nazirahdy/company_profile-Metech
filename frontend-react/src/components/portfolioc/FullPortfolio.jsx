import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FullPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 6; 
  const API_BASE_URL = 'http://localhost:8000';

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/immutability
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [resProjects, resCategories] = await Promise.all([
        axios.get(`${API_BASE_URL}/api/portfolios`),
        axios.get(`${API_BASE_URL}/api/categories`)
      ]);
      setProjects(resProjects.data);
      setCategories(resCategories.data);
    } catch (err) {
      console.error('Gagal mengambil data:', err);
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category?.nama === filter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const currentItems = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white min-vh-100" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        {/* JUDUL HALAMAN (Tombol Kembali di atas dihapus) */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#1a1a3d' }}>
            OUR <span style={{ color: '#00ced1' }}>PORTFOLIO</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto 0', borderRadius: '10px' }}></div>
        </div>

        <div className="row">
          {/* SIDEBAR FILTER */}
          <div className="col-lg-3 mb-4">
            <div className="card border-0 shadow-sm p-3 sticky-top" style={{ top: '120px', borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
              <h6 className="fw-bold mb-3 px-2 text-muted small">KATEGORI</h6>
              <div className="d-flex flex-column gap-1">
                <button
                  onClick={() => { setFilter('all'); setCurrentPage(1); }}
                  className="btn text-start py-2 px-3 border-0"
                  style={{ 
                    borderRadius: '10px', fontSize: '14px', transition: '0.3s',
                    backgroundColor: filter === 'all' ? '#00ced1' : 'transparent',
                    color: filter === 'all' ? '#fff' : '#555'
                  }}
                >
                  Semua Portofolio
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setFilter(cat.nama); setCurrentPage(1); }}
                    className="btn text-start py-2 px-3 border-0"
                    style={{ 
                      borderRadius: '10px', fontSize: '14px', transition: '0.3s',
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
                      <div className="card shadow-sm rounded-4 overflow-hidden border-0 h-100 bg-white portfolio-card">
                        <img 
                          src={`${API_BASE_URL}/storage/${p.image}`} 
                          alt={p.title} 
                          className="w-100" 
                          style={{ aspectRatio: '4/3', objectFit: 'cover' }} 
                        />
                        <div className="p-3 text-center">
                          <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '14px' }}>{p.title}</h6>
                          <small className="text-info fw-bold">
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

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5 gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className="btn shadow-sm"
                    style={{ 
                      width: '40px', height: '40px', borderRadius: '10px', border: 'none',
                      backgroundColor: currentPage === i + 1 ? '#00ced1' : '#fff',
                      color: currentPage === i + 1 ? '#fff' : '#555'
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

            {/* TOMBOL KEMBALI DI PALING BAWAH */}
            <div className="text-center mt-5 pt-5 border-top">
              <Link 
                to="/" 
                className="btn-kembali-home text-decoration-none d-inline-block"
                style={{
                  backgroundColor: '#00ced1',
                  color: '#fff',
                  padding: '12px 35px',
                  borderRadius: '50px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  border: '2px solid #00ced1'
                }}
              >
                <i className="bi me-2"></i> Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .portfolio-card { transition: 0.3s; }
        .portfolio-card:hover { transform: translateY(-8px); box-shadow: 0 10px 25px rgba(0,206,209,0.15) !important; }
        
        .btn-kembali-home:hover {
          background-color: transparent !important;
          color: #00ced1 !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 206, 209, 0.2);
        }
      `}</style>
    </div>
  );
};

export default FullPortfolio;