function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil("Toyota", "Corolla", "Azul", 2022, "María Pérez");
let automovil2 = new Automovil("Ford", "Mustang", "Rojo", 2020, "Juan González");
let automovil3 = new Automovil("Honda", "Civic", "Plateado", 2019, "Ana Rodríguez");
let arregloAutomoviles = [automovil1, automovil2, automovil3];

Automovil.prototype.venderAutomovil = function(titular) {
    this.titular = titular;
}
Automovil.prototype.verAuto = function() {
    let informacion = this.marca + " " + this.modelo + " - " + this.anio + " - " + this.titular;
    return informacion;
}
Automovil.prototype.encender = function() {
    alert("El automóvil está en marcha");
}

function mostrarDatos() {
    let listaDatos = document.getElementById("listaDatos");
    
    for (let dato of arregloAutomoviles) {
        let itemList = document.createElement("li");
        itemList.innerText = dato.verAuto();
        listaDatos.appendChild(itemList);
    }

}