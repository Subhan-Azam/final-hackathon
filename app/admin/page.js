"use client";
import { db } from "@/config/firebase";
import { collection, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Admin() {
  const [allPatients, setAllPatients] = useState([]);

  const fetchDocs = async () => {
    try {
      const collectionName = collection(db, "patients");
      const docs = await getDoc(collectionName);
      const patientsData = [];

      docs.forEach((doc) => {
        patientsData.push(doc.Data());
      });

      setAllPatients;
      console.log("patientsData", patientsData);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchDocs;
  }, []);

  return (
    <table>
      <tr>
        <td>Name</td>
        <td>Contact</td>
        <td>Medical Condition</td>
      </tr>

      {allPatients.map((patient) => {
        return (
          <tr>
            <td>{patient.name}</td>
            <td>{patient.contact}</td>
            <td>{patient.medical}</td>
          </tr>
        );
      })}
    </table>
  );
}
