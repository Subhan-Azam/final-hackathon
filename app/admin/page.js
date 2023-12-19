"use client";
import "./admin.css";
import { db } from "@/config/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Sidebar from "../(components)/sidebar/sidebar";

export default function Admin() {
  const [allPatients, setAllPatients] = useState([]);
  const [editedPatient, setEditedPatient] = useState(null);

  const fetchDocs = async () => {
    try {
      const collectionName = collection(db, "patients");
      const querySnapshot = await getDocs(collectionName);

      const patientData = [];
      querySnapshot.forEach((doc) => {
        patientData.push({ id: doc.id, ...doc.data() });
      });

      setAllPatients(patientData);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const handleEdit = (patient) => {
    setEditedPatient(patient);
  };

  const handleSave = async () => {
    try {
      const patientDocRef = doc(db, "patients", editedPatient.id);
      await updateDoc(patientDocRef, editedPatient);
      setEditedPatient(null);
      fetchDocs(); // Refresh patient list after update
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  const handleInputChange = (e, field) => {
    setEditedPatient({ ...editedPatient, [field]: e.target.value });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "patients", id));
      fetchDocs(); // Refresh patient list after deletion
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div className="flex items-center">
      <Sidebar />

            
      <table className="relative top-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Medical Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allPatients.map((patient, index) => (
            <tr key={index}>
              <td>
                {editedPatient?.id === patient.id ? (
                  <input
                    type="text"
                    value={editedPatient.name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                ) : (
                  patient.name
                )}
              </td>
              <td>
                {editedPatient?.id === patient.id ? (
                  <input
                    type="text"
                    value={editedPatient.contact}
                    onChange={(e) => handleInputChange(e, "contact")}
                  />
                ) : (
                  patient.contact
                )}
              </td>
              <td>
                {editedPatient?.id === patient.id ? (
                  <input
                    type="text"
                    value={editedPatient.medical}
                    onChange={(e) => handleInputChange(e, "medical")}
                  />
                ) : (
                  patient.medical
                )}
              </td>
              <td>
                {editedPatient?.id === patient.id ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(patient)}>Edit</button>
                )}
                
                  <button onClick={() => handleDelete(patient.id)}>
                    Delete
                  </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// "use client";
// import { db } from "@/config/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";

// export default function Admin() {
//   const [allPatients, setAllPatients] = useState([]);

//   const fetchDocs = async () => {
//     try {
//       const collectionName = collection(db, "patients");
//       const querySnapshot = await getDocs(collectionName);

//       const patientData = [];
//       querySnapshot.forEach((doc) => {
//         patientData.push(doc.data());
//       });

//       setAllPatients(patientData);
//     } catch (error) {
//       console.error("error", error);
//     }
//   };

//   useEffect(() => {
//     fetchDocs();
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Contact</th>
//           <th>Medical Condition</th>
//         </tr>
//       </thead>
//       <tbody>
//         {allPatients.map((patient, index) => (
//           <tr key={index}>
//             <td>{patient.name}</td>
//             <td>{patient.contact}</td>
//             <td>{patient.medical}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
