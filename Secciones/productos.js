class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let productosCarrito = [];

const productos = [
    { producto: "almohadones", id: "almohadones", precio: 700, cantidad: 1},
    { producto: "remeras", id: "remeras", precio: 900, cantidad: 1},
    { producto: "llaveros", id: "llaveros", precio: 300, cantidad: 1 },
    { producto: "barbijos", id: "barbijos", precio: 300, cantidad: 1 },
    { producto: "sets", id: "sets", precio: 1000, cantidad: 1 },
    { producto: "buzos", id: "buzos", precio: 2600, cantidad: 1 },
];



let listaCarrito = [];

listaCarrito.push(new Producto("Llavero", 300));
listaCarrito.push(new Producto("Barbijo", 300));
listaCarrito.push(new Producto("Buzo", 2300));
listaCarrito.push(new Producto("Remera", 900));
listaCarrito.push(new Producto("Cartuchera", 450));
listaCarrito.push(new Producto("Almohadon", 700));


console.log(listaCarrito);


let boton = $(".btnComprar");
boton.on("click", agregarProducto);
let btnVaciar = $("#botonVaciar");
btnVaciar.on("click", borrarCarrito);
let carrito = $("#carrito");

function agregarProducto() {
    console.log(this.id);
    for (const a of productos) {
        if (this.id == a.id) {
            const pC = {
                prod: a.producto,
                prec: a.precio,
                cant: a.cantidad
            };
            productosCarrito = [...productosCarrito, pC];
        }
    }

    borrarCarrito();
    for (const b of productosCarrito) {
        const carro = document.createElement("tr");
        carro.innerHTML = `<th>${b.cant}</th><th>${b.prod}</th> <th>${b.prec}</th><th></th>`;
        carrito.append(carro);
        
    }
    
    mostrarTotal();
    localStorage.setItem('carrito', JSON.stringify(productosCarrito))
}


function borrarCarrito() {
    $(carrito).find("th").remove();
}

function mostrarTotal() {
    let total = 0;
    for (const b of productosCarrito) {
        total = b.prec + total;
    }
    const c = document.createElement("tr");
    c.innerHTML = `<th>Total:</th><th></th> <th></th><th>$ ${total}</th>`;
    carrito.append(c);
}

document.querySelector("#gracias").style.color = "white";

$("body").prepend('<p class="animacion" style="display: none" >No dudes en comunicarte!</p>');
$("body").prepend('<p class="animacion2" style="display: none" >Redes al final de la pagina ♥</p>');
$("p").fadeIn();

$(".animacion2").fadeIn("fast",function(){
    $(".animacion2").fadeIn(800);
    });

$(".animacion").css({
   "font-family": "Roboto Mono, monospace",
   "color": "white"
})

$(".animacion2").css({
   "font-family": "Roboto Mono, monospace",
   "color": "white"
})