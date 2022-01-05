import { data } from "../data/data.js";

let contenedorCard = document.querySelector(".contenedor-card");
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
// const boton = document.getElementById('boton');
let contenedor = document.getElementById('pruebaDelModal');

data.forEach((produc) => {
    const { nombre, image, id } = produc;
    templateCard.querySelector('h5').textContent = nombre
    templateCard.querySelector('img').setAttribute('src', image);
    templateCard.querySelector('button').setAttribute('id', id)
    const otraTarjeta = templateCard.cloneNode(true)
    fragment.appendChild(otraTarjeta);

});
items.appendChild(fragment)

//modal

items.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.classList.contains('btn')) {

        let peliculas = e.srcElement.id;

        data.forEach(item => {
            const { id, nombre, image, descripcion } = item;

            if (peliculas == id) {
                contenedor.innerHTML = `
                   <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">${nombre}</h5>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                   <center>
                       <img class="img3" src="${image}" alt="">
                   </center>
                   <p>${descripcion}</p>
               </div>
                   `
            }
        })

    }
})
