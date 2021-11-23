/*
let listaObjetos;
let imprimirDatos = document.getElementById("comprar")
console.log(imprimirDatos)

if(localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {
    imprimirDatos.innerHTML += `
    <article id="almohadones" class="col-lg-2 col-md-6 my-3">
					<img src="imagenespagina/story_1621018556061.jpg" alt="foto de Almohadon del cantante Harry Styles" class="w-100 rounded">
						<h6 class="text-center">${element.nombre}</h6>
						<div class="btn-group w-100">
						<button type="button" class="btn btn-dark">${element.precio}</button>
						<button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
							<span class="visually-hidden">Toggle Dropdown</span>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">0 a 5 unidades</a></li>
							<li><a class="dropdown-item" href="#">5 a 10 unidades</a></li>
							<li><a class="dropdown-item" href="#">Más de 10 unidades</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="#">${element.categoria}</a></li>
						</ul>
						</div>
	</article>
    
    `
});

const comprar = (dato) => {
    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("lista"))
    }
    carrito.push(dato)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}




    */
const productos = [
    { producto: "almohadones", id: "almohadones", precio: 700 },
    { producto: "remeras", id: "remeras", precio: 900 },
    { producto: "llaveros", id: "llaveros", precio: 300 },
    { producto: "barbijos", id: "barbijos", precio: 300 },
    { producto: "sets", id: "sets", precio: 1000 },
    { producto: "buzos", id: "buzos", precio: 2600 },
];

let productosCarrito = [];

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listaCarrito = [];

listaCarrito.push(new Producto("Llavero", 300));
listaCarrito.push(new Producto("Barbijo", 300));
listaCarrito.push(new Producto("Buzo", 2300));
listaCarrito.push(new Producto("Remera", 900));
listaCarrito.push(new Producto("Cartuchera", 450));
listaCarrito.push(new Producto("Almohadon", 700));

const agregarProductosALaLista = () => {
    let nombre = prompt("Nombre del producto");
    let precio = Number(prompt("Precio del producto"));

    let producto = new Producto(nombre, precio);
    listaCarrito.push(producto);
};

listaCarrito.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    }
    return 0;
});

console.log(listaCarrito);

let almohadones = Number(1);
let llaveros = Number(1);
let barbijos = Number(1);
let buzos = Number(1);
let remera = Number(1);
let sets = Number(1);

function sumaAlmohadones(a) {
    let precioAlm = 600;
    let precioAlm2 = 550;

    if (almohadones <= 5) {
        console.log((result = almohadones * precioAlm));
    } else {
        console.log((result = almohadones * precioAlm2));
    }

    console.log(
        `Por la cantidad de ${almohadones} almohadones, debe abonar un total de $ ${result}`
    );
}

function sumaLlaveros(b) {
    let precioLlav = 300;
    let precioLlav2 = 250;
    if (llaveros <= 5) {
        console.log((result2 = llaveros * precioLlav));
    } else {
        console.log((result2 = llaveros * precioLlav2));
    }
    console.log(
        `Por la cantidad de  ${llaveros} llaveros, debe abonar un total de $ ${result2}`
    );
}

function sumaBarbijos(c) {
    let precioBarb = 300;
    let precioBarb2 = 250;
    if (barbijos <= 5) {
        console.log((result3 = barbijos * precioBarb));
    } else {
        console.log((result3 = barbijos * precioBarb2));
    }
    console.log(
        `Por la cantidad de  ${barbijos} barbijos, debe abonar un total de $ ${result3}`
    );
}

function sumaBuzos(d) {
    let precioBuzos = 2300;
    let precioBuzos2 = 2150;
    if (buzos <= 5) {
        console.log((result4 = buzos * precioBuzos));
    } else {
        console.log((result4 = buzos * precioBuzos2));
    }
    console.log(
        `Por la cantidad de  ${buzos} buzos, debe abonar un total de $ ${result4}`
    );
}

function sumaRemeras(e) {
    //  e.preventDefault();

    let precioReme = 900;
    let precioReme2 = 800;
    if (remera <= 5) {
        console.log((result5 = remera * precioReme));
    } else {
        console.log((result5 = remera * precioReme2));
    }
    console.log(
        `Por la cantidad de  ${remera} remeras, debe abonar un total de $ ${result5}`
    );
}

function sumaSets(f) {
    let precioSets = 450;
    let precioSets2 = 370;
    if (sets <= 5) {
        console.log((result6 = sets * precioSets));
    } else {
        console.log((result6 = sets * precioSets2));
    }
    console.log(
        `Por la cantidad de  ${sets} cartucheras, debe abonar un total de $ ${result6}`
    );
}

sumaAlmohadones();
sumaLlaveros();
sumaBarbijos();
sumaBuzos();
sumaRemeras();
sumaSets();

/*function total(t) {
    console.log("Total a pagar=");
    console.log(
        result + result2 + result3 + result4 + result5 + result6 + result7
    );
}
total(); */

let boton = $(".btnComprar");
boton.on("click", agregarProducto);
let carrito = $("#carrito");

function agregarProducto() {
    console.log(this.id);
    for (const a of productos) {
        if (this.id == a.id) {
            const pC = {
                prod: a.producto,
                prec: a.precio,
            };
            productosCarrito = [...productosCarrito, pC];
        }
    }
    borrarCarrito();
    for (const b of productosCarrito) {
        const carro = document.createElement("tr");
        carro.innerHTML = `<th></th><th>${b.prod}</th> <th>${b.prec}</th><th></th>`;
        carrito.append(carro);
    }

    mostrarTotal();
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