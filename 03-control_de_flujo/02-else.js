let edad = 18

if (edad > 17) {
    console.log(edad);
    console.log('Eres mayor de edad');
}
else if ( edad > 13){
    console.log('Eres un adolescente, debes estar acompañado de un adulto');
}
else if (edad <= 0){
    console.log('Edad no válida');
    // Podemos agregar tantos else if como queramos
}
else {
    console.log('Eres menor de edad, no puedes entrar');
}
// else se ejecuta cuando la condición del if es false
// else if es una condición adicional que se evalúa si el if es false
