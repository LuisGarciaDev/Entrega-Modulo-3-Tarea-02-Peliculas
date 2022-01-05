const formulario = document.getElementById("formulario")

const listar = document.getElementById("listar")

let datos = [];

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let nombre = document.getElementById("nameuser").value

    let correo = document.getElementById("emailuser").value

    let telefono = document.getElementById("phonenumber").value

    let direccion = document.getElementById("direccion").value

    console.log(nombre, correo, telefono, direccion)

    agregarUsuario(nombre, correo, telefono, direccion)

    guardarDatos();
})

const agregarUsuario = (nombre, correo, telefono, direccion) => {
    let registro = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        direccion: direccion
    }
    datos.push(registro)
    console.log(datos)
}
//almacenamos y enviamos los datos al localstorage (set)
const guardarDatos = () => {
    localStorage.setItem('usuario', JSON.stringify(datos))
    listarDatos();
}
// //convertimos de nuevo los datos para nosotros usarlos (get)
const listarDatos = () => {
    listar.innerHTML = " ";
    datos = JSON.parse(localStorage.getItem("usuario"))
    datos.forEach(element => {
        const { nombre, correo, telefono, direccion } = element
        listar.innerHTML += ` <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${correo}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${telefono}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${direccion}</h6>
        </div>
      </div>
         `
    })
}