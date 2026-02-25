import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FullBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const API_BASE_URL = 'http://localhost:8000';

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${API_BASE_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const currentItems = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-light min-vh-100" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* HEADER SECTION */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-md-8 text-center text-md-start">
            <h2 className="fw-black mb-0" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1a1a3d' }}>
              OUR FULL <span style={{ color: '#00ced1' }}>BLOG</span>
            </h2>
            <div className="mx-auto mx-md-0" style={{ width: '60px', height: '4px', background: '#00ced1', marginTop: '10px' }}></div>
            <p className="text-muted mt-3">Temukan berita dan update teknologi terbaru dari kami</p>
          </div>
          <div className="col-md-4 text-center text-md-end mt-4 mt-md-0">
            <Link to="/" className="btn btn-info text-white rounded-pill px-4 fw-bold shadow-sm back-btn" style={{ backgroundColor: '#00ced1', border: 'none' }}>
              <i className="bi bi-arrow-left me-2"></i> Kembali ke Beranda
            </Link>
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="row g-4" data-aos="fade-up">
          {currentItems.length > 0 ? (
            currentItems.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="blog-card shadow-sm rounded-4 overflow-hidden bg-white h-100 border-0">
                  <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                    <img 
                      src={`${API_BASE_URL}/storage/${post.featured_image}`} 
                      alt={post.title} 
                      className="img-fluid w-100 h-100 blog-img" 
                      style={{ objectFit: 'cover', transition: '0.5s' }} 
                    />
                  </div>
                  
                  <div className="p-4">
                    {/* INFO META: TANGGAL & AUTHOR */}
                    <div className="d-flex align-items-center mb-3 text-muted small flex-wrap gap-3">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-calendar3 me-2 text-info"></i>
                        {new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      <div className="d-flex align-items-center">
                      <i className="bi bi-person-circle me-2 text-info"></i>
                      {post.creator_name || 'Admin'}
                    </div>
                    </div>
                    
                    <h5 className="fw-bold mb-3 text-dark" style={{ fontSize: '1.2rem', lineHeight: '1.5', height: '3.0em', overflow: 'hidden' }}>
                      {post.title}
                    </h5>
                    
                    {/* RINGKASAN TEKS (Deskripsi disembunyikan di sini, hanya tampil di detail) */}
                    <p className="text-muted small mb-4" style={{ height: '3em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                      {post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + "..." : ""}
                    </p>
                    
                    <Link to={`/blog/${post.id}`} className="text-decoration-none fw-bold d-inline-flex align-items-center readmore-link" style={{ color: '#00ced1', fontSize: '14px' }}>
                      READ MORE <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <i className="bi bi-journal-x text-muted" style={{ fontSize: '4rem', opacity: '0.3' }}></i>
              <p className="text-muted mt-3 italic">Belum ada artikel yang dipublikasikan.</p>
            </div>
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-5 gap-2" data-aos="fade-up">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePaginate(i + 1)}
                className={`btn shadow-sm ${currentPage === i + 1 ? 'btn-info text-white' : 'btn-white bg-white'}`}
                style={{ 
                  width: '45px', 
                  height: '45px', 
                  borderRadius: '12px', 
                  fontWeight: 'bold', 
                  border: 'none',
                  transition: '0.3s'
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .blog-card { transition: all 0.3s ease; }
        .blog-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important; }
        .blog-card:hover .blog-img { transform: scale(1.1); }
        .back-btn:hover { background-color: #1a1a3d !important; color: white !important; transform: translateX(-5px); transition: 0.3s; }
        .readmore-link:hover { color: #1a1a3d !important; }
      `}</style>
    </div>
  );
};

export default FullBlog;