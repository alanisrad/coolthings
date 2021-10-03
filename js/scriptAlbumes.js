const contenedor = document.querySelector('.contenedor');

function renderizarItems() {
    for (let i = 0; i < listadoAlbumes.length; i++) {
        contenedor.innerHTML += `<div class="item">
      <a href=${listadoAlbumes[i].link} target='_blank'><img src=${listadoAlbumes[i].imgUrl}></a>
      <h2>${listadoAlbumes[i].title}</h2>
      <p>${listadoAlbumes[i].artist}</p>
      </div>`
    }
}

renderizarItems()