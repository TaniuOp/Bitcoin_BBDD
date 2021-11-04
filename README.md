# Bitcoin_BBDD
Ejercicio de roles con creación y manipulación de BBDD para una empresa que vende BitCoins 
Equipo: Christian, Frampe y Taniu


PROYECTO

Somos una empresa que vende BitCoins. 
El proyecto consta de 3 partes: 

1- El cliente pide información sobre el bitcoin 
	- Datos obligatorios: Nombre, apellido, email
	- Datos opcionales: DNI, teléfono, dirección, cuantos Bitcoin quisiera comprar 
	
2- El cliente compra 
	- Pedimos los datos de usuario (en este caso todos son obligatorios) 
		* Nombre, Apellido, DNI, mail, teléfono, dirección
		* Resumen Compra 
			* Total en euros  
			* Bitcoins comprados 
			* Cambio actual de Bitcoin 
	- Se le genera una contraseña automática de 10 caracteres para que pueda ir a extraer sus BitCoins 

3- El cliente extrae los BitCoins del “cajero”
	- Pedimos autenticación 
		* DNI 
		* Contraseña 
	- Se le muestra la info de su saldo 
		* Saldo previo 
		* Saldo a extraer 
		* Saldo actual 

No es importante el front, sino la lógica del Backend. 

Decidimos nosotros la(s) BBDD a usar: Firebase, MONGO o MySQL 

Tenemos derecho a : 
- 1 respuesta mas por parte de Davinia y  3 respuestas por parte de Borja o Fer 
