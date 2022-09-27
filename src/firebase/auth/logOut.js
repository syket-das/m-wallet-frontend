import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
