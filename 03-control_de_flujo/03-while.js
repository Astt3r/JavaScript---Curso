// cuales son los númmeros pares

let i = 0;
while (i < 10) {
    if(i % 2 == 0){
        // por que i%2 significa i dividido por 2 y el resto es 0
        console.log( i + ' es un número par');
    }
    i++;
}

console.log('Terminé el ciclo while');