$("body").prepend('<p class="animacion" style="display: none" >No dudes en comunicarte!</p>');
$("body").prepend('<p class="animacion2" style="display: none" >Redes al final de la pagina ♥</p>');

$(".animacion").css({
    "font-family": "Roboto Mono, monospace",
    "color": "white"
})





/*class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let listaProductos;

if (localStorage.getItem("lista") == null) {
    listaProductos = [];
} else {
    listaProductos = JSON.parse(localStorage.getItem("lista"));
}

const crearProducto = (nombre, categoria, precio) => {
    const producto = new Producto(nombre, categoria, precio);
    return producto;
};

const confirmacionDeAcceso = () => {
    let bucle = true;

    while (bucle) {
        const nombre = prompt("Ingresa tu nombre");
        const pass = prompt("Ingresa tu pass");

        if (nombre === Paula.nombre && pass === Paula.pass) {
            bucle = false;

            let ciclo = true;

            while (ciclo) {
                const nombre = prompt("Ingrese nombre del producto");
                const categoria = prompt("Ingrese categoria del producto");
                const precio = Number(prompt("Ingrese precio del producto"));

                listaProductos.push(crearProducto(nombre, categoria, precio));

                localStorage.setItem("lista", JSON.stringify(listaProductos));

                ciclo = confirm("Deseas agregar algo mas?");
            }

            bucle = false;
            break;
        } else {
            console.log("Usuario incorrecto");
        }
    }
};

confirmacionDeAcceso();
*/