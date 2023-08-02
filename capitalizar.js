function capitalizarPalabra (frase){
    //Dividir la frase en palabras usando un espacio como separador
    let palabras = frase.split(' ')

    for(let i=0; i<palabras.length; i++){
        palabras[i]= palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }

    //Unir palabras capitalizadas para que queden en un sólo string

    let fraseCapitalizada = palabras.join(' ')
    return fraseCapitalizada
}

let resultado = capitalizarPalabra("Esto es una palabra capitalizada");
console.log(resultado)
