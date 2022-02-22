class Auto {
    constructor({marca, modelo, imgURL, precio}){
        this.marca = marca;
        this.modelo = modelo;
        this.imgURL = imgURL;
        this.precio = precio;
    }
}


// Instancias de autos
const chevroletCruze = new Auto({
    marca: "Chevrolet",
    modelo: "Cruze",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_7e260c425a1b4ceb9c0821f847075a3d.jpg",
    precio: 3300000,
});

const chevroletCruze5 = new Auto({
    marca: "Chevrolet",
    modelo: "Cruze 5",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_65e56ea3961347348a4fe469e9471793.jpg",
    precio: 3300000,
});

const chevroletEquinox = new Auto({
    marca: "Chevrolet",
    modelo: "Equinox",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_c10f0bc2da6c4a1ea8196486974567d3.jpg",
    precio: 3500000,
});

const chevroletOnix = new Auto({
    marca: "Chevrolet",
    modelo: "Onix",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_0d008ceaa2eb419883ad5c2f1eea7838.jpg",
    precio: 2600000,
});

const chevroletOnixJoy = new Auto({
    marca: "Chevrolet",
    modelo: "Trailblazer",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_1e3679ee3771407880d1072f8d162fd7.jpg",
    precio: 7400000,
});



// Array con todos los autos
const autos = [chevroletCruze, chevroletCruze5, chevroletEquinox, chevroletOnix, chevroletOnixJoy];

// Sección donde imprimimos los autos
const main = document.getElementById('main');

// Transformación del array de autos a un pedazo de HTML
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

// Imprimir las transformaciones de los autos en main
main.innerHTML = carsMapped.join('');


// Buscador
const buscador = document.getElementById('buscador__input');


const buscarAuto = busqueda => {
    const valorBusqueda = busqueda.srcElement.value;
    const valorBusquedaEnMinuscula = valorBusqueda.toLowerCase();

    const filtroDeAutos = autos.filter(auto => {
        const modeloEnMinusculas = auto.modelo.toLowerCase();
        return modeloEnMinusculas.includes(valorBusquedaEnMinuscula);
    });

    const carsMapped = filtroDeAutos.map(auto => (
        `
        <div class="cardCar" id="cardCar">
            <img src="${auto.imgURL}" alt="">
            <div class="card__text" id="card__text">
                <p>${auto.modelo}</p>
                <p class="precio">$${auto.precio.toLocaleString('es-AR')}</p>
            </div>
        </div>
        `
    ));

    main.innerHTML = carsMapped.join('');
}

buscador.addEventListener('input', buscarAuto);


