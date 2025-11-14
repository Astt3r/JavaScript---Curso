function suma(a, b) { //parámetros: son variables que se definen en la declaración de la función
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3); //argumentos: son valores que se pasan a una función cuando se llama
console.log("El resultado de la suma es: " + resultado);    



console.log(typeof suma);