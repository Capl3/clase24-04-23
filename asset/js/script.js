
/* var nombreRecibido = prompt('Ingresa tu nombre')
console.log(nombreRecibido)



alert(nombreRecibido) */
function solicitarDatos() {
var numeroUno = parseInt(prompt("ingrese un numero"))
var numeroDos = parseInt(prompt('ingrese otro numero'))
var arregloNumeros = [numeroUno, numeroDos]
return arregloNumeros;
    
}

function sumar(arregloNumeros) {
    var resultado = arregloNumeros[0] + arregloNumeros[1];
    return resultado;
}
function restar(params) {
    var resultado = arregloNumeros[0] - arregloNumeros[1];
    return resultado;
}
function dividir(params) {
    var resultado = arregloNumeros[0] * arregloNumeros[1];
    return resultado;
}
function multiplicar(params) {
    var resultado = arregloNumeros[0] / arregloNumeros[1];
    return resultado;
}

var ingresarDatos = solicitarDatos();
resultadoSuma = sumar(ingresarDatos);
console.log(resultadoSuma)