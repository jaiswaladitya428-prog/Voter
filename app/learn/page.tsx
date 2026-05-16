'use client';

import { useState } from 'react';
import styles from './learn.module.css';

const TOPICS = [
  { id: 1, title: 'Indian Election Process', icon: '🗳️', description: 'Step-by-step guide from ECI on casting your vote at the booth.', details: '1. Check your name in the voter list. 2. Carry your EPIC or valid ID. 3. First polling official will check your name and ID. 4. Second official will ink your finger, give you a slip, and take your signature. 5. Deposit the slip to the third official, show your inked finger, and proceed to the voting compartment. 6. Press the blue button on the EVM against your chosen candidate. You will hear a beep sound.' },
  { id: 2, title: 'EVM & VVPAT Guide', icon: '📟', description: 'How to verify your vote using the Voter Verifiable Paper Audit Trail.', details: 'The Electronic Voting Machine (EVM) is simple and secure. When you press the blue button next to your candidate, a red light glows. Immediately, check the VVPAT (Voter Verifiable Paper Audit Trail) machine kept alongside. A printed slip containing the serial number, name, and symbol of the candidate will appear for 7 seconds through the transparent window before falling into the sealed drop box.' },
  { id: 3, title: 'EPIC & Form 6', icon: '🪪', description: 'How to register using Form 6 and get your Elector Photo Identity Card.', details: 'If you are an Indian citizen of 18 years or above, you can register to vote using Form 6. You can submit it online via the Voter Service Portal (voters.eci.gov.in) or the Voter Helpline App. You will need a passport-size photo, age proof, and address proof. Once approved, your Elector Photo Identity Card (EPIC) will be delivered to you.' },
  { id: 4, title: 'Model Code of Conduct', icon: '⚖️', description: 'Rules for political parties and candidates during the election period.', details: 'The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission of India. It comes into effect immediately after the announcement of the election schedule. It regulates political rallies, speeches, and polling day activities to ensure a level playing field and prevent the misuse of official machinery by the ruling party.' },
  { id: 5, title: 'Understanding NOTA', icon: '🚫', description: 'Your right to reject all candidates while still casting a valid vote.', details: 'NOTA stands for "None Of The Above". It is an option provided on the EVM at the end of the candidate list. If you feel none of the candidates are suitable, you can press NOTA to register your dissatisfaction while still actively participating in the democratic process.' },
  { id: 6, title: 'Voter Helpline App', icon: '📱', description: 'How to use the official ECI app to find your booth and report issues.', details: 'The Voter Helpline App is the official mobile application from the Election Commission of India. You can use it to search your name in the electoral roll, submit forms for registration or correction, download your e-EPIC, and find the location of your polling booth.' },
];

const MYTHS = [
  { question: "Is the ink on my finger permanent?", answer: "Indelible ink is used to prevent multiple voting. It lasts for a few weeks but is completely safe for your skin." },
  { question: "Can I vote if I don't have my EPIC card?", answer: "Yes. If your name is in the voter list, you can vote using other valid IDs like Aadhaar, PAN card, or Driving License as per ECI rules." },
  { question: "Are EVMs connected to the internet and hackable?", answer: "No. EVMs in India are standalone machines, not connected to any network or Bluetooth, making remote hacking impossible." },
  { question: "Can I vote online from home?", answer: "No. You must be physically present at the polling booth to cast your vote, except for specific categories eligible for postal ballots." },
  { question: "Is there a fee to register as a voter?", answer: "Voter registration is completely free. Forms can be submitted online via the Voter Service Portal or physically without any charges." },
];

export default function LearnPage() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

  const activeTopic = TOPICS.find(t => t.id === selectedTopic);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Election <span className={styles.highlight}>Learning Center</span></h1>
        <p>Master the basics of democracy and the voting process with ease.</p>
      </header>

      <div className={styles.topicGrid}>
        {TOPICS.map(topic => (
          <div key={topic.id} className={`${styles.topicCard} glass`}>
            <div className={styles.topicIcon}>{topic.icon}</div>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <button className={styles.learnMoreBtn} onClick={() => setSelectedTopic(topic.id)}>
              Start Lesson
            </button>
          </div>
        ))}
      </div>

      <section className={styles.mythSection}>
        <h2 className={styles.sectionTitle}>Myth vs <span className={styles.highlight}>Fact</span></h2>
        <div className={styles.mythList}>
          {MYTHS.map((m, i) => (
            <div key={i} className={styles.mythItem}>
              <div className={styles.mythQuestion}>
                <span className={styles.qIcon}>?</span>
                <h4>{m.question}</h4>
              </div>
              <div className={styles.mythAnswer}>
                <p>{m.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedTopic && activeTopic && (
        <div className={styles.modalOverlay} onClick={() => setSelectedTopic(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>{activeTopic.icon}</div>
              <h2>{activeTopic.title}</h2>
              <button className={styles.closeBtn} onClick={() => setSelectedTopic(null)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <p>{activeTopic.details}</p>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.completeBtn} onClick={() => setSelectedTopic(null)}>
                Complete Lesson
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
