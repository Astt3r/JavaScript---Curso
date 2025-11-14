/* LET = Variable de bloque que puede ser reasignada */
/* CONST = Variable de bloque que no puede ser reasignada */


let nombre = 'Hola Mundo'; 
nombre = "Alejandro Robles";

/* Se cambió el valor de la variable nombre, por que al ser una variable let, se puede reasignar su valor. */
/* No debería hacerse esto con variables que se declaran como const, ya que su valor no puede ser reasignado. */

const apellido = "Robles";
// apellido = "Gonzalez"; // Esto generaría un error, ya que no se puede reasignar una constante.

console.log(nombre);