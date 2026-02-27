import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PortfolioDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = 'http://localhost:8000';

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`${API_BASE_URL}/api/portfolios/${id}`)
      .then(res => {
        setProject(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-5 mt-5"><div className="spinner-border text-info"></div></div>;
  if (!project) return <div className="text-center py-5"><h3>Project Not Found</h3></div>;

  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="row g-5">
          <div className="col-md-7">
            <img src={`${API_BASE_URL}/storage/${project.image}`} className="img-fluid rounded-4 shadow-lg w-100" alt={project.title} />
          </div>
          <div className="col-md-5">
            <span className="badge px-3 py-2 mb-3" style={{ backgroundColor: 'rgba(0,206,209,0.1)', color: '#00ced1' }}>
              {project.category?.nama || 'General'}
            </span>
            <h1 className="fw-bold mb-4" style={{ color: '#1a1a3d' }}>{project.title}</h1>
            
            <div className="mb-5">
              <h6 className="fw-bold text-muted small mb-3">TENTANG PROYEK</h6>
              <div 
                className="description-text"
                style={{ color: '#555', lineHeight: '1.8', textAlign: 'justify' }}
                dangerouslySetInnerHTML={{ __html: project.description }} 
              />
            </div>

            <div className="card border-0 bg-light p-4 rounded-4 shadow-sm mb-4">
              <div className="row">
                <div className="col-6">
                  <small className="text-muted d-block">Client</small>
                  <span className="fw-bold">{project.client_name}</span>
                </div>
                <div className="col-6">
                  <small className="text-muted d-block">Link</small>
                  {project.project_url ? (
                    <a href={project.project_url} target="_blank" rel="noreferrer" className="text-info fw-bold text-decoration-none">Kunjungi Proyek</a>
                  ) : <span>-</span>}
                </div>
              </div>
            </div>

            {/* TOMBOL KEMBALI DENGAN STYLE TURQUOISE SOLID */}
            <Link 
              to="/portfolio-explore" 
              className="btn-kembali-portfolio text-decoration-none d-inline-block text-center w-100"
              style={{
                backgroundColor: '#00ced1',
                color: '#fff',
                padding: '12px 30px',
                borderRadius: '50px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid #00ced1'
              }}
            >
              <i className="bi bi-arrow-left me-2"></i> Kembali ke Portfolio
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .btn-kembali-portfolio:hover {
          background-color: transparent !important;
          color: #00ced1 !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 206, 209, 0.2);
        }
      `}</style>
    </div>
  );
};

export default PortfolioDetail;