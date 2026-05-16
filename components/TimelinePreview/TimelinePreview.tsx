'use client';

import styles from './TimelinePreview.module.css';

const ELECTION_EVENTS = [
  { id: 1, date: 'Apr 19', label: 'Phase 1: Cooch Behar, Alipurduars, Jalpaiguri', status: 'completed' },
  { id: 2, date: 'Apr 26', label: 'Phase 2: Darjeeling, Raiganj, Balurghat', status: 'completed' },
  { id: 3, date: 'May 07', label: 'Phase 3: Maldaha, Murshidabad', status: 'upcoming' },
  { id: 4, date: 'May 13', label: 'Phase 4: Baharampur, Krishnanagar, Ranaghat, Bardhaman', status: 'pending' },
  { id: 5, date: 'May 20', label: 'Phase 5: Bangaon, Barrackpur, Howrah, Hooghly', status: 'pending' },
  { id: 6, date: 'May 25', label: 'Phase 6: Tamluk, Kanthi, Ghatal, Jhargram, Medinipur', status: 'pending' },
  { id: 7, date: 'Jun 01', label: 'Phase 7: Dum Dum, Barasat, Basirhat, Kolkata, Jadavpur', status: 'pending' },
  { id: 8, date: 'Jun 04', label: 'Counting Day & Results', status: 'pending' },
];

export default function TimelinePreview() {
  return (
    <section id="timeline" className={styles.timelineSection}>
      <h2 className={styles.title}>Election <span className={styles.highlight}>Timeline</span></h2>
      <p className={styles.subtitle}>Stay ahead of important deadlines and never miss your chance to vote.</p>
      
      <div className={styles.timelineContainer}>
        {ELECTION_EVENTS.map((event, index) => (
          <div key={event.id} className={styles.timelineItem}>
            <div className={styles.dateCard}>
              <span className={styles.date}>{event.date}</span>
              <div className={`${styles.statusDot} ${styles[event.status]}`}></div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.eventLabel}>{event.label}</h3>
              <p className={styles.eventStatus}>{event.status.charAt(0).toUpperCase() + event.status.slice(1)}</p>
            </div>
            {index < ELECTION_EVENTS.length - 1 && <div className={styles.connector}></div>}
          </div>
        ))}
      </div>
      
      <div className={styles.action}>
        <button 
          className={styles.viewFullBtn} 
          onClick={() => window.open('https://eci.gov.in', '_blank')}
        >
          View Full Schedule on ECI
        </button>
      </div>
    </section>
  );
}
