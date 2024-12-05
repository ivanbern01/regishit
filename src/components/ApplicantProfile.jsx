import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import ProgressHeader
import styles from "../styles/ApplicantProfile.module.css";

const ApplicantProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    givenName: "",
    middleName: "",
    middleNameNotApplicable: false,
    familyName: "",
    suffix: "",
    sex: "",
    dateOfBirth: "",
    civilStatus: "",
    contactNumber: "",
    religion: "",
    nationality: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    hasDisability: false,
    disabilityNature: "",
    partOfIndigenousGroup: false,
    indigenousGroup: "",
    photo: null, // state to hold photo data
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
  const [isOpen, setIsOpen] = useState(false); // For mobile sidenav toggle

  // State for tracking the current step
  const [currentStep, setCurrentStep] = useState(1); // Set current step to 2 (Applicant Profile)

  // Handle image change for preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const validateForm = () => {
      const errors = {};
      if (!formData.givenName) errors.givenName = "Given Name is required.";
      if (!formData.familyName) errors.familyName = "Family Name is required.";
      if (!formData.dateOfBirth) errors.dateOfBirth = "Date of Birth is required.";
      if (!formData.contactNumber) errors.contactNumber = "Contact Number is required.";
      if (!formData.nationality) errors.nationality = "Nationality is required.";
      if (!formData.addressLine1) errors.addressLine1 = "Address is required.";
      if (!formData.city) errors.city = "City is required.";
      if (!formData.state) errors.state = "State is required.";
      if (!formData.postalCode) errors.postalCode = "Postal Code is required.";
      return errors;
    };

    if (file) {
      const fileSizeInKB = file.size / 1024; // Convert size to KB

      if (fileSizeInKB > 200) {
        setErrorMessage(
          "File size exceeds 200 KB. Please upload a smaller image."
        );
        e.target.value = ""; // Clear the file input to allow the user to select another file
        return;
      }

      setErrorMessage(""); // Reset error message if file size is valid

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handlePreviewClick = () => {
    document.getElementById("fileInput").click();
  };

  // Handle the sidenav toggle (for mobile view)
  const toggleSidenav = () => {
    setIsOpen(!isOpen); 
  };

  // Handle navigation to the next page
  const handleNext = () => {
    setCurrentStep(1); // Move to the next step
    navigate("/family-profile"); // Replace '/next-page' with the desired route
  };

  // Handle navigation to the previous page
  const handleBack = () => {
    setCurrentStep(0); // Return to the first step
    navigate("/registration-form"); // Replace '/previous-page' with the desired route
  };

  return (
    <div>
      {/* ProgressHeader displayed at the top */}
      <ProgressHeader currentStep={1} />

      {/* Main Content */}
      <div
        className="card shadow p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form>
          <h1 className="mb-4 text-center">
            <i className="bi bi-person-fill"></i> Personal Information
          </h1>
          <div className="row mb-4">
            {/* Image Upload on the Left */}
            <div className="col-md-3 d-flex flex-column align-items-center">
              <div
                className="border rounded mb-2"
                onClick={handlePreviewClick}
                style={{
                  width: "150px",
                  height: "150px",
                  cursor: "pointer",
                  backgroundColor: "#f8f9fa",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span className="text-muted text-center">
                    Click to upload
                    <br />
                    2x2
                  </span>
                )}
              </div>
              <input
                id="fileInput"
                type="file"
                className="form-control d-none"
                accept="image/*"
                onChange={handleImageChange}
              />
              {/* Center the label */}
              <small className="text-muted text-center mt-2">
                Photo (200 KB max.)
              </small>
              {/* Display error message if the file size is too large */}
              {errorMessage && (
                <div className="text-danger text-center mt-2">
                  {errorMessage}
                </div>
              )}
            </div>

            {/* Personal Information and Address on the Right */}
            <div className="col-md-9">
              <h5>Personal Information</h5>
              {/* Personal Information */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Family Name:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">First Name:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Middle Name:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Suffix (Optional):</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date of Birth:</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Contact Number:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Religion:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Citizenship:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  {/* Gender */}
                  <label className="form-label">Gender at Birth:</label>
                  <select className="form-select" aria-label="Select gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Age:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Civil Status:</label>
                  <select className="form-select" aria-label="Select civil status">
                    <option value="">Select Civil Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="widowed">Widowed</option>
                    <option value="divorced">Divorced</option>
                    <option value="separated">Separated</option>
                    <option value="annulled">Annulled</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address:</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              {/* Address Section */}
              <hr className="mt-4" />
              <h5>Permanent Address</h5>

              <div className="row g-3 mt-3">
                <div className="col-md-4">
                  <label className="form-label">Unit Number:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Street Name:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Subdivision/Barangay:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">City:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Province:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Zip Code:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">District:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Municipality:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Region:</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <hr className="mt-4" />
              <div className="row g-3 mt-3">
                <h5>Other Information:</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input check"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      I have disability
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input check"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      I am part of an indigenous group
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Buttons to navigate */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/registration-form">
              <button type="submit" className="btn btn-success mt-4">
                Back Page
              </button>
            </Link>
            <Link to="/family-profile">
              <button type="submit" className="btn btn-success mt-4">
                Next Page
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantProfile;
