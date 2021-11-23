let productosCarrito = [];
let listaCarrito = [];
let boton = $(".btnComprar");
boton.on("click", agregarProducto);
let btnVaciar = $("#botonVaciar");
btnVaciar.on("click", borrarCarrito);
let carrito = $("#carrito");



const productos = [
    { producto: "almohadones", id: "almohadones", precio: 700, cantidad: 1},
    { producto: "remeras", id: "remeras", precio: 900, cantidad: 1},
    { producto: "llaveros", id: "llaveros", precio: 300, cantidad: 1 },
    { producto: "barbijos", id: "barbijos", precio: 300, cantidad: 1 },
    { producto: "sets", id: "sets", precio: 1000, cantidad: 1 },
    { producto: "buzos", id: "buzos", precio: 2600, cantidad: 1 },
];


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


document.addEventListener('DOMContentLoaded', () =>{
    
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
}
    
)
document.querySelector("#gracias").style.color = "white";