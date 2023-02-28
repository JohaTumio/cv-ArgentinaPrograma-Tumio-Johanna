//ocultar menu perfil, ubicacion, objetivos
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

//Función jQuery para cerrar el navbar automáticamente
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

let habilidades = [
    {id: 1, titulo: "HTML", porcentaje: 80}, 
    {id: 2 , titulo: "CSS", porcentaje: 85},
    {id: 3, titulo: "JAVASCRIPT", porcentaje: 65},
    {id: 4, titulo: "COMPAÑERISMO", porcentaje: 90},
    {id: 5, titulo: "RESOLUCION DE PROBLEMAS", porcentaje: 80},
    {id: 6, titulo: "TRABAJO EN EQUIPO", porcentaje: 95}
]

let contenedorHabilidades = document.getElementById ("contenedorHabilidades")

function crearHabilidades() {
    habilidades.forEach(({titulo, porcentaje, id}) => {
    let tarjetaHabilidades = document.createElement("div")
    tarjetaHabilidades.innerHTML = `
    <div class="row">
        <div class="col-12 text-center">
            <button onclick="animar(${id})" class="btn fw-bold fs-3 btn_habilidades">${titulo}</button>
        </div>
        <div class="col-12 d-flex justify-content-center mb-4">
            <div class="progress w-50 h-auto border border-primary" role="progressbar" aria-valuenow="80"
                aria-valuemin="0" aria-valuemax="100">
                <div id="barra${id}"
                    class="progress-bar progress-bar-striped fs-4 progress-bar-animated inicio_barra animacion">${porcentaje}%
                </div>
            </div>
        </div>
    </div>
    `
    contenedorHabilidades.append(tarjetaHabilidades)
    })
}
crearHabilidades()

function animar(id) {
    let item = id
    if (item == 1) {
        document.getElementById("barra" + id).classList.toggle("final_barra_html")
    }else if (item == 2) {
        document.getElementById("barra" + id).classList.toggle("final_barra_css") 
    }else if (item == 3){
        document.getElementById("barra" + id).classList.toggle("final_barra_js") 
    }else if (item == 4){
        document.getElementById("barra" + id).classList.toggle("final_barra_compañerismo") 
    }else if (item == 5){
        document.getElementById("barra" + id).classList.toggle("final_barra_res_problemas") 
    }else if(item == 6){
        document.getElementById("barra" + id).classList.toggle("final_barra_trabajo_equipo") 
    }
}