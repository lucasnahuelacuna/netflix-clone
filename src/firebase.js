import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCszzk2CDoByiTMLxifun05luy9JmqS6-0",
    authDomain: "netflix-clone-1cf0b.firebaseapp.com",
    projectId: "netflix-clone-1cf0b",
    storageBucket: "netflix-clone-1cf0b.appspot.com",
    messagingSenderId: "139651992403",
    appId: "1:139651992403:web:5141ac17388e7fb89a6fa6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth

export { db, auth }