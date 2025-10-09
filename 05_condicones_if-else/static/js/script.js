//Ejercicios codiciones IF else 
console.log("Conexion de JS  establecida...");

/* 
1.Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(18 años o mas) o no.
*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su edad: ")); // Input conversion string a numero
    //condicion IF - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " Aprobada para votar.");
    } else if (edad >= 0 && edad <= 18) {//&& compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar.");
    } else {
        alert("ingrese un valor válido");

    }

};

/*
2. Contraseña valida 
Pide una contrseña prompt().
Si es igual 1 "1234", muestra un mensaje 
de acceso permitido. En caso contrario,
Muestra acceso denegado.
*/
function validarPassword() {
    let clave = "1234";
    let pass = prompt("Ingrese su contraseña: ")
    //Condicion estructura if - else 
    if (pass == clave) {
        alert("Acceso Permitido...");
    } else {
        alert("Acceso Denegado");
    }
}
/*   
3.Pide un número por prompt().
Evalúa si el número es par o impar
y muestra el resultado con alert().
  */

function verificarParImpar() {
    let numero = parseInt(prompt("Ingresar Número"));
    if (numero % 2 == 0) {
        alert("Es par");
    } else {
        alert("Es impar");
    }
};
/*
4.Solicita la temperatura actual. Si es mayor o igual a 
30, muestra “Hace calor”, 
de lo contrario muestra “Clima agradable”.
*/

function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Ingresar Temperatura"));
    if (temperatura >= 30 && temperatura <= 50) {
        alert("Hace calor");
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable");
    } else if (temperatura >= -5 && temperatura <= 15) {
        alert("Hace frio");
    } else {
        alert("Ingrese unvalor valido");
    }
}
/*
5.Solicita dos números al usuario.
Compara ambos y muestra cuál 
es mayor o si son iguales
 */

function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar priemr número "));
    let num2 = parseInt(prompt("Ingresar segundo número "));
    if (num1 < num2) {
        alert(" El numero " + num1 + " es menor que " + num2);
    } else if (num1 == num2) {
        alert(" El numero " + num1 + " es igual que " + num2);
    }
    else {
        alert(" El numero " + num1 + " es mayor que " + num2);
    }
}
/*
6.Pide una nota entre 1 y 7.
Si es 4 o más, muestra “Aprobado”, 
si es menor, muestra “Reprobado”.
*/
function note() {
    let ingresa = parseInt(prompt("Ingresa tu nota: "))
    if (ingresa <= 4) {
        alert("Desaprovado");
    } else if (ingresa >= 4 && ingresa <= 7) {
        alert("Aprovado");
    } else {
        alert("por favor, ingresar valor valido");
    }
}
/*
7.Nombre de usuario válido
 Pide un nombre de usuario.
  Si el valor ingresado es "admin"
 , muestra “Bienvenido, administrador”.
  Si no, muestra “Usuario no reconocido”
  .*/

function usuarioAdmin() {
    let usu = prompt("Ingrese usuario")
    if (usu == "admin") {
    } else {
        alert("Usuario no reconocido");
    }
}

/*
8.Verificar si una palabra empieza con "A"
 Pide una palabra al usuario
 . Verifica si empieza con la letra 
 “A” mayúscula y muestra un
  mensaje acorde
  .*/

function palabraMayuscula() {
    let letra = prompt("Ingresar palabra")
    let letraA = "A";
    if (letra[0] == letraA) {
        alert("la palabra comienza con a mayuscula");
    } else {
        alert(" la palabra no comienza con a mayuscula ");
    }
}
/*
9.Precio con descuento
 Solicita el precio de un producto. 
 Si el precio es mayor a 10000, 
 muestra que aplica descuento. 
 Si no, indica precio normal
 .*/


function precioDescuento() {
    //Añadir un porcentaje de descuento e IVA y mostrar.
    let iva = 0.19;
    let descuento = parseFloat(prompt("Ingrese el valor de descuento: ejemplo 20%"));
    descuento *= 100; // operacion para llevar a decimal
    let precio = parsefloat(prompt("Ingresar precio"));
    if (precio > 10000) {
        alert(`El valor ingresado fue: ${precio}\n
            IVa : ${precio * iva}\n 
            precio total: ${precio * 1.19}`);
<<<<<<< HEAD
=======

>>>>>>> e26f6948131a86b8e0115743f6421b766a588bb8
    } else {
        alert("precio normal");
    }
}
/*
10.Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia
 (por ejemplo, respondiendo "sí" o "no"). 
 Si tiene 18 o más y respondió que tiene 
 licencia, muestra “Puede conducir”. 
 Si no, muestra “No puede conducir”
 .*/

<<<<<<< HEAD
function ingresarUsuario() {
=======
function licenciaEdad() {
>>>>>>> e26f6948131a86b8e0115743f6421b766a588bb8
    let = edad = parseInt(prompt("¿Cual estu edad?"));
    if (edad >= 18 && edad < 100)
        let = tienenLicencia = prompt("¿Tienes licencia de conducir?");
    if (tienenLicencia == "si") {
        alert("puede conducir");
    } else if (tienenLicencia == "no") {
        alert("No puede conducir");
    } else {
        alert("Ingrese valores validos");
    }
}

/* RESPUESTAS DE LA SEGUNDA TAREA*/

/*
11.- Comparar la longitud de dos palabras
Solicita dos palabras con prompt().
 Compara cuántas letras tiene cada una
  y muestra cuál es más larga o
   si tienen el mismo largo.
   */

function compararPalabras() {
    let pal1 = prompt("ingrese una palabra:");
    let pal2 = prompt("ingrese otra palabra:");
    if (pal1 == "" && pal2 == "") {
        alert("ingrese un valorpara trabajar... ")
    } else if (pal1.length < pal2.length) {
        alert(`La palabra mas larga es ${pal2} con ${pal2.length} caracteres`)
    } else if (pal1.length == pal2.length) {
        alert(` Las palabras ${pal2} y ${pal1} tiene mismo largo con:\n
            ${pal1.length} caracteres`)
    } else {
        alert(` La palabra mas larga es ${pal1} con ${pal1.length} caracteres`)
    }
}
/*
12.- Validar correo electrónico
Pide al usuario que ingrese un correo.
 Verifica si el texto contiene el 
 símbolo @. Si lo tiene, muestra 
 "Correo válido", si no, "Correo 
 inválido".
 */
function validarCorreo() {
    let validarCorreo = prompt("Ingrese su correo electrónico:");
    if (validarCorreo.includes('@')) {
        alert(`el correo ${validarCorreo} es valido`);
    } else {
        alert(`El correo ${validarCorreo} es invalido`);
    }
}

/*
13.- Verificar si un número 
es positivo o negativo
Solicita un número. 
Muestra si es positivo, 
negativo o cero.
*/
function verificarNumero() {
    let num = parseFloat(prompt("Ingrese un número:"));
    if (num > 0) {
        alert("El número es positivo");
    } else if (num === 0) {
        alert("El número es 0");
    } else {
        alert("El número es negativo");
    }
}

/*14
.- Saludo personalizado según hora
Pide la hora actual (en formato 24 horas).
 Si es antes de las 12,
  muestra "Buenos días", si es entre 12 y 18,
   "Buenas tardes", y si es mayor a 18, 
   "Buenas noches"
   .*/
function saludar() {
    let saludar = parseInt(prompt("Ingrese la hora actual (formato 24h):"));

    if (saludar >= 0 && saludar < 12) {
        alert("Buenos días");
    } else if (saludar >= 12 && saludar < 18) {
        alert("Buenas tardes");
    } else if (saludar >= 18 && saludar <= 24) {
        alert("Buenas noches");
    } else {
        alert("Hora no válida");
    }
}
/*
15.- Verificar si una palabra contiene la letra "e"
Solicita una palabra. Verifica si contiene la letra
 "e" (minúscula). Si la tiene, muestra "Contiene
  la letra 'e'", si no, muestra "No contiene la
   letra 'e'"
   .*/
function buscarLetraE() {
    let buscarLetraE = prompt("Ingrese una palabra:");

    if (buscarLetraE.includes('e')) {
        alert("Contiene la letra 'e'");
    } else {
        alert("No contiene la letra 'e'");
    }
}

/*
/*triple igualdad (===) es estricta igualdad*/
/*doblo igualdad (==) es para comparar dos valores y determinar si son iguales*/
/* el parseInt es lo que combierte una cadena de texto en una cadena de numero entero*/
/* el string es una cadena de texto*/
/* por que el prompt es un string = es para capturar la entrada de usuario como texto*/
/* el prompt es una funcion */
/* que es una function: es una bloque de instrucciones reutilizable, osea ocuparlo cuando sea necesario*/
/* && es una compuerta logica, utilizado para condiciones*/
/*else if es una estructura de control para condiciones multiples de forma secuencial.*/