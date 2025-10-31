function filtrarYTransformar(arr) {
    let positivos = [];
    let suma = 0;
    let mensaje ="";
    for (let i=0; i<arr.length; i++){
        if(arr[i]>0){
            positivos.push(arr[i]);
        }
    }
    for (let j=0; j<positivos.length; j++){
        suma+=(positivos[j]**2);
    }
    for (let i=0; i<positivos.length; i++){
        if (i!=positivos.length-1){
            mensaje+=`${positivos[i]}² + `;
        }
        else{
            mensaje+=`${positivos[i]}² = `
        }
    }
    return `${mensaje}` + suma;
}
let arreglo = [2, -3, 4, -1, 5];
console.log(filtrarYTransformar(arreglo))