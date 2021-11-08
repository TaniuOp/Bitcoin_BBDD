//FIREBASE 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

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

// REGISTRO - FIREBASE Funcion para enviar datos a Firebase 
document.getElementById("submit").addEventListener("click",()=>{
// Declaramos credenciales del usuario 
// e.preventDefault()
let email = document.getElementById("email").value
let password =  document.getElementById("userpassword").value
// Math.floor(100000 + Math.random() * 900000);
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    const user = userCredential.user;
    console.log("Creado correctamente")
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage)
    });
})