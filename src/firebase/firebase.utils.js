import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAhTcZffv4e5AYn4wmKHNvw8Wq_--BG5tU",
  authDomain: "crwn-db-e9df4.firebaseapp.com",
  databaseURL: "https://crwn-db-e9df4.firebaseio.com",
  projectId: "crwn-db-e9df4",
  storageBucket: "crwn-db-e9df4.appspot.com",
  messagingSenderId: "623769385229",
  appId: "1:623769385229:web:65ee46f6936fd7bfb29844"
}
// Initialize Firebase
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase