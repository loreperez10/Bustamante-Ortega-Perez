//variables

const botonSeguir = document.getElementById("seguir-dejardeseguir");

const botonMegusta = document.getElementById("boton-megusta")



//crear una variable para mantener el estado actual del elemento
let estadoActual = 0;
let liked = false;
//evento


botonSeguir.addEventListener("click", cambiarTextoSeguir)





document.getElementById("boton-ingresar").addEventListener("click",ingresar)
function ingresar(){
    let usuario = document.getElementById("usuario").value;

    if (usuario === ""){
        alert("No ha ingresado un nombre")
        return;
    }else
    {
        localStorage.getItem(usuario)
    }
}


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


  function ingresar() {
    let usuario = document.getElementById("usuario").value;
  
    if (usuario === "") {
      alert("No ha ingresado un nombre")
      return;
    } else {
      localStorage.setItem("usuario", usuario);
      
    }
  }
  function comentar() {
    let comentario = document.getElementById("comentario-texto").value;
  
    if (comentario === "") {
      alert("No ha ingresado un comentario")
      return;
    } else {
      let usuario = localStorage.getItem("usuario");
      let seccionComentarios = document.getElementById("seccion-comentarios");
      let nuevoComentario = document.createElement("div");
      nuevoComentario.classList.add("comentario");
      nuevoComentario.innerHTML = "<span class='nombre-usuario' id='nuevo-usuario'>" + usuario + "</span>" + " " + "<span class='texto-comentario'>" + comentario + "</span>";
      seccionComentarios.appendChild(nuevoComentario);
      document.getElementById("comentario-texto").value = "";
    }
  }


