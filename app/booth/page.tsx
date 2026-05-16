'use client';

import { useState } from 'react';
import styles from './booth.module.css';

export default function BoothPage() {
  const [voterId, setVoterId] = useState('');
  const [foundBooth, setFoundBooth] = useState<any>(null);

  const handleSearch = () => {
    if (!voterId.trim()) return;
    
    // Mock search results
    setFoundBooth({
      name: 'South Calcutta Girls\' College',
      address: '72, Sarat Bose Rd, Paddapukur, Bhowanipore, Kolkata, West Bengal 700025',
      room: 'Booth No. 156 (Block A)',
      accessibility: ['Ramp Available', 'Wheelchair Access'],
      distance: '0.8 km from your location',
      timings: '7:00 AM - 6:00 PM'
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Polling Booth <span className={styles.highlight}>Locator</span></h1>
        <p>Find your assigned polling station using your Voter ID or current location.</p>
      </header>

      <div className={`${styles.searchCard} glass`}>
        <div className={styles.tabHeader}>
          <button className={styles.activeTab}>Search by Voter ID</button>
          <button className={styles.inactiveTab}>Use GPS Location</button>
        </div>
        
        <div className={styles.inputSection}>
          <input 
            type="text" 
            placeholder="Enter your EPIC (Voter ID) Number" 
            className={styles.voterInput}
            value={voterId}
            onChange={(e) => setVoterId(e.target.value)}
          />
          <button className={styles.searchBtn} onClick={handleSearch}>Find Booth</button>
        </div>
        <p className={styles.helpText}>Example: ABC1234567</p>
      </div>

      {foundBooth && (
        <div className={`${styles.resultCard} animate-fade-in`}>
          <div className={styles.resultHeader}>
            <div className={styles.mapPin}>📍</div>
            <div className={styles.resultTitle}>
              <h2>{foundBooth.name}</h2>
              <p>{foundBooth.address}</p>
            </div>
          </div>
          
          <div className={styles.detailsGrid}>
            <div className={styles.detailBox}>
              <strong>Location Detail</strong>
              <p>{foundBooth.room}</p>
            </div>
            <div className={styles.detailBox}>
              <strong>Booth Timings</strong>
              <p>{foundBooth.timings}</p>
            </div>
            <div className={styles.detailBox}>
              <strong>Accessibility</strong>
              <p>{foundBooth.accessibility.join(', ')}</p>
            </div>
            <div className={styles.detailBox}>
              <strong>Distance</strong>
              <p>{foundBooth.distance}</p>
            </div>
          </div>
          
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapIcon}>🗺️</div>
            <p>Interactive Map Integration Coming Soon</p>
            <button className={styles.googleMapsBtn}>Open in Google Maps</button>
          </div>
        </div>
      )}
    </div>
  );
}
