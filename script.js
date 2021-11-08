const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql');
const bcrypt = require('bcrypt');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', //Modificar en cada PC 
    // password: 'password',
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

// BOTONES DE REDIRECCION 
app.get('/compra', (req,res) =>{
    res.sendFile(__dirname + '/pages/compra.html')
})
app.get('/cajero', (req,res) =>{
    res.sendFile(__dirname + '/pages/cajero.html')
})
app.get('/user', (req, res) =>{
    res.sendFile(__dirname + '/pages/yourAccount.html')
})

// REGISTRO - CREACION DE CLIENTE EN BASE DE DATOS

app.post('/create', urlencodedParser, async (req, res, next) => {
    res.send(req.body);
    // Value to be inserted
    let userName = req.body.name
    let userLastName = req.body.lastName
    let userEmail = req.body.email
    let userPassword = req.body.userpassword  
    // const saltRounds = 10; // The cost factor controls how much time is needed to calculate a single BCrypt hash.
    // let encryptedPassword = await bcrypt.hash(userPassword, hash)
    let userDocument = req.body.dni
    let userPhone = req.body.telefono
    let userAddress = req.body.direccion
    let bitCoins = req.body.bitcoin
    //Insertar informacion en base de datos
    let query = `INSERT INTO Clientes 
    (Nombre, Apellido,Email, Contrasena , DNI, Telefono, Direccion, Bitcoins) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
    connection.query(query, [userName, userLastName, userEmail, userPassword, userDocument, userPhone, userAddress, bitCoins], (err, rows) => {
        if (err) throw err;
        console.log(`Muchas gracias ${userName} por comprar en nuestra pagina. Tus ${bitCoins} Bitcoins han sido registrados`);        
    });
    
})

app.post('/extract', urlencodedParser, (req, res) =>{
    let query = `CALL filterTodo(?);`
    let bitCoins = req.body.extract
    res.send(req.body)
    connection.query(query, true, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
      });
})


// LOGIN - CAJERO 
app.post('/login', urlencodedParser, (req, res)=> {
    res.send(req.body);
    let myUserEmail = req.body.myEmail
    let myUserPassword = req.body.myUserpassword  
    let query = `SELECT * FROM Clientes WHERE (Email ${myUserEmail} && Contrasena ${myUserPassword})`;
        // let query = 'SELECT * FROM Clientes WHERE (Email AND Contrasena) VALUES (?, ?)';
        // let query = 'SELECT * FROM Clientes WHERE (Contrasena = ?)';
        // connection.query(query, [myUserPassword], 
        connection.query(query, [myUserEmail, myUserPassword], 
             (error, results)=> {
              if (error) throw error;
              console.log(results)
            res.end       
             })});

// // LOGIN 
// app.post('/login', (req, res)=> {
//     res.send(req.body);
//     let userEmail = req.body.email
//     let userPassword = req.body.userpassword  
//     // var hash = bcrypt.hashSync(password, 10);
//     // const dcryptPassword = bcrypt.compareSync(password, hash); 
//     // if (email && password) {
//         connection.query('SELECT * FROM Clientes WHERE (Email = ? AND Contrasena = ?)', [userEmail, userPassword], 
//         (error, results, fields)=> {
//             if (results.length > 0 ) {
//                 res.send("Successful");
//             } else {
//                 res.send('Incorrect Email and/or Password!');
//             }           
//             res.end();
//         });
//     // } else {
//     //     res.send('Please enter Username and Password!');
//     //     res.end();
//     }
// );


// MONGO DB PARA CAPTAR LEADS (INFO / INDEX) 
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


 
