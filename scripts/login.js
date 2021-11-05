
// //FIREBASE 
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
// import Firebase from 'firebase/app'

// Configuracion de Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyBCmoeRPQzuqfEEExVX3n75WhyaWdcZDYA",
  authDomain: "thebridgecoins.firebaseapp.com",
  projectId: "thebridgecoins",
  storageBucket: "thebridgecoins.appspot.com",
  messagingSenderId: "211412097086",
  appId: "1:211412097086:web:c5481dfc8f0fead117d96f"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


// LOGIN
document.getElementById("loginFirebase").addEventListener("click",()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("contrasena").value
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Login CORRECTO");
    location.href = "../pages/yourAccount.html";
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage)
  });
})





