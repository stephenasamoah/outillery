import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjym0f-xEB7F2f6pwgCW3uLs0IpvBKqTI",
    authDomain: "outillery.firebaseapp.com",
    databaseURL: "https://outillery.firebaseio.com",
    projectId: "outillery",
    storageBucket: "outillery.appspot.com",
    messagingSenderId: "651472983517",
    appId: "1:651472983517:web:65b73afa7f8cfe3c191234",
    measurementId: "G-63LSBSZ6WS"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
