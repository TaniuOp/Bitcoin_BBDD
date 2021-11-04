 #DROP DATABASE TiendaBitCoins;
    CREATE DATABASE TiendaBitCoins;
    USE TiendaBitCoins;
    CREATE TABLE Clientes(
        id_cliente INT AUTO_INCREMENT,
        Nombre VARCHAR(40),
        Apellido VARCHAR(50),
        Email VARCHAR(40),
        DNI CHAR(9),
        Telefono VARCHAR(20),
        Direccion VARCHAR(100),
        Bitcoins INT,
        PRIMARY KEY(id_cliente)
    );