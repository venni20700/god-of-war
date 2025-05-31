// PRODUCTOS
const productos=[
    //
    {
        id:"libros-01",
        titulo:"GOD OF WAR LEGENDS",
        imagen:"https://m.media-amazon.com/images/I/51w-lPiGniL.jpg",
        categoria:{
            nombre:"Saga nordica",
            id:"Libros" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"libros-02",
        titulo:"GOD OF WAR",
        imagen:"https://preview.redd.it/gk61liing7e61.jpg?width=640&crop=smart&auto=webp&s=db953f68bd5ca6eae7c09df53b23793d0f7ea75e",
        categoria:{
            nombre:"Saga Griega",
            id:"Libros" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"GOD OF WAR FRAGUAS",
        titulo:"libros 03",
        imagen:"https://www.atomcomics.pl/environment/cache/images/0_0_productGfx_172249/b83f2eca7cc12c7cbb87615ea0144357.jpg",
        categoria:{
            nombre:"Saga Griega",
            id:"Libros" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"GOD OF WAR IMAGENES",
        titulo:"GOD OF WAR IMAGENES",
        imagen:"https://m.media-amazon.com/images/I/71YgI3VpEdL._AC_UF1000,1000_QL80_.jpg",
        categoria:{
            nombre:"Libros",
            id:"Libros" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR",
        imagen:"https://hablandodecomics.wordpress.com/wp-content/uploads/2011/08/god-of-war-comic-portada.jpg",
        categoria:{
            nombre:"Saga Griega",
            id:"Saga griega" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR 2",
        imagen:"https://uvejuegos.com/img/caratulas/20438/gow2_ps2_01g.jpg",
        categoria:{
            nombre:"Saga Griega",
            id:"Saga griega" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR 3",
        imagen:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/08/caratula-god-war-iii.jpg?tf=1200x",
        categoria:{
            nombre:"Saga Griega",
            id:"Saga griega" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR",
        imagen:"https://pictures.abebooks.com/isbn/9781789090147-es.jpg",
        categoria:{
            nombre:"Saga Griega",
            id:"Saga Nordica" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"juego 5",
        imagen:"https://hips.hearstapps.com/hmg-prod/images/gof-of-war-ragnarok-portada-1631262719.jpg?crop=0.75xw:1xh;center,top&resize=1200:*",
        categoria:{
            nombre:"GOD OF WAR RAGNAROK",
            id:"Saga Nordica" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR VALHALLA",
        imagen:"https://phantom-marca.unidadeditorial.es/3986d35ad309935ae1f940d57768b2a5/resize/828/f/jpg/assets/multimedia/imagenes/2023/12/08/17020159946284.jpg",
        categoria:{
            nombre:"Saga Nordica",
            id:"Saga Nordica" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR GHOST OF SPARTA",
        imagen:"https://m.media-amazon.com/images/I/61pyWp-4NqL.jpg",
        categoria:{
            nombre:"Saga Griega",
            id:"Precuelas" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR CHAINS OLIMPUS",
        imagen:"https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/b5d5784c-6547-4bf1-8376-f736f0e40846/923668217/god-of-war-chains-of-olympus-god-of-war-chains-of-olympus-android.jpg",
        categoria:{
            nombre:"Saga Griega",
            id:"Precuelas" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR ASCENCCION",
        imagen:"https://assetsio.gnwcdn.com/136552725712.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
        categoria:{
            nombre:"Saga Griega",
            id:"Precuelas" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
    {
        id:"Primera trilogia",
        titulo:"GOD OF WAR BETRAYAL",
        imagen:"https://cdn2.steamgriddb.com/thumb/0c9d9a705f28d7b25d5442990a7277e0.jpg",
        categoria:{
            nombre:"Saga Griega",
            id:"Precuelas" // campo nclave para enlazar con index.html
        },
        precio:"250000"
    },
];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
