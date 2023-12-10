// "use client"
// import { db } from "@/config/firebase";
// import { collection, getDoc, getDocs } from "firebase/firestore";

// export default function Admin() {

// const fetchDocs  = async ()=>{

//   try {
//     const collectionName = collection(db, "patients")
//     const docs = await getDoc(collectionName)
// const patients = []
//     docs.forEach(doc => {
//       patients.push({
//         id:doc.id,
//         ...doc.data()
//       })
//     });
    
//     console.log("students", students)

//   } catch (error) {
//     console.error("error", error)
//   }
// }
//   return (
//     <table>
//       <tr><td>Name</td></tr>
//       <tr><td>Contact</td></tr>
//       <tr><td>Medical Condition</td></tr>
//       {
//       patients.map((patient)=>{
//           return(
//             <tr>
//               <td>{student.name}</td>
//               <td>{student.contact}</td>
//               <td>{student.medical}</td>
//             </tr>
//           )
//         })
//       }
//     </table>
//   )
// }
