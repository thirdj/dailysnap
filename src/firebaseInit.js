import firebase from 'firebase';
import config from './firebase.config';

export const firebaseInit = firebase.initializeApp(config);

export const auth = firebaseInit.auth();
export const database = firebaseInit.database();

export const provider = new firebase.auth.GoogleAuthProvider();
