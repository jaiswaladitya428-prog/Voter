import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.title}>VoterAssist AI</h3>
          <p className={styles.description}>
            Empowering citizens with intelligent, personalized election guidance. 
            Making democracy accessible to everyone.
          </p>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h4>Platform</h4>
            <ul>
              <li><a href="/assistant">AI Assistant</a></li>
              <li><a href="/journey">Voting Journey</a></li>
              <li><a href="/candidates">Candidate Explorer</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li><a href="/learn">Election Basics</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/myths">Myth vs Fact</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Official</h4>
            <ul>
              <li><a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer">ECI Portal</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} VoterAssist AI Platform. Independent Civic Project.</p>
      </div>
    </footer>
  );
}
