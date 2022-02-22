class Auto {
    constructor({marca, modelo, imgURL, precio}){
        this.marca = marca;
        this.modelo = modelo;
        this.imgURL = imgURL;
        this.precio = precio;
    }
}

// Instancias de autos

// Chevrolet
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


// Fiat
const fiat500Abarth = new Auto({
    marca: "Fiat",
    modelo: "500 Abart",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_e413b675c64c4bf5a3df4151c572ed83.jpg",
    precio: 4500000,
});

const fiatArgo = new Auto({
    marca: "Fiat",
    modelo: "Argo",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_2ae2526b53ab4a3fab253234e754fc07.jpg",
    precio: 2600000,
});

const fiatCronos = new Auto({
    marca: "Fiat",
    modelo: "Cronos",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_f0841ec842724c9e9511da5b7e4c4f6f.jpg",
    precio: 2300000,
});

const fiatMobi = new Auto({
    marca: "Fiat",
    modelo: "Mobi",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_0bac713eaa90438fa013179d5e1fff7a.jpg",
    precio: 2100000,
});

const fiatFiorino = new Auto({
    marca: "Fiat",
    modelo: "Fiorino",
    imgURL: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_7fce670fc75e4a16824a0222af7dce36.jpg",
    precio: 2600000,
});

// Array con todos los autos
const autos = [
    chevroletCruze,
    chevroletCruze5, 
    chevroletEquinox, 
    chevroletOnix, 
    chevroletOnixJoy,
    fiat500Abarth,
    fiatArgo,
    fiatCronos,
    fiatMobi,
    fiatFiorino,
];

export { autos };