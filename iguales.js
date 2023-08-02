function sonIguales(a,b){
    //Verificar que ambos tengan la misma longitud
    if(a.length !== b.length){
        return false
    }
    //Comparar cada elemento en la misma posición
    for (let i=0; i < a.length; i++){
        if(a[i] !== b[i]){  
        }
    }
    return true
}

console.log(sonIguales([1,4,3,4], [1,2,3,4])) //true