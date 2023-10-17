import { useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/firebaseConfig" // Importe o auth diretamente

const provider = new GoogleAuthProvider()

export function useAuthentication() {
  const [authenticated, setAuthenticated] = useState('loading')

  function login() {
    signInWithPopup(auth, provider)
      .then((a) => {
        console.log('signin:', a)
      })
      .catch((error) => {
        console.error('signin error:', error)
      })
  }

  function logout() {
    signOut(auth)
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(user)
      } else {
        setAuthenticated()
      }
    })

    // Limpeza na desmontagem
    return () => unsubscribe()

  }, [])

  return { login, logout, loggedIn: authenticated }
}
