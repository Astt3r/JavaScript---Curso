// Objetos en JavaScript
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",   //PAR LLAVE VALOR
    anime: "Demon Slayer",
    edad: 16,
};
console.log(personaje); // Muestra el objeto con sus propiedades
console.log(personaje.nombre); // Accede a la propiedad 'nombre' del objeto
console.log(personaje['anime']); // Accede a la propiedad 'anime' del objeto

personaje.edad = 17;
personaje['edad'] = 18;

//diferencia entre . y []
//. se usa cuando conocemos el nombre de la propiedad
//[] se usa cuando no conocemos el nombre de la propiedad o es dinámico

delete personaje.anime; // Elimina la propiedad 'anime' del objeto
console.log(personaje);