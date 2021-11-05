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
app.get('/user', (req, res) =>{
    res.sendFile(__dirname + '/pages/yourAccount.html')
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
app.post('/extract', urlencodedParser, (req, res) =>{
    let query = `UPDATE Clientes SET Bitcoins = ? WHERE id_cliente = 1`
    let query2 = `SELECT BitCoins from Clientes WHERE id_cliente = 1`
    res.send(req.body)
    let bitCoins = req.body.extract

    connection.query(query, bitCoins, (err, rows) =>{
        console.log(`Has extraido de tu cuenta con x bitCoins: ${bitCoins} bitCoins. Tu saldo actual es x`)
    } )

})

app.listen(3000);


