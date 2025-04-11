// 
import React, { useState } from "react";
import medical_records from "../medicalRecords";

function Records({ record, id }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!record) {
    return null;
  }

  const patientData = record.data[currentIndex];
  const nextPatientIndex = (currentIndex + 1) % record.data.length; // Loop back to the first record

  const handleNext = () => {
    setCurrentIndex(nextPatientIndex);
  };

  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{patientData.userName}</h4>
          <h5 id="patient-dob">DOB: {patientData.userDob}</h5>
          <h5 id="patient-height">Height: {patientData.meta.height} cm</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          <tr>
            <td>{patientData.id}</td>
            <td>{new Date(patientData.timestamp).toLocaleDateString()}</td>
            <td>{patientData.diagnosis.name}</td>
            <td>{patientData.meta.weight} kg</td>
            <td>{patientData.doctor.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Records;
