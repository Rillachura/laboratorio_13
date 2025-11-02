function tieneDuplicados(arr) {
    return new Set(arr).size!=arr.length;
}
console.log(tieneDuplicados([1, 2, 3, 4]));
console.log(tieneDuplicados([1, 2, 2, 4, 1]));