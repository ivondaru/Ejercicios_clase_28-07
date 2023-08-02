//arrow function de suma
const sumar = (a,b) => a+b;
console.log(sumar(5,3))

//número par
const esPar = num => num % 2 === 0
console.log(esPar(10))

//elevar al cuadrado un array de números
const numeros = [1,2,3,4]
const cuadrados = numeros.map(num => num**2);

console.log(cuadrados)

//números mayores de 6 en un array
const numerosMayores = [2,5,7,8,6,9,10]
const mayoresQue6 = numerosMayores.filter(number => number >=6)

console.log(mayoresQue6)









