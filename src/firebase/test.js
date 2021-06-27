import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('MuM4Jgl3A1trLPRBgFfw').collection('cartItems').doc('cyADkIW85JBbLllwW9K7');
firestore.doc('/users/MuM4Jgl3A1trLPRBgFfw/cartItems/cyADkIW85JBbLllwW9K7');
firestore.collection('/users/MuM4Jgl3A1trLPRBgFfw/cartItems');

