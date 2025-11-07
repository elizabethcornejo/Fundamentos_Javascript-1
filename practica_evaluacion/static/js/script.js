console.log("conexion exitosa...")


function pedirDato() {
    let nombre = prompt("Ingresa nombre: ")
    let apellido = prompt("Ingresa apellido: ")
    let edad = parseInt(prompt("Ingresa edad: "))
    alert(`Tu nombre es ${nombre} ${apellido} y tu edad es: ${edad}  `)
}

function pedirNumero() {
    let num = parseFloat(prompt("Ingrese un número:"));
    let resultado = ((num / 3) + 10) * 2;
    alert(`El resultado es: ${resultado}`);

}

function crecienteDecreciente() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    if (a < b) {
        alert("Estado creciente");
    } else if (a > b) {
        alert("Estado decreciente");
    } else {
        alert("Son iguales");
    }
}

function promedio() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i}:`));
        suma += num;
    }
    let promedio = suma / 5;
    alert(`El promedio es: ${promedio}`);
}

function sumaNaturales() {
    let N = parseInt(prompt("Ingrese N:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    alert(`La suma de los ${N} primeros números naturales es: ${suma}`);
}

function pares() {
    let pares = "";
    for (let i = 2; i <= 200; i += 2) {
        pares += i + " ";
    }
    alert(pares);
}

function primerosImpares() {
    let impares = "";
    for (let i = 1; i <= 199; i += 2) {
        impares += i + " ";
    }
    alert(impares);
}

function sumaNumeros() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        suma += parseFloat(prompt(`Ingrese número ${i}:`));
    }
    alert(`La suma es: ${suma}`);
}

function numerosSuma() {
    let N = parseInt(prompt("¿Cuántos números desea sumar?"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += parseFloat(prompt(`Ingrese número ${i}:`));
    }
    alert(`La suma es: ${suma}`);
}

function calculadora() {
    let num1 = parseFloat(prompt("Ingrese primer número:"));
    let num2 = parseFloat(prompt("Ingrese segundo número:"));
    let opcion = prompt("Elija operación: +, -, *, /");

    switch (opcion) {
        case "+": alert(num1 + num2); break;
        case "-": alert(num1 - num2); break;
        case "*": alert(num1 * num2); break;
        case "/": alert(num1 / num2); break;
        default: alert("Opción inválida");
    }
}
