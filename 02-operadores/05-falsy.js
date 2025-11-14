//short-circuit evaluation

// Falso
// false
// 0
// ''
// null
// undefined
// NaN

//se conocen como Falsy values

let nombre = 'Alejandro';
let username = nombre || 'anonimo'; //si nombre es falso, asigna 'anonimo'
console.log(username);

function fn1(){
    console.log('funcion 1 ejecutada');
    return false;
}
function fn2(){
    console.log('funcion 2 ejecutada');
    return true;
}

let x = fn1() && fn2(); //si la primera es true, ejecuta la segunda
