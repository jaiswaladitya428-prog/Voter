import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`} aria-label="Main Navigation">
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="VoterAssist AI Home">
          <span className={styles.logoIcon} aria-hidden="true">🗳️</span>
          <span className={styles.logoText}>VoterAssist AI</span>
        </Link>
        
        <ul className={styles.navLinks} role="list">
          <li><Link href="/assistant" aria-label="Go to AI Assistant">AI Assistant</Link></li>
          <li><Link href="/journey" aria-label="View My Voting Journey">My Journey</Link></li>
          <li><Link href="/learn" aria-label="Learn about elections">Learn</Link></li>
          <li><Link href="/candidates" aria-label="Explore Candidates">Candidates</Link></li>
        </ul>
        
        <div className={styles.actions}>
          <button className={styles.loginBtn} aria-label="Sign In to your account">Sign In</button>
          <button className={styles.ctaBtn} aria-label="Get Started with VoterAssist">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
