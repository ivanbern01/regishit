import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import the ProgressHeader component

const ScheduleAppointment = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const [currentStep, setCurrentStep] = useState(5); // Assuming you are on step 5 (Schedule Appointment)

  return (
    <div
      className="card shadow p-4"
      style={{
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Include ProgressHeader at the top */}
      <ProgressHeader currentStep={currentStep} />
      <div
          className="card shadow p-4"
          style={{
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >

      <h1 className="mb-4">
        <i className="bi bi-calendar2-week"></i> Schedule Appointment
      </h1>
      <hr />

      {/* Preferred Date */}
      <div className="mb-4">
        <label htmlFor="preferredDate" className="form-label">
          Preferred Date:
        </label>
        <input
          type="date"
          id="preferredDate"
          className="form-control"
          style={{
            width: "300px",
          }}
        />
      </div>

      {/* Preferred Time */}
      <div className="mb-4">
        <label htmlFor="preferredTime" className="form-label">
          Preferred Time:
        </label>
        <input
          type="time"
          id="preferredTime"
          className="form-control"
          style={{
            width: "300px",
          }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/upload-requirements">
          <button className="btn btn-success">Back Page</button>
        </Link>
        <button type="submit" className="btn btn-success">
          Submit Application
        </button>
      </div>
    </div>
    </div>
  );
};

export default ScheduleAppointment;
