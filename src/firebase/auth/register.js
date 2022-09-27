import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const registerWithEmailPass = (email, password, data) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      


    })
    .catch((error) => {
  
    
      // ..
    });
};
