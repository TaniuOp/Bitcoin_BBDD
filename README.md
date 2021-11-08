# Bitcoin_BBDD
Ejercicio de roles con creación y manipulación de BBDD para una empresa que vende BitCoins 
Equipo: Christian, Frampe y Taniu

EXPLICACION

Se ha creado una BD para la pantalla de index.html, en la que se se permite pedir información (captar Leads). 
Hemos decidido usar MongoDB para ello. 

Por otro lado, se ha creado una BD en MySQL para el registro del usuario una vez hace la compra de Bitcoins y el proceso de Login. 

Se ha querido usar Firebase Auht para la autenticación del usuario pero nos hemos encontrado con problemas e incompatibilidades al momento de querer registrar al usuario desde el mismo formulario tanto en Firebase como en MySQL.
Dado a ello, hemos migrado la autenticación a MySQL. 





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
