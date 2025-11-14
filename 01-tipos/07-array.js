let animales = ['Perro', 'Gato', 'Elefante', 'Tigre']; // Declaración de un array

console.log(animales);
console.log(animales[3]);
animales[2] = 'León'; // Modificación de un elemento del array
console.log(animales);

animales[10] = 'Jirafa'; // Agregar un elemento en una posición específica
console.log(animales[10]); // Acceder al nuevo elemento
console.log(typeof animales); // Muestra que es un objeto (los arrays son objetos en JavaScript)
console.log(animales.length); // Muestra la longitud del array