
// //FIREBASE 
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
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

// SIGN OUT
document.getElementById("logout").addEventListener("click", ()=>{
    signOut(auth).then(() => {
      console.log("User loged out! Bye");
      location.href = "../index.html";
    }).catch((error) => {
        console.log("We had some error")
    });
})