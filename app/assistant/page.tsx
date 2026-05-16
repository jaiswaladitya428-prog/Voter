import styles from './assistant.module.css';
import ChatInterface from '@/components/ChatInterface/ChatInterface';
import SmartContextPanel from '@/components/SmartContextPanel/SmartContextPanel';

export default function AssistantPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>AI Election <span className={styles.highlight}>Assistant</span></h1>
        <p className={styles.subtitle}>Get personalized guidance and answers about the upcoming elections.</p>
      </header>
      
      <div className={styles.mainLayout}>
        <div className={styles.chatSection}>
          <ChatInterface />
        </div>
        <div className={styles.sidebarSection}>
          <SmartContextPanel />
        </div>
      </div>
    </div>
  );
}
