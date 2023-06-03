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
    const likesCount = document.getElementById("numMegusta");
    const botonMegusta = document.getElementById("boton-megusta");
    let likes = parseInt(likesCount.innerText);
    likes++;
    likesCount.innerText = likes + " ";
    botonMegusta.disabled = true;
    botonMegusta.innerText = "¡Gracias por tu like!";
  }

  function ingresar() {
    let usuario = document.getElementById("usuario").value;
    let mensajeUsuario = document.getElementById("mensaje-usuario");

   
    if (usuario === ""  && usuario === null) {
      mensajeUsuario.innerHTML = "No ha ingresado un usuario";
      mensajeUsuario.style.display = "block";
      return;
  } else {
      localStorage.setItem("usuario", usuario);
      mensajeUsuario.style.display = "none";  
  }
  }


  function comentar() {
    let usuario = localStorage.getItem("usuario");
    let mensajeUsuario = document.getElementById("mensaje-comentario");
  
    if (!usuario) {
      mensajeUsuario.innerHTML = "No ha ingresado un usuario";
      return;
    }
  
    let comentario = document.getElementById("comentario-texto").value;
  
    if (comentario === "") {
      let mensajeComentario = document.getElementById("mensaje-comentario");
      mensajeComentario.innerHTML = "No ha ingresado un comentario";
      mensajeComentario.style.display = "block";
      return;
    } else {
      let usuario = localStorage.getItem("usuario");
      let seccionComentarios = document.getElementById("seccion-comentarios");
      let nuevoComentario = document.createElement("nuevocomentario");
  
      nuevoComentario.classList.add("comentario");
      nuevoComentario.innerHTML = "<span class='nombre-usuario' id='nuevo-usuario'>" + usuario + "</span>" + " " + "<span class='texto-comentario'>" + comentario + "</span>";
      const botonBorrar = document.createElement('button');
      botonBorrar.classList.add('botonBorrar');
      botonBorrar.innerText = "Eliminar";
  
      nuevoComentario.appendChild(botonBorrar);
      seccionComentarios.appendChild(nuevoComentario);
      document.getElementById("comentario-texto").value = "";
      let mensajeComentario = document.getElementById("mensaje-comentario");
      mensajeComentario.style.display = "none";
  
      botonBorrar.addEventListener('click', () => {
        seccionComentarios.removeChild(nuevoComentario);
      });
    }
  }
  

