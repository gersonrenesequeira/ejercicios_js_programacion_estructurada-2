// Crear una cola
let cola = [];

// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola); // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift(), "ha sido eliminada."); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift(), "ha sido eliminada."); // "Tarea 2"
console.log(cola); // ["Tarea 3"]
console.log(cola.shift(), "ha sido eliminada."); // "Tarea 3"
console.log(cola); // []
console.log(cola.shift(), "ha sido eliminada."); // undefined (cola vacía)
console.log(cola); // []





// Arreglo para la cola
let colaTareas = [];

// Acción para agregar al final 
const agregarAlFinal = (tarea) => {
    colaTareas.push(tarea);
    console.log(`Tarea agregada: ${tarea}. Cola actual: [${colaTareas}]`);
};

// Acción para remover del inicio 
const removerDelInicio = () => {
    if (colaTareas.length === 0) {
        console.log("Cola vacía.");
        return null;
    }
    const tareaProcesada = colaTareas.shift();
    console.log(`Tarea procesada: ${tareaProcesada}. Cola actual: [${colaTareas}]`);
    return tareaProcesada;
};

// Simulación del proceso
agregarAlFinal("Tarea A"); // Cola: ["Tarea A"]
agregarAlFinal("Tarea B"); // Cola: ["Tarea A", "Tarea B"]
agregarAlFinal("Tarea C"); // Cola: ["Tarea A", "Tarea B", "Tarea C"]

removerDelInicio(); // Procesa "Tarea A", Cola: ["Tarea B", "Tarea C"]
removerDelInicio(); // Procesa "Tarea B", Cola: ["Tarea C"]
removerDelInicio(); // Procesa "Tarea C", Cola: []
removerDelInicio(); // Cola vacía







// Historial de Navegación Web

// Arreglo para la pila
let historialPaginas = [];

// Acción para agregar página (como si fuese la flecha hacia adelante o nueva visita)
const agregarUltimaPagina = (url) => {
    historialPaginas.push(url);
    console.log(`Página visitada: ${url}. Historial: [${historialPaginas}]`);
};

// Acción para retroceder página (como si fuese la flecha hacia atrás)
const retrocederPagina = () => {
    if (historialPaginas.length === 0) {
        console.log("Historial vacío.");
        return null;
    }
    const pagina = historialPaginas.pop();
    console.log(`Retrocediendo a: ${pagina}. Historial: [${historialPaginas}]`);
    return pagina;
};

// Simulación del proceso
agregarUltimaPagina("inicio.com");     // Historial: ["inicio.com"]
agregarUltimaPagina("articulos.com");  // Historial: ["inicio.com", "articulos.com"]
agregarUltimaPagina("detalles.com");   // Historial: ["inicio.com", "articulos.com", "detalles.com"]

retrocederPagina(); // Retrocede a "detalles.com". Historial: ["inicio.com", "articulos.com"]
retrocederPagina(); // Retrocede a "articulos.com". Historial: ["inicio.com"]
