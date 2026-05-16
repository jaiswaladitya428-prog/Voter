'use client';

import { useState } from 'react';
import styles from './journey.module.css';

const STEPS = [
  { id: 1, title: 'Basic Info', description: 'Tell us about yourself.' },
  { id: 2, title: 'Registration', description: 'Are you ready to vote?' },
  { id: 3, title: 'Preferences', description: 'How do you want to stay updated?' },
];

export default function JourneyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    region: '',
    registered: 'no',
    firstTime: 'yes',
    language: 'english'
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isCompleted) {
    return (
      <div className={styles.container}>
        <div className={`${styles.successCard} glass animate-fade-in`}>
          <div className={styles.successIcon}>🎉</div>
          <h1>Your Voting Journey is Ready!</h1>
          <p>We've generated a personalized roadmap based on your profile.</p>
          
          <div className={styles.roadmapPreview}>
            <div className={styles.roadmapItem}>
              <span className={styles.stepNum}>1</span>
              <div>
                <h4>Check Eligibility</h4>
                <p>Since you are {formData.age}, you are eligible for the upcoming elections.</p>
              </div>
            </div>
            <div className={styles.roadmapItem}>
              <span className={styles.stepNum}>2</span>
              <div>
                <h4>Register to Vote</h4>
                <p>You mentioned you are not registered. We've prepared the forms for {formData.region}.</p>
              </div>
            </div>
            <div className={styles.roadmapItem}>
              <span className={styles.stepNum}>3</span>
              <div>
                <h4>Find Polling Booth</h4>
                <p>Closer to the date, we'll notify you of the exact booth in {formData.region}.</p>
              </div>
            </div>
          </div>
          
          <button className={styles.mainBtn} onClick={() => window.location.href = '/assistant'}>
            Discuss with AI Assistant
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Personalized <span className={styles.highlight}>Voting Journey</span></h1>
        <p>Answer a few questions to get your custom election roadmap.</p>
      </header>

      <div className={styles.stepper}>
        {STEPS.map((step) => (
          <div 
            key={step.id} 
            className={`${styles.step} ${currentStep >= step.id ? styles.activeStep : ''}`}
          >
            <div className={styles.stepCircle}>{step.id}</div>
            <span className={styles.stepTitle}>{step.title}</span>
          </div>
        ))}
      </div>

      <div className={`${styles.formCard} glass`}>
        {currentStep === 1 && (
          <div className={styles.formSection}>
            <h3>Basic Information</h3>
            <div className={styles.inputGroup}>
              <label>What is your age?</label>
              <input 
                type="number" 
                value={formData.age} 
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                placeholder="e.g. 25"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Which state/region do you reside in?</label>
              <select 
                value={formData.region} 
                onChange={(e) => setFormData({...formData, region: e.target.value})}
              >
                <option value="">Select Region</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className={styles.formSection}>
            <h3>Registration Status</h3>
            <div className={styles.inputGroup}>
              <label>Are you already registered to vote?</label>
              <div className={styles.radioGroup}>
                <button 
                  className={formData.registered === 'yes' ? styles.activeRadio : ''}
                  onClick={() => setFormData({...formData, registered: 'yes'})}
                >Yes</button>
                <button 
                  className={formData.registered === 'no' ? styles.activeRadio : ''}
                  onClick={() => setFormData({...formData, registered: 'no'})}
                >No</button>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Is this your first time voting?</label>
              <div className={styles.radioGroup}>
                <button 
                  className={formData.firstTime === 'yes' ? styles.activeRadio : ''}
                  onClick={() => setFormData({...formData, firstTime: 'yes'})}
                >Yes</button>
                <button 
                  className={formData.firstTime === 'no' ? styles.activeRadio : ''}
                  onClick={() => setFormData({...formData, firstTime: 'no'})}
                >No</button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className={styles.formSection}>
            <h3>Preferences</h3>
            <div className={styles.inputGroup}>
              <label>Preferred Language for Assistance</label>
              <select 
                value={formData.language} 
                onChange={(e) => setFormData({...formData, language: e.target.value})}
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="regional">Regional</option>
              </select>
            </div>
            <p className={styles.infoText}>
              We will use these preferences to customize your AI assistant experience.
            </p>
          </div>
        )}

        <div className={styles.formActions}>
          <button 
            className={styles.backBtn} 
            onClick={handleBack}
            disabled={currentStep === 1}
          >Back</button>
          <button className={styles.nextBtn} onClick={handleNext}>
            {currentStep === STEPS.length ? 'Generate Journey' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
}
