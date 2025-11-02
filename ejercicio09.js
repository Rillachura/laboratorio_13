function contarPalabras(texto) {
    const contador = new Map();
    texto = texto.toLowerCase();
    let palabra = "";
    for (let i = 0; i <= texto.length; i++) {
        const char = texto[i];
        if (char == " " || i == texto.length) {
            if (palabra !== "") {
                contador.set(palabra, (contador.get(palabra) || 0) + 1);
                palabra = "";
            }
        } else {
            palabra += char;
        }
    }
    return contador;
}

console.log(contarPalabras("sol luna sol sol estrella luna"));