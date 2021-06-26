import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaStLn4fPISI-bQzYAVlIENug7r_6WDPY",
    authDomain: "crwn-db-dc739.firebaseapp.com",
    projectId: "crwn-db-dc739",
    storageBucket: "crwn-db-dc739.appspot.com",
    messagingSenderId: "504398032015",
    appId: "1:504398032015:web:655c963da2770d16aa54fa",
    measurementId: "G-VZXP862WB6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
