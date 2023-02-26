let ocultarPerfil = document.getElementById("ocultarPerfil")
let verPerfil = document.getElementById("verPerfil")
verPerfil.addEventListener("click", mostrarPerfil)

let ocultarUbicacion = document.getElementById("ocultarUbicacion")
let verUbicacion = document.getElementById("verUbicacion")
verUbicacion.addEventListener("click", mostrarUbicacion)

let ocultarObjetivos = document.getElementById("ocultarObjetivos")
let verObjetivos = document.getElementById("verObjetivos")
verObjetivos.addEventListener("click", mostrarObjetivos)

function mostrarPerfil() {
    ocultarPerfil.classList.toggle("ocultar")
}
function mostrarUbicacion() {
    ocultarUbicacion.classList.toggle("ocultar")
}
function mostrarObjetivos() {
    ocultarObjetivos.classList.toggle("ocultar")
}