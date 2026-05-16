import styles from './SmartContextPanel.module.css';

export default function SmartContextPanel() {
  return (
    <aside className={`${styles.panel} glass`}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Voter Progress</h3>
        <div className={styles.progressList}>
          <div className={`${styles.progressItem} ${styles.completed}`}>
            <span className={styles.checkIcon}>✓</span>
            <span className={styles.label}>Eligibility Check</span>
          </div>
          <div className={`${styles.progressItem} ${styles.active}`}>
            <span className={styles.dotIcon}>●</span>
            <span className={styles.label}>Registration Status</span>
          </div>
          <div className={styles.progressItem}>
            <span className={styles.dotIcon}>○</span>
            <span className={styles.label}>Verify Voter List</span>
          </div>
          <div className={styles.progressItem}>
            <span className={styles.dotIcon}>○</span>
            <span className={styles.label}>Find Polling Booth</span>
          </div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Quick Resources</h3>
        <ul className={styles.resourceList}>
          <li>
            <a href="#" className={styles.resourceLink}>
              <span>📄</span> How to register (PDF)
            </a>
          </li>
          <li>
            <a href="#" className={styles.resourceLink}>
              <span>🎥</span> EVM Demo Video
            </a>
          </li>
          <li>
            <a href="#" className={styles.resourceLink}>
              <span>🆔</span> ID Requirements
            </a>
          </li>
        </ul>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>AI Recommendation</h3>
        <div className={styles.recommendationCard}>
          <p>Based on our chat, your next step is to <strong>verify your voter ID</strong> details on the national portal.</p>
          <button className={styles.recBtn}>Verify Now</button>
        </div>
      </div>
    </aside>
  );
}
