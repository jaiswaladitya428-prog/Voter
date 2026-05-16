import styles from './TrustSection.module.css';

export default function TrustSection() {
  return (
    <section className={styles.trustSection}>
      <div className={`${styles.trustBox} glass`}>
        <div className={styles.trustContent}>
          <h2 className={styles.title}>Data You Can <span className={styles.highlight}>Trust</span></h2>
          <p className={styles.description}>
            Our AI assistant is trained exclusively on official government data and verified election guidelines. 
            We prioritize accuracy, impartiality, and user privacy in everything we do.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Verified Sources</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Zero</span>
              <span className={styles.statLabel}>Personal Data Stored</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>AI Assistance</span>
            </div>
          </div>
        </div>
        
        <div className={styles.trustBadges}>
          <div className={styles.badgeItem}>
            <div className={styles.badgeIcon}>🔒</div>
            <div className={styles.badgeText}>
              <h4>Secure & Private</h4>
              <p>Your conversations are never linked to your identity.</p>
            </div>
          </div>
          <div className={styles.badgeItem}>
            <div className={styles.badgeIcon}>⚖️</div>
            <div className={styles.badgeText}>
              <h4>Neutral & Unbiased</h4>
              <p>Non-partisan guidance for every citizen.</p>
            </div>
          </div>
          <div className={styles.badgeItem}>
            <div className={styles.badgeIcon}>🏛️</div>
            <div className={styles.badgeText}>
              <h4>Official Integration</h4>
              <p>Synced with official Election Commission portals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
