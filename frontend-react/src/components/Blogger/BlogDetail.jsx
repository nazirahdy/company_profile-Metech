import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = 'http://127.0.0.1:8000'; 

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    axios.get(`${API_BASE_URL}/api/blogs/${id}`)
      .then(res => { 
        setBlog(res.data); 
        setLoading(false); 
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-info"></div>
    </div>
  );

  if (!blog) return (
    <div className="container text-center py-5 mt-5">
      <h3 className="fw-bold" style={{ color: '#1a1a3d' }}>Artikel tidak ditemukan</h3>
      <Link to="/blog" className="btn btn-info text-white rounded-pill px-4 mt-3" style={{ backgroundColor: '#00ced1', border: 'none' }}>
        Kembali ke Blog
      </Link>
    </div>
  );

  return (
    <div className="blog-detail-page" style={{ backgroundColor: '#ffffff', paddingTop: '120px', paddingBottom: '0px' }}>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            
            {/* TOMBOL KEMBALI (SUDAH JADI BUTTON SESUAI REQUEST) */}
            <nav className="mb-4">
              <Link 
                to="/blog" 
                className="btn btn-info text-white rounded-pill px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center back-btn-custom"
                style={{ 
                  backgroundColor: '#00ced1', 
                  border: 'none',
                  fontSize: '13px'
                }}
              >
                <i className="bi bi-arrow-left me-2"></i> KEMBALI KE DAFTAR ARTIKEL
              </Link>
            </nav>

            <header className="mb-5">
              <h1 className="fw-bold display-5 mb-4" style={{ color: '#1a1a3d' }}>
                {blog.title}
              </h1>
              <div className="d-flex align-items-center gap-3 text-muted border-top border-bottom py-3">
                <small><i className="bi bi-calendar3 me-2 text-info"></i>{new Date(blog.created_at).toLocaleDateString('id-ID')}</small>
               <small><i className="bi bi-person-circle me-2 text-info"></i>{blog.creator_name || 'Admin'}</small>
              </div>
            </header>

            <div className="mb-5 shadow-sm" style={{ borderRadius: '25px', overflow: 'hidden' }}>
              <img 
                src={`${API_BASE_URL}/storage/${blog.featured_image}`} 
                className="w-100" 
                style={{ objectFit: 'cover', maxHeight: '500px' }} 
                alt={blog.title} 
              />
            </div>

            <article className="blog-text mb-5">
              <div 
                style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#333', textAlign: 'justify' }}
                dangerouslySetInnerHTML={{ __html: blog.content }} 
              />
            </article>

            <div className="py-4 border-top d-flex justify-content-between align-items-center">
              <div className="share">
                <span className="small fw-bold text-muted me-3">SHARE:</span>
                <button className="btn btn-sm btn-light border-0 me-2" style={{color: '#1a1a3d'}}><i className="bi bi-facebook"></i></button>
                <button className="btn btn-sm btn-light border-0" style={{color: '#1a1a3d'}}><i className="bi bi-whatsapp"></i></button>
              </div>
              <div className="tags">
                <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: '#f0f0f0', color: '#1a1a3d' }}>#Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .blog-text p { margin-bottom: 1.5rem; }
        .blog-detail-page {
            overflow: hidden;
            margin-bottom: 0 !important;
        }
        .back-btn-custom:hover {
          background-color: #1a1a3d !important;
          transform: translateY(-3px);
          transition: 0.3s ease;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;