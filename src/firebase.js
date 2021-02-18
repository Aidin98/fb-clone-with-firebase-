import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBmoJYgZmNOQ0HSt2x_j3QvjqEzc75nVUw",
    authDomain: "facebook-clone-caa4e.firebaseapp.com",
    projectId: "facebook-clone-caa4e",
    storageBucket: "facebook-clone-caa4e.appspot.com",
    messagingSenderId: "913262798558",
    appId: "1:913262798558:web:2f5ad5ea469e86ca0d044f"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;