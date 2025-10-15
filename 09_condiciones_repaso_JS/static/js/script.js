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

function verificarLetra(){
    let palabra = prompt("Ingrese una palabra");
    if (palabra.toLowerCase().includes('e')){
        alert("La palabra contiene la letra e");
    } else{
        alert("No contiene la letra e");
    }
}

//cuarto ejercicio
//Pide dos números con prompt().
//Si el primero es mayor → “El primer número es mayor”.
//Si el segundo es mayor → “El segundo número es mayor”.
//Si son iguales → “Son iguales”.
//📘 Práctica: comparaciones dobles.}

function compararNumero(){
    let numero1 = parseInt(prompt("Ingrese el primer numero"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero"));
    if (numero1 > numero2){
        alert("El primer numero es mayor");
    }else if(numero1 < numero2){
        alert("El segundo numero es mayor");
    }else{
        alert("Son iguales");
    }
}

//quinto ejercicio
//5️⃣ Determinar si el número es par o impar
//Pide un número.
//Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
//Si no → “Número impar”.
//📘 Práctica: uso del operador módulo %.


function numeroPar(){
    
}
