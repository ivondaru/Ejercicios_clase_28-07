function recortar(cantidadLetras, palabras){
    const palabrasRecortadas = palabras.map(palabra => palabra.substring(0, cantidadLetras));
    return palabrasRecortadas;
}

//Ejemplo de uso:
console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']));
//['elef', 'dino', 'choc', 'avio', 'amer']

console.log(recortar(1, ['algoritmo', 'bug', 'compilador']));
//['a', 'b', 'c']