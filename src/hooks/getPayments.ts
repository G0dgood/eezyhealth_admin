import { collection, getDocs } from "firebase/firestore";
import { db } from "../shared/firebase";

 

export const getPaymentsCollection = async () => {
  try {   
			
			   const paymentsCollectionRef = collection(db, 'payments');
    const snapshot = await getDocs(paymentsCollectionRef);
    const paymentsData = snapshot.docs.map(doc => doc.data());
   

    return paymentsData;
  } catch (error) {
    console.error('Error fetching payments collection:', error);
    throw error; // You can handle the error further up the call stack if needed
  }
};

// Usage example:
getPaymentsCollection()
  .then(data => {
    console.log(data); // Process the payments data here
  })
  .catch(error => {
    console.error('Error fetching payments collection:', error);
  });
