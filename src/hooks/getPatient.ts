import { collection, query, where, getDocs } from 'firebase/firestore'; 
import { db } from '../shared/firebase';

export const getPatients = async () => {
  try {
			const usersCollectionRef = collection(db, 'users'); 
    const q = query(usersCollectionRef, where('role', '==', 'PATIENT'));
    const snapshot = await getDocs(q);
			const patientsData = snapshot.docs.map(doc => doc.data());
			
    return patientsData;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error; // You can handle the error further up the call stack if needed
  }
};

// Usage example:
getPatients()
  .then(data => {
    console.log(data); // Process the patients data here
  })
  .catch(error => {
    console.error('Error fetching patients:', error);
  });
