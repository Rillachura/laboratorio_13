function contarLetras(texto) {
    const letras = texto.toLowerCase();
    const conteo = {};
    for (let i=0; i<letras.length; i++) {
        const letra = letras[i];
        if (letra!=" ") {
            conteo[letra]=(conteo[letra] || 0)+1;
        }
    }
    return conteo;
}
console.log(contarLetras("banana")); 