import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // URL Backend Laravel - Konsisten menggunakan 127.0.0.1
  const API_BASE_URL = 'http://127.0.0.1:8000';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/blogs`);
        setBlogs(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="py-3" style={{ backgroundColor: '#fdfdfd' }}>
      <div className="container py-4" data-aos="fade-up">
        
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center">
            <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#1a1a3d' }}>
              Our <span style={{ color: '#00ced1' }}>Blog</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: '#00ced1', margin: '15px auto 0', borderRadius: '10px' }}></div>
            <p className="text-muted mt-3">Recent posts from our Blog</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-info" role="status"></div>
          </div>
        ) : (
          blogs.length > 0 ? (
            <>
              <div className="row g-4">
                {blogs.slice(0, 3).map((post) => (
                  <div className="col-lg-4 col-md-6" key={post.id}>
                    <div className="card h-100 border-0 shadow-sm custom-blog-card" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                      
                      {/* Gambar Blog */}
                      <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                        <img 
                          src={`${API_BASE_URL}/storage/${post.featured_image}`} 
                          alt={post.title} 
                          className="w-100 h-100 transition-img" 
                          style={{ objectFit: 'cover' }}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/400x250?text=No+Image"; }}
                        />
                        <div className="badge-category">Article</div>
                      </div>

                      <div className="card-body p-4">
                        {/* Meta Data */}
                        <div className="d-flex flex-wrap gap-3 mb-3 text-muted" style={{ fontSize: '0.75rem' }}>
                          <span className="d-flex align-items-center">
                            <i className="bi bi-calendar4-event me-1 text-info"></i>
                            {new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="bi bi-building me-1 text-info"></i>
                            {post.publisher?.name || 'Me-tech'}
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="bi bi-person me-1 text-info"></i>
                            {post.creator_name || 'Admin'}
                          </span>
                        </div>

                        {/* Judul */}
                        <h5 className="fw-bold mb-3 title-hover" style={{ color: '#1a1a3d', lineHeight: '1.5', minHeight: '3rem' }}>
                          {post.title}
                        </h5>

                        {/* Deskripsi Singkat */}
                        <p className="text-muted small mb-4" style={{ height: '3em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                          {post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 90) + "..." : ""}
                        </p>

                        <Link to={`/blog/${post.id}`} className="stretched-link text-decoration-none fw-bold" style={{ color: '#00ced1', fontSize: '0.95rem' }}>
                          Baca Selengkapnya <i className="bi bi-arrow-right ms-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {blogs.length > 3 && (
                <div className="mt-5 text-center">
                  <Link to="/blog" className="btn-see-more">
                    Lihat Semua Postingan
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-journal-x text-muted" style={{ fontSize: '3rem', opacity: '0.3' }}></i>
              <p className="text-muted mt-3">Belum ada postingan blog saat ini.</p>
            </div>
          )
        )}
      </div>

      <style>{`
        .custom-blog-card { transition: all 0.4s ease; background: #fff; }
        .custom-blog-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.08) !important; }
        .transition-img { transition: transform 0.6s ease; }
        .custom-blog-card:hover .transition-img { transform: scale(1.1); }
        .badge-category { position: absolute; top: 20px; right: 20px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(5px); color: #1a1a3d; padding: 6px 16px; border-radius: 50px; font-weight: 700; font-size: 0.75rem; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .title-hover { transition: color 0.3s ease; }
        .custom-blog-card:hover .title-hover { color: #00ced1 !important; }
        .btn-see-more { display: inline-block; padding: 14px 40px; border-radius: 50px; background: #00ced1; color: #fff; font-weight: 700; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 10px 20px rgba(26, 26, 61, 0.15); border: 2px solid #00ced1; }
        .btn-see-more:hover { background: transparent; color: #00ced1; transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0, 206, 209, 0.2); text-decoration: none; }
      `}</style>
    </section>
  );
};

export default Blog;