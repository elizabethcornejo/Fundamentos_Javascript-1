function cambiarTexto() {
  const boton = document.getElementById("cambiar");
  if (boton.textContent === "Mostrar detalles") {
    boton.textContent = "Inscribirse";
  } else {
    boton.textContent = "Bienvenido";
  }
}

function contador(){
  const contador = document.querySelector("#contador");
  let cantidad = parseInt(contador.innerText);
  contador.innerText = cantidad + 1;
}