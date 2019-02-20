import firebase from 'firebase';
import 'firebase/firestore';

import config from './firebase.conf.json';

export default firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.firestore();

