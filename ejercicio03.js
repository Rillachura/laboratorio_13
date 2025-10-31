function doblarNumeros(numeros) {
    let nuevoArreglo = [];
    for (let i=0; i<numeros.length; i++){
        nuevoArreglo.push(numeros[i]*2);
    }
    return nuevoArreglo;
}
let arreglo = [2, 15, 13];
console.log(doblarNumeros(arreglo));