const recortarPalabras = (cantidadLetras, palabras)=>{
    let recorte = palabras.map(palabras=>{
        return palabras.slice(0, cantidadLetras)
    })
    console.log(recorte)
}

recortarPalabras(2,["hola", "adios"])