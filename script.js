const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TiendaBitCoins'
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
    res.sendFile(__dirname + '/pages/compra.html');
  });
// let query = 'SELECT * from Bitcoins';
// connection.query(query, (err, rows) => {
//     if(err) throw err;
//     console.log('Datos de tabla1: \n', rows);
//     connection.end();
// });

// FUNCION PARA CREACION DE CLIENTE EN BASE DE DATOS


app.post('/create', urlencodedParser, (req, res) => {
    let query = `INSERT INTO Clientes 
    (Nombre, Apellido,Email,DNI,Telefono, Direccion) VALUES (?, ?, ?, ?, ?, ?);`;
    //console.log('Database:', req.body.database, '\nCollection: ', req.body.collectionName, '\nName: ', req.body.userName, '\nlastName: ', req.body.lastName);
    res.send(req.body);
            // Value to be inserted
            let userName = req.body.name;
            let userLastName = req.body.lastName;
            let userEmail = req.body.email
            let userDocument = req.body.dni;
            let userPhone = req.body.telefono
            let userAddress = req.body.direccion
            
      //Insertar informacion en base de datos
    connection.query(query, [userName, userLastName, userEmail, userDocument, userPhone, userAddress ], (err, rows) => {
        if (err) throw err;
    connection.query(query2)
        console.log("Row inserted with id = "
            + rows.insertId);
        
    });
      
    })
    app.listen(3000);


