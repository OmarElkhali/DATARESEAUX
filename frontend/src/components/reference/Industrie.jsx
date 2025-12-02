import React, { useState, useEffect } from 'react';
import './Industrie.css';
import './Reference.css';
import { referenceService, getImageUrl } from '../../services/api';

const Industrie = () => {
  const [references, setReferences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        setIsLoading(true);
        const res = await referenceService.getAll('industrie');
        // Handle both old API format (array) and new format (with data property)
        const data = res.data.data || res.data;
        setReferences(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching references:', err);
        setError('Erreur lors du chargement des références');
      } finally {
        setIsLoading(false);
      }
    };
    fetchReferences();
  }, []);

  if (isLoading) {
    return (
      <section className="REF-warmp">
        <div className='Serv-title'>
          <h1><span className="data">NOS</span><span className="reseaux">REFERENCE</span></h1>
        </div>
        <div className="REF-Container">
          <div className='REF-title'>
            <h1>INDUS<span className="data">TRIE</span></h1>
          </div>
          <p>Chargement...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="REF-warmp">
      <div className='Serv-title'>
        <h1><span className="data">NOS</span><span className="reseaux">REFERENCE</span></h1>
      </div>
      <div className="REF-Container">
        <div className='REF-title'>
          <h1>INDUS<span className="data">TRIE</span></h1>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="references-container">
          {references.map((ref) => (
            <div className="reference" key={ref.id}>
              <img 
                src={getImageUrl(ref.logo_path)} 
                alt="Logo de référence industrie"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder.png';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industrie;
