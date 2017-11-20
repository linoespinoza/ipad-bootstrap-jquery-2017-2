// Esto es un comentario
document.write("Esto es una prueba");

console.log("Esto es una prueba");

// String, cadena o texto
// 'Fruta'
// "Fruta del campo"

// Numbers, números
// 1
// -2
// 3.5
// 3.99999999
// 1.0

// Operador suma (+)
console.log(1 + 3);
console.log("It\'s a wonderful world");
console.log('lima' + 'peru');

// Operador resta (-)
// console.log(100 - 37);

// Operador multiplicación (*)
// console.log(100 * 1);

// Operador division (/)
// console.log(30 / 3);

// Strings Methods

// Creando una variable llamada texto y asignándole un valor "caterpillar"
var texto = "      Lino Espinoza      ";
var numero = '10000';
// El método length es aplicable a los strings y devuelve la cantidad de caracteres de la expresion evaluada

var tamanoTexto = texto.length;
var tamanoNumero = numero.length

// todo a minusculas
//console.log(texto.toLowerCase());

// todo a mayusculas
//console.log(texto.toUpperCase());

console.log(texto.trim());

// Booleans
var tieneDinero = false;
console.log(tieneDinero);

var x = 100;
var y = x + 102
console.log(y);

var weather = "rainy";
weather = "sunny";
console.log(weather);

var primerNombre = 'Lino';
var edad = 30;
var segundoNombre = 'Arturo';
var apellidoPaterno = 'Espinoza';
var apellidoMaterno = 'Fernández';

console.log(primerNombre + ' ' + segundoNombre + ' ' + apellidoPaterno + ' ' + apellidoMaterno);

// Functions

function potencia(num1, num2) {
	return Math.pow(num1, num2);
}

function saludo() {
	return "Hola, Lino Espinoza :)";
}

function elevarAlCuadrado(num) {
	return num * num;
}

console.log(potencia(2, 5));

console.log(saludo());
console.log(elevarAlCuadrado(5));

// Conditionals

// Condicion simple
if (edad == 35) {
	// console.log("Lino está en base 3");
}

console.log(typeof(edad)); // number
console.log(typeof("31")); // string

// Si la variable edad tiene como valor 35
if (edad == 31) {
	//console.log("Lino tiene 31 años");
// sino 
} else {
	//console.log("Lino está por debajo de 31 años");
}

// Dos condiciones

if (edad == 31) {
	console.log("Lino tiene 31 años");
} else if (edad > 31) {
	console.log("Lino está por encima de los 31 años");
} else {
	console.log("Lino está por debajo de los 31 años");
}

var d = new Date();
var diaActual = d.getDay();
var diaActualEnTexto;

console.log(diaActual);

switch (diaActual) {
	case 1: diaActualEnTexto = 'Lunes'; break;
	case 2: diaActualEnTexto = 'Martes'; break;
	case 3: diaActualEnTexto = 'Miércoles'; break;
	case 4: diaActualEnTexto = 'Jueves'; break;
	case 5: diaActualEnTexto = 'Viernes'; break;
	case 6: diaActualEnTexto = 'Sábado'; break;
	case 7: diaActualEnTexto = 'Domingo'; break;
	default: diaActualEnTexto = 'No es ningún día'; break;
}

console.log(Math.PI);

var cadena = "Esto es un texto";

// Arrays

var frutas = ['manzana', 'pera', 'piña', 'melocotón'];

var mezcla = ['manzana', 1, [false, 1.0], undefined];

console.log(mezcla[1]);

console.log(mezcla.length);
console.log(frutas.concat(mezcla));

console.log(mezcla.pop());
console.log(mezcla);
mezcla.push('plátano');
console.log(mezcla.reverse());

var curso = {
	nombre: 'Bootstrap & jQuery',
	fechaInicio: '10/10/2017',
	fechaFin: '10/12/2017'
};

curso.nombre = 'Wordpress';
curso["nombre"] = 'Marketing';
console.log(curso.nombre);
console.log(curso["fechaInicio"]);










































