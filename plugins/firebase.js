import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyBW_CxONuI66QaIW7rfQJkhHwWHfjDXGBA',
  authDomain: 'tutodiv-edo.firebaseapp.com',
  databaseURL: 'https://tutodiv-edo.firebaseio.com',
  projectId: 'tutodiv-edo',
  storageBucket: 'tutodiv-edo.appspot.com',
  messagingSenderId: '975585724650',
  appId: '1:975585724650:web:30f32097ee878994b12f93',
  measurementId: 'G-XBE6RFL2ZM'
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
firebase.analytics()

export default firebase
