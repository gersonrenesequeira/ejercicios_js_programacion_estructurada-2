// Ejercicio 1: Agregar al final
// Recibe un arreglo y uno o más elementos. 
// Agrega esos elementos al FINAL del arreglo y devuelve el resultado.
let agregarFinal = (arreglo, ...elementos) => {
    arreglo.push(...elementos);
    return arreglo;
};
let numeros1 = [1, 2, 3, 4];
console.log(agregarFinal(numeros1, 5, 6)); // [1, 2, 3, 4, 5, 6]


// Ejercicio 2: Agregar al inicio
// Recibe un arreglo y varios elementos. 
// Inserta los elementos al PRINCIPIO y devuelve el arreglo actualizado.
let agregarInicio = (arreglo, ...elementos) => {
    arreglo.unshift(...elementos);
    return arreglo;
};
let numeros2 = [10, 20, 30];
console.log(agregarInicio(numeros2, 5, 7)); // [5, 7, 10, 20, 30]


// Ejercicio 3: Eliminar último elemento
// Quita el último elemento de un arreglo y lo devuelve.
let eliminarUltimo = (arreglo) => {
    let ultimo = arreglo.pop();
    return ultimo;
};
let numeros3 = [100, 200, 300];
console.log(eliminarUltimo(numeros3)); // 300


// Ejercicio 4: Eliminar primer elemento
// Elimina el primer elemento del arreglo y lo devuelve.
let eliminarPrimero = (arreglo) => {
    let primero = arreglo.shift();
    return primero;
};
let numeros4 = [8, 9, 10, 11];
console.log(eliminarPrimero(numeros4)); // 8


// Ejercicio 5: Buscar índice
// Busca un elemento dentro del arreglo. 
// Si lo encuentra devuelve su posición, si no devuelve -1.
let buscarIndice = (arreglo, elemento, inicio = 0) => {
    return arreglo.indexOf(elemento, inicio);
};
let numeros5 = [2, 4, 6, 8, 10];
console.log(buscarIndice(numeros5, 8)); // 3


// Ejercicio 6: Contar elementos
// Devuelve cuántos elementos tiene un arreglo.
let contarElementos = (arreglo) => {
    return arreglo.length;
};
let numeros6 = [1, 2, 3, 4, 5, 6];
console.log(contarElementos(numeros6)); // 6


// Ejercicio 7: Ordenar ascendente
// Ordena los números de un arreglo de MENOR a MAYOR.
let ordenarAsc = (arreglo) => {
    return arreglo.sort((a, b) => a - b);
};
let numeros7 = [30, 10, 50, 20, 40];
console.log(ordenarAsc(numeros7)); // [10, 20, 30, 40, 50]


// Ejercicio 8: Unir con separador
// Convierte los elementos de un arreglo en un string,
// usando un separador entre cada valor.
let unirConSeparador = (arreglo, separador) => {
    return arreglo.join(separador);
};
let numeros8 = [1, 2, 3, 4, 5];
console.log(unirConSeparador(numeros8, "-")); // "1-2-3-4-5"


// Ejercicio 9: Combinar arreglos y elementos
// Recibe varios arreglos y/o elementos y los une en un solo arreglo nuevo.
let combinar = (...elementos) => {
    return [].concat(...elementos);
};
let numeros9a = [1, 2];
let numeros9b = [3, 4];
console.log(combinar(numeros9a, numeros9b, 5, 6)); // [1, 2, 3, 4, 5, 6]


// Ejercicio 10: Recorrer con callback
// Recorre cada elemento del arreglo y ejecuta una función sobre él.
// No devuelve un nuevo arreglo, solo hace la acción indicada.
let recorrer = (arreglo, callback) => {
    arreglo.forEach(callback);
};
let numeros10 = [2, 4, 6];
recorrer(numeros10, n => console.log(n * 2)); 
// Imprime: 4, 8, 12


// Ejercicio 11: Mapear elementos
// Aplica una función a cada elemento del arreglo
// y devuelve un nuevo arreglo con los resultados.
let mapear = (arreglo, callback) => {
    return arreglo.map(callback);
};
let numeros11 = [1, 2, 3];
console.log(mapear(numeros11, n => n * 3)); // [3, 6, 9]


// Ejercicio 12: Filtrar elementos
// Recorre el arreglo y devuelve un NUEVO arreglo
// con los elementos que cumplen cierta condición.
let filtrar = (arreglo, callback) => {
    return arreglo.filter(callback);
};
let numeros12 = [5, 10, 15, 20];
console.log(filtrar(numeros12, n => n > 10)); // [15, 20]


// Ejercicio 13: Reducir elementos
// Recorre el arreglo y lo reduce a un único valor,
// aplicando la función acumuladora.
let reducir = (arreglo, callback, inicial = 0) => {
    return arreglo.reduce(callback, inicial);
};
let numeros13 = [1, 2, 3, 4];
console.log(reducir(numeros13, (a, b) => a + b, 0)); // 10
