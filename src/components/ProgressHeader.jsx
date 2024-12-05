import React from "react";
import styles from "../styles/ProgressHeader.module.css";

const ProgressHeader = ({ currentStep }) => {
  // Define the steps and determine completion based on currentStep
  const steps = [
    { name: "Application Details", completed: currentStep > 0 },
    { name: "Applicant Profile", completed: currentStep > 1 },
    { name: "Family Profile", completed: currentStep > 2 },
    { name: "Educational Profile", completed: currentStep > 3 },
    { name: "Upload Requirements", completed: currentStep > 4 },
    { name: "Schedule Appointment", completed: currentStep > 5 }, // New step added
  ];

  return (
    <div className={styles.progressHeader}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div
            className={`${styles.stepIcon} ${step.completed ? styles.completed : styles.incomplete}`}
          >
            {step.completed ? "✓" : index + 1}
          </div>
          <span className={styles.stepName}>{step.name}</span>
          {index < steps.length - 1 && <div className={styles.stepLine}></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressHeader;
