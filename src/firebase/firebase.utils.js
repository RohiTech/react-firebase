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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    //console.log(firestore.doc('users/128fdashadu'));

    //const userRef = firestore.doc('users/128fdashadu');

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
