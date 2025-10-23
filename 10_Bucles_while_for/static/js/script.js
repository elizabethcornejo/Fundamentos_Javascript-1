console.log("Conexion Exitosa...")


// ejemplo While
// Creación función bucle while
// contar números del 10 al 1 - ejemplo
function ejecutarWhile() {
    let resultado = "El resultado es: "
    let count = 10;
    while (count > 0) {
        resultado += ` ${count}`
        count--
    }
    alert(resultado);
}

// ejemplo for
// Creación función bucle for
// contar números del 10 al 1 - ejemplo
function ejecutarFor() {
    let resultado = "El resultado es: "
    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`;
    }
    alert(resultado)
}


/*1️⃣ Bucle while: Imprimir del 1 a n (n es ingresado por teclado).
Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.*/
function contadorN() {
    let resultado = "Contamos: "
    let n = parseInt(prompt("Ingresar tu número: "));
    let contador = 1;
    while (contador <= n) {
        resultado += ` ${contador}`
        console.log(contador)//imprime valores individuales
        contador++;
    }
    alert(resultado)
}

/*2️⃣ Bucle while: Cuenta regresiva del n al 1 (n es ingresado por teclado)
Crea un programa que muestre una cuenta regresiva desde n hasta 1 utilizando un bucle while.*/


function cuentaRegresiva() {
    let n = parseInt(prompt("Ingresar número: "))
    let resultado = "Conteo";
    while (contador > 0) {
        resultado += ` ${contador}`;
        contador--;
    }
    alert(resultado)
}



/*3️⃣ Bucle while: Sumar los n primeros números
Usando un bucle for, calcula la suma de los números n primeros números  muestra el resultado en la consola. */

function sumarNumeros() {
    let suma = 0;
    let numero = parseInt(prompt("Ingrese un número: "));
    let contador = 1;
    let resultado = "suma: 0";
    while (contador <= numero) {
        suma = + contador;
        resultado += ` ${contador}`;
        contador++
    }
    alert(`${resultado} = ${suma}`)
}


/* 
4️⃣ Bucle while: Imprimir múltiplos de 2 del 1 al n (n es el límite de números a encontrar)
Escribe un programa que use un bucle for para imprimir los múltiplos de 2 que hay entre 1 y 10 (inclusive).
*/

function imprimirMultiplos() {
    let numero = parseInt(prompt("Ingresar número: "));
    let count = 1;
    let result = "El resultado es: "
    while (count <= numero) {
        count++
        if (count % 2 == 0) {
            result += ` ${count}`

        }
    }
    alert(` ${result}`)
}