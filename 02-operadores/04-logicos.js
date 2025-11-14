// AND, OR, NOT

//AND (&&)
//esto devuelve true si ambos operandos son true

let mayor = false;
let suscrito = true;

// console.log(true && true);
// console.log(false && true);
console.log('operador AND', mayor && suscrito);

//OR (||)
//esto devuelve true si al menos uno de los operandos es true
console.log('operador OR', mayor || suscrito);

//NOT (!)
//esto invierte el valor del operando
console.log('operador NOT', !mayor);
let SoloCatalogoInfantil = !mayor;
//si no es mayor de edad, solo puede ver el catálogo infantil