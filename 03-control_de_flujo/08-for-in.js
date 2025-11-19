let user = {
    id : 1,
    nombre : 'Juan',
    edad : 30,
};

for (let prop in user){
    console.log(prop, user[prop]);
}

// NO USAR FOR IN SI SE QUIERE ACCEDER A LOS VALORES DE UN ARRAY
// USA FOR OF
let animales = ['perro', 'gato', 'tortuga', 'loro'];
for ( let indice in animales){
    console.log(indice, animales[indice]);
}

