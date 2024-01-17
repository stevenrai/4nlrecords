// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG4RUpA-McsUKymyUknWeN0PTmtJ4h1y4",
  authDomain: "nl-record-book.firebaseapp.com",
  databaseURL: "https://nl-record-book-default-rtdb.firebaseio.com",
  projectId: "nl-record-book",
  storageBucket: "nl-record-book.appspot.com",
  messagingSenderId: "549459914420",
  appId: "1:549459914420:web:0b9a8a4722fced5dd7f1e1",
  measurementId: "G-4PYT96N5ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Function to get data from Firebase real-time database
const getData = async (path) => {
  try {
    const dbRef = ref(database, path);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error getting data: ", error);
  }
};
 
 // Call the function to get data from Firebase
 getData();

 export { getData };

 export { database };

