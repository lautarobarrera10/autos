import { autos } from './modules/cars.js';

// Función para mappear los autos
const carsMapped = autos => {
    const carsMapped = autos.map(auto => (
        `
        <div class="cardCar" id="cardCar">
            <img src="${auto.imgURL}" alt="">
            <div class="card__text" id="card__text">
                <p>${auto.modelo}</p>
                <p class="precio">$${auto.precio.toLocaleString('es-AR')}</p>
            </div>
        </div>
        `
    ))
    return carsMapped;
}

// Sección main
const main = document.getElementById('main');

// Mappeo de todos los autos
const allCarsMapped = carsMapped(autos);

// Función para imprimir en la sección main
const imprimirAutos = autos => main.innerHTML = autos.join('');

// Imprimimos todos los autos mappeados en el main
imprimirAutos(allCarsMapped);



// Buscador
const buscador = document.getElementById('buscador__input');

const buscarAuto = busqueda => {
    const valorBusqueda = busqueda.srcElement.value;
    const valorBusquedaEnMinuscula = valorBusqueda.toLowerCase();

    const filtroDeAutos = autos.filter(auto => {
        const modeloEnMinusculas = auto.modelo.toLowerCase();
        return modeloEnMinusculas.includes(valorBusquedaEnMinuscula);
    });

    const resultado = carsMapped(filtroDeAutos);
    imprimirAutos(resultado);
}

buscador.addEventListener('input', buscarAuto);

// Filtros

// Filtrar por marcas

// Arrays de autos filtrados por marcas
const autosChevrolet = autos.filter(auto => auto.marca == "Chevrolet");
const autosFiat = autos.filter(auto => auto.marca == "Fiat");

// Botones en el DOM para filtrar por marcas
const filtrarTodosButton = document.querySelector('.filtrarTodos')
const filtrarFiatButton = document.querySelector('.filtrarFiat');
const filtrarChevroletButton = document.querySelector('.filtrarChevrolet');

// Función para mappear e imprimir los autos filtrados
const filtrarPorMarca = marca => {
    const autosMappeados = carsMapped(marca);
    imprimirAutos(autosMappeados);
}

// Add Event Listeners para cada botón del DOM
filtrarTodosButton.addEventListener('click', () => imprimirAutos(allCarsMapped))
filtrarFiatButton.addEventListener('click', () => filtrarPorMarca(autosFiat));
filtrarChevroletButton.addEventListener('click', () => filtrarPorMarca(autosChevrolet));



// Filtrar por precios

// Arrays de autos filtrados por precios
const autosBaratos = autos.filter(auto => auto.precio <= 3000000);
const autosMedios = autos.filter(auto => auto.precio >= 3000000 && auto.precio <= 5000000);
const autosCaros = autos.filter(auto => auto.precio >= 5000000);

// Botones en el DOM para filtrar por precios
const filtrarPreciosTodosButton = document.querySelector('.filtrarPreciosTodos');
const filtrarBaratosButton = document.querySelector('.filtrarBaratos');
const filtrarMediosButton = document.querySelector('.filtrarMedios');
const filtrarCarosButton = document.querySelector('.filtrarCaros');

// Función para mappear e imprimir los autos filtrados
const filtrarPorPrecio = rango => {
    let autosFiltrados;
    if (rango == "baratos") {
        autosFiltrados = autosBaratos;
    } else if (rango == "medios") {
        autosFiltrados = autosMedios;
    } else if (rango == "caros" ) {
        autosFiltrados = autosCaros;
    } else {
        autosFiltrados = autos;
    }

    const autosFiltradosMapped = carsMapped(autosFiltrados);
    imprimirAutos(autosFiltradosMapped);
}

// Add Event Listeners para cada botón del DOM
filtrarPreciosTodosButton.addEventListener('click', () => imprimirAutos(allCarsMapped))
filtrarBaratosButton.addEventListener('click', () => filtrarPorPrecio('baratos'));
filtrarMediosButton.addEventListener('click', () => filtrarPorPrecio('medios'));
filtrarCarosButton.addEventListener('click', () => filtrarPorPrecio('caros'));