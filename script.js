const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', //Modificar en cada PC 
    database: 'TiendaBitCoins',
    port: 8889 //Modificar en Taniu
});
connection.connect((err)=> {
    if(!err){
        console.log('Connection Established Successfully');
        //connection.end();
    }else{
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
// let query = 'SELECT * from Bitcoins';
// connection.query(query, (err, rows) => {
//     if(err) throw err;
//     console.log('Datos de tabla1: \n', rows);
//     connection.end();
// });

// FUNCION PARA CREACION DE CLIENTE EN BASE DE DATOS

app.get('/compra', (req,res) =>{
    res.sendFile(__dirname + '/pages/compra.html')
})
app.get('/cajero', (req,res) =>{
    res.sendFile(__dirname + '/pages/cajero.html')
})
app.get('/index', (req,res) =>{
    res.sendFile(__dirname + '/')
})

app.post('/create', urlencodedParser, (req, res) => {
    let query = `INSERT INTO Clientes 
    (Nombre, Apellido,Email,DNI,Telefono, Direccion, Bitcoins) VALUES (?, ?, ?, ?, ?, ?, ?);`;
    //console.log('Database:', req.body.database, '\nCollection: ', req.body.collectionName, '\nName: ', req.body.userName, '\nlastName: ', req.body.lastName);
    res.send(req.body);
    // Value to be inserted
    let userName = req.body.name;
    let userLastName = req.body.lastName;
    let userEmail = req.body.email
    let userDocument = req.body.dni;
    let userPhone = req.body.telefono
    let userAddress = req.body.direccion
    let bitCoins = req.body.bitcoin
    
    //Insertar informacion en base de datos
    connection.query(query, [userName, userLastName, userEmail, userDocument, userPhone, userAddress, bitCoins ], (err, rows) => {
        if (err) throw err;
        console.log(`Muchas gracias ${userName} por comprar en nuestra pagina. Tus ${bitCoins} Bitcoins han sido registrados`);        
    });
    
})



// MONGO DB PARA CAPTAR LEADS (INFO / INDEX) 

// MONGO DB
const url = "mongodb://localhost:27017/";
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

// Variables de mi base de datos 
const myDatabase = "Bitcoins"
const MyCollection = "Leads"

// CREAR DOCUMENTO DENTRO DE UNA COLECCION 
app.post('/info', urlencodedParser, (req, res) => {
    console.log('DB Name:', myDatabase, '\nCollection Name: ', MyCollection);
    res.send(req.body);
//Se declara el objeto para poder insertarlo en al coleción 
    const dbDocumentdata = { 
    "Name": req.body.name, 
    "Last name": req.body.apellido,
    "Email": req.body.email,
    "DNI":req.body.dni,
    "Phone": req.body.telefono,
    "Address": req.body.direccion,
    "Bitcoins": req.body.bitcoin
    }; 

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let getMyDB  = db.db(myDatabase);
        getMyDB.collection(MyCollection).insertOne(dbDocumentdata, function(err, res) {
        if (err) throw err;
        console.log("User added to Leads DB");
        db.close();
        });
    });
  });
  

  app.listen(3000);


//FIREBASE 

import { initializeApp } from 'firebase/app';
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

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
var admin = require("firebase-admin");
var serviceAccount = require("./package.json");

firebaseAdmin.auth().createUser({
    email: "user@example.com",
    password: "secretPassword"
  })
  .then(function(userRecord) {
    // A UserRecord representation of the newly created user is returned
    console.log("Successfully created new user:", userRecord.uid);
  })
  .catch(function(error) {
    console.log("Error creating new user:", error);
  });