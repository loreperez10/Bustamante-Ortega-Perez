//variables

const botonSeguir = document.getElementById("seguir-dejardeseguir");

const botonMegusta = document.getElementById("boton-megusta")



//crear una variable para mantener el estado actual del elemento
let estadoActual = 0;
let liked = false;
//evento


botonSeguir.addEventListener("click", cambiarTextoSeguir)

botonMegusta.addEventListener("click", cambiarTextoMegusta)

//funcion cambiar texto 
function ingresar(){
    let usuario = document.getElementById("usuario").value;

    if (usuario === ""){
        alert("no ha ingresado un nombre")
        return;
    }
}

document.getElementById("boton-ingresar").addEventListener("click",ingresar)
function cambiarTextoSeguir() {
    if (estadoActual === 0) {
        botonSeguir.textContent = "Dejar de seguir";
        estadoActual = 1;
    } else {
        botonSeguir.textContent = "Seguir";
        estadoActual = 0;
    }
 }
 
function sumarLikes() {
    // Obtener el elemento que muestra la cantidad de likes
    const likesCount = document.getElementById("numMegusta");
  
    // Obtener el botón "Me gusta"
    const botonMegusta = document.getElementById("boton-megusta");
  
    // Obtener la cantidad actual de likes
    let likes = parseInt(likesCount.innerText);
  
    // Incrementar la cantidad de likes en 1
    likes++;
  
    // Actualizar el contenido del elemento con la nueva cantidad de likes
    likesCount.innerText = likes + " ";
  
    // Deshabilitar el botón "Me gusta"
    botonMegusta.disabled = true;

    botonMegusta.innerText = "¡Gracias por tu like!";
  }

  const inputUsuario = document.getElementById("usuario");
  const botonIngresar = document.getElementById("boton-ingresar");
  const inputComentario = document.getElementById("comentario");
  const botonComentar = document.getElementById("boton-comentar");
  const comentariosContainer = document.querySelector(".comentarios");
  
  botonIngresar.addEventListener("click", function(event) {
    event.preventDefault();
    
    const nombreUsuario = inputUsuario.value;
    localStorage.setItem("nombreUsuario", nombreUsuario);
  });
  
  botonComentar.addEventListener("click", function() {
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const comentario = inputComentario.value;
  
    if (!nombreUsuario || !comentario) {
      // manejar el error si el usuario o comentario están vacíos
      return;
    }
  
    const nuevoComentario = document.createElement("div");
    nuevoComentario.innerHTML = `
      <p><b>${nombreUsuario}</b> ${comentario}</p>
    `;
  
    comentariosContainer.appendChild(nuevoComentario);
  
    // opcional: reiniciar el valor del input de comentario
    inputComentario.value = "";
  });


