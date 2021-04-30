
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDqMTyES5zEHo1SjnBneB5H1ajko82JK4w",
  authDomain: "crwn-db-adc9f.firebaseapp.com",
  databaseURL: "https://crwn-db-adc9f.firebaseio.com",
  projectId: "crwn-db-adc9f",
  storageBucket: "crwn-db-adc9f.appspot.com",
  messagingSenderId: "647564863928",
  appId: "1:647564863928:web:db463f065a188b1591474d",
  measurementId: "G-3LHTTJMFMX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
