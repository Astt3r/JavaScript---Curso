//OPCIONAL PERO INTERESANTE
//Operadores bitwise (a nivel de bits)
//trabajan con la representacion binaria de los numeros

//decimal; 0,1,2,3,4,5,6
//binario: 0,1
// bit: 0 1
// byte: 8 bits
// byte: 00000000 = 0
// byte: 00000001 = 1
// byte: 00000010 = 2
// byte: 00000011 = 3
// byte: 00000100 = 4
// byte: 00000101 = 5
// byte: 00000110 = 6

//el operador OR(|) compara bit a bit
//si alguno de los bits es 1, el resultado es 1
//si ambos bits son 0, el resultado es 0

console.log(1 | 3); // 00000011
console.log(1 | 4); // 00000101
console.log(3 | 5); // 00000111

//el operador AND(&) compara bit a bit
//si ambos bits son 1, el resultado es 1
//si alguno de los bits es 0, el resultado es 0

console.log(1 & 3); // 00000001 = 1
console.log(1 & 4); // 00000000 = 0
console.log(3 & 5); // 00000001 = 1

//es raro usar bitwise en JS, pero puede ser util para permisos
//por ejemplo, si tenemos 3 permisos: leer, escribir, ejecutar
//leer = 1 (00000001)
//escribir = 2 (00000010)
//ejecutar = 4 (00000100)

let permisos = 0; //00000000

//dar permiso de leer y escribir
permisos = permisos | 1; //00000001
permisos = permisos | 2; //00000011