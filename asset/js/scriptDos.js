/* Operador ternario y operadores ANB Y OR */

/* condicion ? valorSiVerdadero : valorSiFalso */

/*Se solicita generar un login de acceso para valida los datos de un usuario con respecto a su nombre de
usuario y su contraseña. estos seran recvibidos mediante un promp, los datosdel unico usuario que tiene aceso
acceso son nombreDeUsuario ADMIN y contraseña: 987654321 */

var nombreDeUsuario = prompt('Ingrese su nombre de usuario: ');
var contrasena = prompt('ingrese su contraseña: ');

/* if (nombreDeUsuario === 'ADMIN' && contrasena === '987654321') {
    console.log('Wena choro');
}else{
    console.log('compare pase de largo ute no e na');
} */


(nombreDeUsuario === 'ADMIN' && contrasena === '987654321') ? console.log('acceso perminitado') : console.log('acceso denegado');