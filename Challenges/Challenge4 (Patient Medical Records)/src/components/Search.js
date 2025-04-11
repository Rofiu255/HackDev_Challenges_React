// import React from "react";
// import medical_records from "../medicalRecords";

// function Search({ setRecord, setId, id }) {
//   return (
//     <div className="layout-row align-items-baseline select-form-container">
//       <div className="select">
//         <select data-testid="patient-name" defaultValue="0">
//           <option value="0" disabled>
//             Select Patient
//           </option>
//           <option value={"1"}>{"John Oliver"}</option>
//         </select>
//       </div>

//       <button type="submit" data-testid="show">
//         Show
//       </button>
//     </div>
//   );
// }

// export default Search;


import React, { useState } from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId }) {
  const [selectedPatient, setSelectedPatient] = useState("0");

  const handleShow = () => {
    if (selectedPatient === "0") {
      alert("Please select a patient name");
    } else {
      const patient = medical_records.find((record) => record.id === selectedPatient);
      setRecord(patient);
      setId(selectedPatient);
    }
  };

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select 
          data-testid="patient-name" 
          value={selectedPatient} 
          onChange={(e) => setSelectedPatient(e.target.value)}
        >
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((record) => (
            <option key={record.id} value={record.id}>
              {record.data[0].userName}
            </option>
          ))}
        </select>
      </div>

      <button type="button" data-testid="show" onClick={handleShow}>
        Show
      </button>
    </div>
  );
}

export default Search;
