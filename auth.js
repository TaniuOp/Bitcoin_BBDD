
// //FIREBASE 

// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBCmoeRPQzuqfEEExVX3n75WhyaWdcZDYA",
//   authDomain: "thebridgecoins.firebaseapp.com",
//   projectId: "thebridgecoins",
//   storageBucket: "thebridgecoins.appspot.com",
//   messagingSenderId: "211412097086",
//   appId: "1:211412097086:web:c5481dfc8f0fead117d96f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// // // CREAR USUARIO
// // let userDocument = req.body.dni;
// // let randomPassword = Math.floor(100000 + Math.random() * 900000);

// let userDocument = "juan@gmail.com";
// let randomPassword = 123;

// // app.post('/create', urlencodedParser, (req, res) => { 
// // createUserWithEmailAndPassword(auth, "juan@gmail.com", 12345)
// // .then((userCredential) => {
// //   const user = userCredential.user;
// //   console.log("Creado correctamente")
// // })
// // .catch((error) => {
// //   const errorCode = error.code;
// //   const errorMessage = error.message;
// //     });

// //   })


//   const firebase = require('firebase-admin');

//   firebase.auth().defaultAuth.createUser({
//     email: req.body.email,
//     password: req.body.password,
//     displayName: req.body.username,
//   })

// // app.post('/create', urlencodedParser, (req, res) => {
// // createUserWithEmailAndPassword(auth, userDocument, randomPassword)
// // .then((userCredential) => {
// //   const user = userCredential.user;
// //   console.log("Creado correctamente")
// //   registroToLogin();
// // })
// // .catch((error) => {
// //   const errorCode = error.code;
// //   const errorMessage = error.message;
// //   alert(errorCode + errorMessage)
// // });
// // })




// // CREAR USUARIO
//   // document.getElementById("buttonSubmit").addEventListener("click",()=>{
//   //     let email = document.getElementById("rUsuario").value
//   //     let password = document.getElementById("rPassword").value
//   //     createUserWithEmailAndPassword(auth, email, password)
//   //     .then((userCredential) => {
//   //         const user = userCredential.user;
//   //         console.log("Creado correctamente")
//   //         registroToLogin();
//   //     })
//   //     .catch((error) => {
//   //         const errorCode = error.code;
//   //         const errorMessage = error.message;
//   //         alert(errorCode + errorMessage)
//   //     });
      
//   // })
// // // LOGIN
// // let estasLogin = false;
// // let enlace = document.getElementById("enlace")

// // document.getElementById("buttonLogin").addEventListener("click",()=>{
// //     let email = document.getElementById("lUsuario").value
// //     let password = document.getElementById("lPassword").value
// //     signInWithEmailAndPassword(auth, email, password)
// //     .then((userCredential) => {
// //         const user = userCredential.user;
// //         console.log("Login CORRECTO");
// //         cambioLuz();
// //         outBoton(); 
// //         estasLogin = true;
// //         enlace.href = "./pages/question.html";
      

// //     })
// //     .catch((error) => {
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //         alert(errorCode + errorMessage)
// //     });
// // })

document.getElementById('submit').addEventListener('click', ()=>{


    window.alert("Entra aqui")

})

//FIREBASE 

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
// import Firebase from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCmoeRPQzuqfEEExVX3n75WhyaWdcZDYA",
  authDomain: "thebridgecoins.firebaseapp.com",
  projectId: "thebridgecoins",
  storageBucket: "thebridgecoins.appspot.com",
  messagingSenderId: "211412097086",
  appId: "1:211412097086:web:c5481dfc8f0fead117d96f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


let email = document.getElementById("email").value;
let password = 1234;
// Math.floor(100000 + Math.random() * 900000);
document.getElementById('submit').addEventListener('click', ()=>{


  window.alert("Entra aqui")
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Creado correctamente")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error de Firebase")
  });

})


    
