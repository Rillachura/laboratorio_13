const productos = new Map([
    ["pan", 2.5],
    ["leche", 4.0],
    ["huevos", 6.0]
]);
const listaCompra = ["pan", "leche", "huevos", "pan"];
let total = 0;
for (let i=0; i<listaCompra.length; i++) {
    let item = listaCompra[i];
    total += productos.get(item);
}
console.log("Total:", total);