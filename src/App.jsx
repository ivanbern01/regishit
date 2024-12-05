import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import ApplicantProfile from "./components/ApplicantProfile";
import FamilyProfile from "./components/FamilyProfile";
import EducationalProfile from "./components/EducationalProfile";
import UploadRequirements from "./components/UploadRequirements";
import ScheduleAppointment from "./components/ScheduleAppoinment"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/applicant-profile" element={<ApplicantProfile />} />
        <Route path = "/family-profile" element ={<FamilyProfile /> } />
        <Route path = "/educational-profile" element = {<EducationalProfile/>} />
        <Route path = "/upload-requirements" element = {<UploadRequirements/>}/>
        <Route path =  "/schedule-appointment" element = {<ScheduleAppointment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
