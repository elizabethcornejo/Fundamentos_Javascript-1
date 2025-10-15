console.log("conexion correcta!")

//primer ejercicio
//1️⃣ Edad y etapa de vida Pide la edad de una persona.Si es menor a 13 → 
// “Eres un niño”.Si tiene entre 13 y 17 → 
// “Eres adolescente”.Si tiene 18 o más → 
// “Eres adulto”.📘 Práctica: uso de rangos 
// con if, else if, else.

function verificarEtapaVida() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad < 13) {
        alert("Eres un niño!")
    } else if (edad >= 13 && edad < 18) {
        alert("Eres adolecente")
    } else {
        alert("Eres un adulto")
    }
}

//segundo problema
//2️⃣ Validar contraseña exacta
//Pide una contraseña.
//Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
//Si no, muestra “Acceso denegado”.
//📘 Práctica: comparación exacta (===).

function pideContraseña() {
    let contraseña = parseInt(prompt("Ingrese una contraseña"));
    if (contraseña == "12345") {
        alert("Acseso consedido")
    } else {
        alert("Acceso denegado")
    }
}

//tercer ejercicio
//3️⃣ Verificar letra en palabra
//Pide una palabra.
//Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
//Si no → “No contiene la letra E”.
//💡 Usa:
//if (palabra.toLowerCase().includes('e')) { ... }

function verificarLetra() {
    let palabra = prompt("Ingrese una palabra");
    if (palabra.toLowerCase().includes('e')) {
        alert("La palabra contiene la letra e");
    } else {
        alert("No contiene la letra e");
    }
}

//cuarto ejercicio
//Pide dos números con prompt().
//Si el primero es mayor → “El primer número es mayor”.
//Si el segundo es mayor → “El segundo número es mayor”.
//Si son iguales → “Son iguales”.
//📘 Práctica: comparaciones dobles.

function compararNumero() {
    let numero1 = parseInt(prompt("Ingrese el primer numero"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero"));
    if (numero1 > numero2) {
        alert("El primer numero es mayor");
    } else if (numero1 < numero2) {
        alert("El segundo numero es mayor");
    } else {
        alert("Son iguales");
    }
}

//quinto ejercicio
//5️⃣ Determinar si el número es par o impar
//Pide un número.
//Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
//Si no → “Número impar”.
//📘 Práctica: uso del operador módulo %.


function numeroPar() {
    let par = parseInt(prompt("Ingrese un número:  "));
    if (par % 2 == 0) {
        alert("Es par")
    } else {
        alert("Es impar")
    }
}


//6️⃣ Revisar palabra inicial
//Pide una palabra.
//Si empieza con la letra “A” o “a” → “Empieza con A”.
//Si no → “No empieza con A”.
//💡 Puedes usar:
//if (palabra[0].toLowerCase() === 'a') { ... }

function palabraInicial() {
    let palabra = prompt("Ingresa una palabra: ");
    if (palabra[0].toLowerCase() === 'a') {
        alert("Su palabra comienza con la letra A ")
    } else {
        alert("No empieza con la letra A")
    }
}


/*7️⃣ Temperatura ambiente
Pide una temperatura.
Si es menor a 10 → “Hace frío”.
Si es entre 10 y 25 → “Clima templado”.
Si es mayor o igual a 26 → “Hace calor”.
📘 Práctica: comparaciones encadenadas.*/

function temperatura() {
    let temperatura = parseInt(prompt("Ingrese la temperatura: "))

    if (temperatura < 10) {
        alert("Hace frio")
    } else if (temperatura >= 10 && temperatura <= 25) {
        alert("Clima templado")
    } else if (temperatura >= 26) {
        alert("Hace calor")
    }
}


/*8️⃣ Nombre reconocido
Pide un nombre.
Si el nombre es “Dany” → “Hola, profesor 👋”.
Si el nombre es “Ely” → “Hola, mamá 🌷”.
En cualquier otro caso → “Hola, visitante”.
📘 Práctica: varias condiciones exclusivas.*/


function pedirNombre() {
    let nombre = prompt("Ingresar nombre: ");
    nombre = nombre.toUpperCase();
    if (nombre === "Dany") {
        alert("Hola, profesor")
    } else if (nombre === "Ely") {
        alert("Hola mama")
    } else {
        alert("Hola, visitante")
    }
}



/*9️⃣ Nota de evaluación
Pide una nota entre 1 y 7.
Si es 4 o más → “Aprobado”.
Si es menor que 4 → “Reprobado”.
Si está fuera del rango 1–7 → “Nota inválida”.
📘 Práctica: validaciones con límites.*/
function notaEvaluacion() {
    let nota = parseFloat(prompt("Ingresa una nota: "))
    if (nota <= 3.9 && nota >= 1.0) {
        alert("Aprobado")
    } else if (nota >= 4.0 && nota <= 7.0) {
        alert("Reprobado")
    } else {
        alert("Nota invalida")
    }
}

/*🔟 Verificar si contiene una palabra clave
Pide una frase.
Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.
Si no → “No contiene la palabra clave”.
💡 Usa:
if (frase.toLowerCase().includes('jesús')) { ... }*/


function palabraClave() {
    let clave = prompt("Ingresar clave: ")
    if (clave.toLowerCase().includes('jesus')) {
        alert("Tu frase tiene la palabra clave")
    } else {
        alert("No contiene la palabra clave")
    }
}
