function saludar(){
    console.log("Hola, bienvenido a JavaScript!");
}

saludar(); // Llamada a la función para que se ejecute

function suma(){
    return 2 + 2; 
    //return detiene la ejecución de la función y devuelve el valor
}

let resultado = suma(); // Almacena el valor devuelto por la función en una variable
console.log(suma());