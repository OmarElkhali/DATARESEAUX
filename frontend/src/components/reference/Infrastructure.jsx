import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Infrastructure.css';

const Infrastructure = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/references/all?category=infrastructure');
        setReferences(res.data);
      } catch (error) {
        console.error('Error fetching references:', error);
      }
    };
    fetchReferences();
  }, []);

  return (
    <section className="REF2-warmp">
      <div className="REF-Container">
        <div className='REF-title'>
          <h1>INFRASTRU<span className="data">CTURE</span></h1>
        </div>
        <div className="references-container">
          {references.map((ref) => (
            <div className="reference" key={ref.id}>
              <img src={`http://localhost:5000/${ref.logo_path}`} alt="Reference Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
