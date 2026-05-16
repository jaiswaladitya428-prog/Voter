'use client';

import { useState } from 'react';
import styles from './candidates.module.css';

const MOCK_CANDIDATES = [
  { id: 1, name: 'Dipankar Ghosh', party: 'AITC', constituency: 'Kolkata North', manifesto: 'Focus on Kolkata heritage restoration and youth employment.', education: 'MA, Calcutta University', background: 'Social Worker' },
  { id: 2, name: 'Rahul Chatterjee', party: 'BJP', constituency: 'Kolkata North', manifesto: 'Infrastructure development and digital governance.', education: 'B.Tech, IIT Kharagpur', background: 'Engineer' },
  { id: 3, name: 'Sujata Sen', party: 'CPIM', constituency: 'Kolkata North', manifesto: 'Workers rights and industrial revitalization.', education: 'PhD, Jadavpur University', background: 'Professor' },
  { id: 4, name: 'Amiya Banerjee', party: 'AITC', constituency: 'Kolkata South', manifesto: 'Women empowerment and SME support.', education: 'LLB, NUJS', background: 'Lawyer' },
  { id: 5, name: 'Karan Singh', party: 'BJP', constituency: 'Darjeeling', manifesto: 'Tourism boost and infrastructure development in hills.', education: 'BBA, Delhi University', background: 'Business Owner' },
  { id: 6, name: 'Raju Bista', party: 'BJP', constituency: 'Asansol', manifesto: 'Industrial growth and coal sector reforms.', education: 'BA, IGNOU', background: 'Social Worker' },
];

export default function CandidatesPage() {
  const [search, setSearch] = useState('');
  const [constituency, setConstituency] = useState('Kolkata North');
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const filteredCandidates = MOCK_CANDIDATES.filter(c => 
    c.constituency === constituency &&
    (c.name.toLowerCase().includes(search.toLowerCase()) || 
     c.party.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Candidate <span className={styles.highlight}>Explorer</span></h1>
        <p>Explore the profiles, manifestos, and backgrounds of candidates in your area.</p>
      </header>

      <div className={`${styles.filterBar} glass`}>
        <div className={styles.searchGroup}>
          <span>🔍</span>
          <input 
            type="text" 
            placeholder="Search by name or party..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.constituencyGroup}>
          <label>Constituency:</label>
          <select value={constituency} onChange={(e) => setConstituency(e.target.value)}>
            <option value="Kolkata North">Kolkata North</option>
            <option value="Kolkata South">Kolkata South</option>
            <option value="Darjeeling">Darjeeling</option>
            <option value="Asansol">Asansol</option>
          </select>
        </div>
      </div>

      <div className={styles.resultsGrid}>
        {filteredCandidates.map(candidate => (
          <div key={candidate.id} className={`${styles.candidateCard} glass animate-fade-in`}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>👤</div>
              <div className={styles.nameInfo}>
                <h3>{candidate.name}</h3>
                <span className={styles.party}>{candidate.party}</span>
              </div>
            </div>
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <strong>Education:</strong> {candidate.education}
              </div>
              <div className={styles.detailItem}>
                <strong>Background:</strong> {candidate.background}
              </div>
            </div>
            
            <div className={styles.manifesto}>
              <h4>Manifesto Highlights</h4>
              <p>{candidate.manifesto}</p>
            </div>
            
            <div className={styles.actions}>
              <button 
                className={styles.viewMoreBtn}
                onClick={() => setSelectedCandidate(candidate)}
              >
                Full Profile
              </button>
              <button 
                className={styles.compareBtn}
                onClick={() => alert(`Comparison feature for ${candidate.name} is coming soon!`)}
              >
                Compare
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCandidate && (
        <div className={styles.modalOverlay} onClick={() => setSelectedCandidate(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.avatar}>👤</div>
              <h2>{selectedCandidate.name}</h2>
              <button className={styles.closeBtn} onClick={() => setSelectedCandidate(null)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <p><strong>Party:</strong> {selectedCandidate.party}</p>
              <p><strong>Constituency:</strong> {selectedCandidate.constituency}</p>
              <p><strong>Education:</strong> {selectedCandidate.education}</p>
              <p><strong>Background:</strong> {selectedCandidate.background}</p>
              <h4 style={{marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--primary)'}}>Detailed Manifesto</h4>
              <p>{selectedCandidate.manifesto} We plan to implement these changes within the first 100 days of office.</p>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.compareBtn} style={{width: '100%'}} onClick={() => setSelectedCandidate(null)}>
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
