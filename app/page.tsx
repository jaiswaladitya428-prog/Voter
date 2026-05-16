import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import TimelinePreview from '@/components/TimelinePreview/TimelinePreview';
import TrustSection from '@/components/TrustSection/TrustSection';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Your AI Guide for <span className={styles.highlight}>Indian Elections</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in`}>
            Navigate the West Bengal 2024 elections with ease. Get personalized ECI guidance, 
            explore regional candidates, and track your voting journey.
          </p>
          
          <div className={`${styles.searchBar} glass animate-fade-in`}>
            <span className={styles.searchIcon}>🔍</span>
            <input 
              type="text" 
              placeholder="Ask me anything: 'How do I register to vote?'" 
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>Ask AI</button>
          </div>
          
          <div className={styles.heroBadges}>
            <span className={styles.badge}>✓ Official Data</span>
            <span className={styles.badge}>✓ Privacy First</span>
            <span className={styles.badge}>✓ Multilingual</span>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/hero-image.png" 
              alt="AI Election Assistant Interface" 
              width={600} 
              height={400} 
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className={styles.quickActions}>
        <h2 className={styles.sectionTitle}>How can we help you today?</h2>
        <div className={styles.cardGrid}>
          <Link href="/journey" className={`${styles.card} glass`}>
            <div className={styles.cardIcon}>📝</div>
            <h3>Register to Vote</h3>
            <p>Step-by-step guidance on how to register and update your details.</p>
          </Link>
          <Link href="/booth" className={`${styles.card} glass`}>
            <div className={styles.cardIcon}>📍</div>
            <h3>Find Polling Booth</h3>
            <p>Locate your nearest polling station and get directions.</p>
          </Link>
          <Link href="/candidates" className={`${styles.card} glass`}>
            <div className={styles.cardIcon}>👤</div>
            <h3>Explore Candidates</h3>
            <p>View manifestos, backgrounds, and performance of local candidates.</p>
          </Link>
          <Link href="#timeline" className={`${styles.card} glass`}>
            <div className={styles.cardIcon}>📅</div>
            <h3>Election Timeline</h3>
            <p>Stay updated with important dates and registration deadlines.</p>
          </Link>
        </div>
      </section>

      {/* Timeline Preview */}
      <TimelinePreview />

      {/* Trust Section */}
      <TrustSection />
    </div>
  );
}
