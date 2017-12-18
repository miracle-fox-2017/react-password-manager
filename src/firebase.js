import { initializeApp } from 'firebase'
const app = initializeApp({
    apiKey: "AIzaSyA4CRR-VX9bW9YOKPkrw4Q9CNIxTNCEl6I",
    authDomain: "react-password-manager.firebaseapp.com",
    databaseURL: "https://react-password-manager.firebaseio.com",
    projectId: "react-password-manager",
    storageBucket: "react-password-manager.appspot.com",
    messagingSenderId: "700454174976"
  })

export const db = app.database()
export const passManager = db.ref('passManager')
