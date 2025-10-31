function reordenarPalabras(oracion) {
    let palabras = [];
    let inicio = 0;
    for (let i=0; i<oracion.length; i++){
        if (oracion[i] == " " || i == oracion.length){
            let palabra = oracion.substring(inicio, i);
            palabras.push(palabra.toUpperCase());
            inicio=i+1;
        }
    }
    return palabras;
}
console.log(reordenarPalabras("sol luna estrella planeta"));