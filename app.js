const items = document.getElementsById("items");

items.addEventListener("click", (e) => {
    addCarrito(e);
});

const addCarrito = (e) => {
    console.log(e.target);
    console.log(e.target.classList.contains("btn-dark"));
};

/*class User{
    constructor(nombre,pass){
        this.nombre = nombre;
        this.pass = pass;
    }
}





/*
class Personas {
    constructor(nombre, emprendimiento, años, rubro, lugar, localidad) {
        this.nombre = nombre;
        this.emprendimiento = emprendimiento;
        this.años = años;
        this.rubro = rubro;
        this.lugar = lugar;
        this.localidad = localidad;
    }

    hablar () {
        console.log(`Hola! Mi nombre es ${this.nombre}`)
    }

    emprendimiento2 () {
        console.log(`Mi emprendimiento es ${this.emprendimiento}`)
    }
}

let persona1 = new Personas("Paula", "Luna de Sofia", 5, "Textil", "Mi taller", "Zarate")
let persona2 = new Personas("Micaela", "Serendipia", 2, "Decoracion", "Casa", "Zarate")
persona1.hablar()
persona1.emprendimiento2()

console.log(JSON.stringify(persona2))

localStorage.setItem("Micaela", JSON.stringify(persona2))

let dato = JSON.parse(localStorage.getItem("Micaela"))
console.log(dato)

localStorage.setItem("persona", persona1)

console.log(localStorage.setItem("persona", persona1));

console.log(persona1)


const crearPersona = () => {
    
    let nombre = prompt("Como es tu nombre?");
    let emprendimiento = prompt("Nombre de tu emprendimiento?");
    let años = prompt("Cuantos años tiene funcionando?");
    let rubro = prompt("A que rubro pertenece tu emprendimiento?");
    let lugar = prompt("Lugar de trabajo?");
    let localidad = prompt("De donde sos?")
    
    const lunadeSofia = new Personas(nombre, emprendimiento, años, rubro, lugar, localidad);
    
    console.log(lunadeSofia);
    
}


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listaCarrito = [];

listaCarrito.push(new Producto("Llavero",300))
listaCarrito.push(new Producto("Barbijo",300))
listaCarrito.push(new Producto("Buzo",2300))
listaCarrito.push(new Producto("Remera",900))
listaCarrito.push(new Producto("Cartuchera",450))
listaCarrito.push(new Producto("Buzo con capucha",2600))



const agregarProductosALaLista = () => {
    let nombre = prompt("Nombre del producto");
    let precio = Number(prompt("Precio del producto"));

    let producto = new Producto(nombre,precio)
    listaCarrito.push(producto)
}

listaCarrito.sort((a,b) => {
    if(a.nombre > b.nombre){
        return 1
    }
    if(a.nombre < b.nombre){
        return -1
    }
    return 0
})

console.log(listaCarrito)




let almohadones = Number(prompt("Ingresa la cantidad de almohadones que necesitas"));
let llaveros = Number(prompt("Ingresa la cantidad de llaveros que necesitas"));
let barbijos = Number(prompt("Ingresa la cantidad de barbijos que necesitas"));
let buzos = Number(prompt("Ingresa la cantidad de buzos que necesitas"));
let remera = Number(prompt("Ingresa la cantidad de remeras que necesitas"));
let cartuchera = Number(prompt("Ingresa la cantidad de cartucheras que necesitas"));
let buzoCapucha = Number(prompt("Ingresa la cantidad de buzos con capucha que necesitas"));

function sumaAlmohadones(a) {
    
    let precioAlm = 600
    let precioAlm2 = 550
    
    if (almohadones <= 5){
        console.log(result = almohadones * precioAlm)
    }else{
        console.log(result = almohadones * precioAlm2)
    }
     
    console.log(`Por la cantidad de ${almohadones} almohadones, debe abonar un total de $ ${result}`)     
}

function sumaLlaveros(b) {
    let precioLlav = 300
    let precioLlav2 = 250
    if (llaveros <= 5){
        console.log(result2 = llaveros * precioLlav)
    }else{
        console.log(result2 = llaveros * precioLlav2)
    }
    console.log(`Por la cantidad de  ${llaveros} llaveros, debe abonar un total de $ ${result2}`)
}

function sumaBarbijos(c) {
    let precioBarb = 300
    let precioBarb2 = 250
    if (barbijos <= 5){
        console.log(result3 = barbijos * precioBarb)
    }else{
        console.log(result3 = barbijos * precioBarb2)
    }
    console.log(`Por la cantidad de  ${barbijos} barbijos, debe abonar un total de $ ${result3}`)
}

function sumaBuzos(d) {
    let precioBuzos = 2300
    let precioBuzos2 = 2150
    if (buzos <= 5){
        console.log(result4 = buzos * precioBuzos)
    }else{
        console.log(result4 = buzos * precioBuzos2)
    }
    console.log(`Por la cantidad de  ${buzos} buzos, debe abonar un total de $ ${result4}`)
}

function sumaRemeras(e) {
    let precioReme = 900
    let precioReme2 = 800
    if (remera <= 5){
        console.log(result5 = remera * precioReme)
    }else{
        console.log(result5 = remera * precioReme2)
    }
    console.log(`Por la cantidad de  ${remera} remeras, debe abonar un total de $ ${result5}`)
}

function sumaCartucheras(f) {
    let precioCart = 450
    let precioCart2 = 370
    if (cartuchera <= 5){
        console.log(result6 = cartuchera * precioCart)
    }else{
        console.log(result6 = cartuchera * precioCart2)
    }
    console.log(`Por la cantidad de  ${cartuchera} cartucheras, debe abonar un total de $ ${result6}`)
}

function sumaBuzoCapucha(g) {
    let precioBuzoCap = 450
    let precioBuzoCap2 = 370
    if (buzoCapucha <= 5){
        console.log(result7 = buzoCapucha * precioBuzoCap)
    }else{
        console.log(result7 = buzoCapucha * precioBuzoCap2)
    }
    console.log(`Por la cantidad de  ${buzoCapucha} buzos con capucha, debe abonar un total de $ ${result7}`)
}

sumaAlmohadones()
sumaLlaveros()
sumaBarbijos()
sumaBuzos()
sumaRemeras()
sumaCartucheras()
sumaBuzoCapucha()

function total(t) {
    console.log("Total a pagar=")
    console.log(result + result2 + result3 + result4 + result5 + result6 + result7)
    
}
total()


document.querySelector("#gracias").style.color = "white"

const p = document.createElement("p")
p.setAttribute("id","Pago")
p.textContent = "Los metodos de pago son efectivo, Mercado Pago o transferencia."
document.getElementById("gracias").appendChild(p)

console.log(p)

class mostrar{
    constructor({ productos, precios, cant}){
        this.productos = productos;
        this.precios = precios;
        this.cant = cant;
    }
}

const guardarDatos = () => {
    const producto = new mostrar(
        {
            productos : document.getElementById("Producto").value,
            precios : document.getElementById("precio").value,
            cant : document.getElementById("cantidad").value,
        }
    )
        return producto
}



let input1  = document.getElementById("botonEnviar");
let input2  = document.getElementById("botonCancelar");
input1.onkeyup   = () => {console.log("keyUp")};
input2.onkeydown = () => {console.log("keyDown")};
input1.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(input.value)
})

input2.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(input.value)
})


console.log($("h1"));
console.log($("h2"));
console.log($("h3"));

console.log("-----------------------------")


document.getElementById("botonEnviar").addEventListener("click", () => {
    console.log(document.getElementById("precio").value);
})

document.getElementById("botonEnviar").addEventListener("click", () => {
    console.log(document.getElementById("cantidad").value);
})


$(document).ready(function iniciando() {
    console.log("El DOM esta listo")
    
})

window.addEventListener('load', function() {
    console.log( 'Todos los elementos de la ventana están cargados' );
});



$("body").prepend('<p class="animacion" style="display: none" >No dudes en comunicarte!</p>');
$("body").prepend('<p class="animacion2" style="display: none" >Redes al final de la pagina ♥</p>');

$(".animacion").fadeIn("slow",function(){
    $(".animacion").fadeIn(1000);
    });

$(".animacion2").fadeIn("slow",function(){
     $(".animacion2").fadeIn(1000);
     });

$(".animacion").css({
    "font-family": "Roboto Mono, monospace",
    "color": "white"
})

$(".animacion2").css({
    "font-family": "Roboto Mono, monospace",
    "color": "white"
})

$("h1").css("color", "white")
        .slideUp(2000)
        .delay(2000)
        .slideDown(2000);

*/