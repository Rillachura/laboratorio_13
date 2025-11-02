function invertirMap(map) {
    const invertido = new Map();
    map.forEach((valor, clave) => {
        invertido.set(valor, clave);
    });
    return invertido;
}
let capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"]
]);
console.log(invertirMap(capitales));