import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressHeader from "./ProgressHeader";
import styles from "../styles/RegistrationForm.module.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    applicantType: "",
    seniorHighTrack: "",
    preferredProgram: "",
    preferredCourse: "",
  });

  // Handle input changes for dropdowns
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // Reset dependent fields if parent field changes
      ...(name === "applicantType" && { seniorHighTrack: "", preferredCourse: "" }),
      ...(name === "seniorHighTrack" && { preferredCourse: "" }),
    }));
  };

  const handleCancel = () => {
    setFormData({
      applicantType: "",
      seniorHighTrack: "",
      preferredProgram: "",
      preferredCourse: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    goToNextPage();
  };

  const goToNextPage = () => {
    setCurrentStep(1);
    navigate("/applicant-profile");
  };

  return (
    <div className={styles.container}>
      <ProgressHeader currentStep={currentStep} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Application Details</h2>

        {/* Applicant Type */}
        <div className={styles.field}>
          <label htmlFor="applicantType">Type of Applicant</label>
          <select
            name="applicantType"
            id="applicantType"
            value={formData.applicantType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="Senior High School Graduate">Senior High School Graduate</option>
            <option value="Transferee">Transferee</option>
          </select>
        </div>

        {/* Senior High School Graduate Fields */}
        {formData.applicantType === "Senior High School Graduate" && (
          <>
            {/* Senior High Track */}
            <div className={styles.field}>
              <label htmlFor="seniorHighTrack">Senior High School Track</label>
              <select
                name="seniorHighTrack"
                id="seniorHighTrack"
                value={formData.seniorHighTrack}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="STEM">STEM</option>
                <option value="ABM">ABM</option>
                <option value="HUMSS">HUMSS</option>
                <option value="TVL">TVL</option>
              </select>
            </div>

            {/* Preferred Course */}
            {formData.seniorHighTrack && (
              <div className={styles.field}>
                <label htmlFor="preferredCourse">Preferred Course</label>
                <select
                  name="preferredCourse"
                  id="preferredCourse"
                  value={formData.preferredCourse}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Engineering">Computer Science - BSCS</option>
                  <option value="Business Administration">Information Technology - IT</option>
                </select>
              </div>
            )}
          </>
        )}

        {/* Transferee Fields */}
        {formData.applicantType === "Transferee" && (
          <div className={styles.field}>
            <label htmlFor="preferredProgram">Preferred Program</label>
            <select
              name="preferredProgram"
              id="preferredProgram"
              value={formData.preferredProgram}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose your preferred program</option>
              <option value="Computer Science - BSCS">Computer Science - BSCS</option>
              <option value="Information Technology - BSIT">Information Technology - BSIT</option>
            </select>
          </div>
        )}

        {/* Buttons */}
        <div className={styles.buttons}>
          <button type="button" onClick={handleCancel} className={styles.cancelButton}>
            Reset
          </button>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
