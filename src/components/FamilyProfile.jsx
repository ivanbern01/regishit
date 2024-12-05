import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import the ProgressHeader component

const FamilyProfile = () => {
  // Step state for ProgressHeader
  const [currentStep, setCurrentStep] = useState(2); // Assuming this is step 2 in the form
  
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const [siblings, setSiblings] = useState([{ fullName: "", age: "" }]);

  const handleAddSibling = () => {
    setSiblings([...siblings, { fullName: "", age: "" }]);
  };

  const handleRemoveSibling = (index) => {
    const updatedSiblings = siblings.filter((_, i) => i !== index);
    setSiblings(updatedSiblings);
  };

  const handleSiblingChange = (index, field, value) => {
    const updatedSiblings = [...siblings];
    updatedSiblings[index][field] = value;
    setSiblings(updatedSiblings);
  };

  return (
    <div className="containers" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ProgressHeader component */}
      <ProgressHeader currentStep={currentStep} /> {/* ProgressHeader displayed at the top */}

      {/* Card Container */}
      <div
        className="card shadow p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          flex: 1,  // Allow the card to stretch and take available space
          overflowY: "auto", // Allow scrolling if content exceeds the viewport height
        }}
      >
        <h1 className="mb-4">
          <i className="bi bi-people-fill"></i> Family Background
        </h1>
        <hr className="divider" />
        {/* Parents Section */}
        <div className="row">
          <div className="col-md-6">
            <h5>Parent 1</h5>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Relationship:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Highest Education:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Occupation:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Employer:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Monthly Income:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Number:</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="col-md-6">
            <h5>Parent 2</h5>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Relationship:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Highest Education:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Occupation:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Employer:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Monthly Income:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Number:</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <hr className="divider" /> {/* Line below progress bar */}
        {/* Guardian and Siblings Section */}
        <div className="row">
          {/* Guardian Section */}
          <div className="col-md-6">
            <h4 className="mb-3">Guardian</h4>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Relationship:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Highest Education:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Occupation:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Employer:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Monthly Income:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Number:</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          {/* Siblings Section */}
          <div className="col-md-6">
            <h4 className="mb-3">Siblings</h4>
            {siblings.map((sibling, index) => (
              <div className="d-flex align-items-center mb-3" key={index}>
                <span className="me-2">{index + 1}</span>
                <div className="me-2" style={{ flex: 1 }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={sibling.fullName}
                    onChange={(e) =>
                      handleSiblingChange(index, "fullName", e.target.value)
                    }
                  />
                </div>
                <div className="me-2" style={{ width: "100px" }}>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Age"
                    value={sibling.age}
                    onChange={(e) =>
                      handleSiblingChange(index, "age", e.target.value)
                    }
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-success me-2"
                  onClick={handleAddSibling}
                >
                  +
                </button>
                {siblings.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveSibling(index)}
                  >
                    -
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Nav Button */}
        <div className="d-flex justify-content-between mt-4">
          <Link to="/applicant-profile">
            <button className="btn btn-success mt-4">Back Page</button>
          </Link>
          <Link to="/educational-profile">
            <button type="submit" className="btn btn-success mt-4">
              Next Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FamilyProfile;
