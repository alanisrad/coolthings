const contenedor = document.querySelector('.contenedor');

function renderizarItems() {
    for (let i = 0; i < listadoSeries.length; i++) {
        contenedor.innerHTML += `<div class="item">
      <a href=${listadoSeries[i].link} target='_blank'><img src=${listadoSeries[i].imgUrl}></a>
      <h2>${listadoSeries[i].title}</h2>
      <p>${listadoSeries[i].streaming}</p>
      </div>`
    }
}

renderizarItems()