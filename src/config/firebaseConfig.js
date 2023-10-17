import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  apiKey: "AIzaSyBe1wh7pwPaSrInRS-yr_Yv8lJ0622Cjpg",
  authDomain: "infogest-sistemas.firebaseapp.com",
  databaseURL: "https://infogest-sistemas.firebaseio.com",
  projectId: "infogest-sistemas",
  storageBucket: "infogest-sistemas.appspot.com",
  messagingSenderId: "672888458440",
  appId: "1:672888458440:web:2c23935de79cd83e5829fd"
}

const firebaseApp = initializeApp(firebaseConfig)
const database = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)

export { firebaseApp, database, auth }
