// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

export const getFirebaseApp = () => {
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
      apiKey: 'AIzaSyBZzMTFavzwCANUtdh57dtb8SWbYel0RWw',
      authDomain: 'realtimechat-2f4ac.firebaseapp.com',
      projectId: 'realtimechat-2f4ac',
      storageBucket: 'realtimechat-2f4ac.firebasestorage.app',
      messagingSenderId: '919887599525',
      appId: '1:919887599525:web:4f19778a24028e7398ba4c',
      measurementId: 'G-2PRLPSK9T4',
   };

   // Initialize Firebase
   return initializeApp(firebaseConfig);
};
