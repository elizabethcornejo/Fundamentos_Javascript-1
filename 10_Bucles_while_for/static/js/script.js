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
        contador ++;
    } 
    alert(resultado)  
}

/*2️⃣ Bucle while: Cuenta regresiva del n al 1 (n es ingresado por teclado)
Crea un programa que muestre una cuenta regresiva desde n hasta 1 utilizando un bucle while.*/ 