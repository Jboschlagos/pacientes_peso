/********************************************
 * 1. FUNCIONES
 ********************************************/

// Calcula el promedio de peso de todos los pacientes
function calcularPromedioPeso(listaPacientes) {
  let suma = 0;

  // Recorre la lista sumando los pesos
  for (let paciente of listaPacientes) {
    suma += paciente.peso;
  }

  // Devuelve la suma total dividida por el número de pacientes
  return suma / listaPacientes.length;
}

/********************************************
 * 2. VARIABLES PRINCIPALES
 ********************************************/

// Pregunta cuántos pacientes fueron atendidos hoy
let cantidad = parseInt(prompt("¿Cuántos pacientes atendiste hoy?"));

// Lista donde se guardará cada paciente como un objeto
let pacientes = [];

/********************************************
 * 3. RECOLECCIÓN DE DATOS (Entrada)
 ********************************************/

for (let i = 0; i < cantidad; i++) {
  // Solicitar datos uno por uno
  let nombre = prompt(`Nombre del paciente ${i + 1}:`);
  let edad = parseInt(prompt(`Edad de ${nombre}:`));
  let peso = parseFloat(prompt(`Peso de ${nombre} (kg):`));
  let sexo = prompt(`Sexo de ${nombre} (M/F):`);

  // Construir el objeto del paciente
  let paciente = {
    nombre: nombre,
    edad: edad,
    peso: peso,
    sexo: sexo.toUpperCase(), // Normalización
  };

  // Agregar el paciente a la lista principal
  pacientes.push(paciente);
}

/********************************************
 * 4. PROCESAMIENTO DE DATOS
 ********************************************/

// Calcular el promedio de peso
let promedio = calcularPromedioPeso(pacientes);

// Ordenar los pacientes alfabéticamente por nombre
pacientes.sort((a, b) => a.nombre.localeCompare(b.nombre));

/********************************************
 * 5. SALIDA DE DATOS (Consola + HTML)
 ********************************************/

// Mostrar en consola
console.log("Listado de pacientes:", pacientes);
console.log("Promedio de peso:", promedio.toFixed(2), "kg");

// Tomar el contenedor del HTML
let contenedor = document.getElementById("resultados");

// Construir tabla HTML
let tabla = `
    <h2>Resultados</h2>
    <p>Promedio de peso: <strong>${promedio.toFixed(2)} kg</strong></p>

    <h3>Listado de pacientes</h3>
    <table border="1" cellpadding="8">
        <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Peso (kg)</th>
            <th>Sexo</th>
        </tr>
`;

// Agregar filas por cada paciente
for (let p of pacientes) {
  tabla += `
        <tr>
            <td>${p.nombre}</td>
            <td>${p.edad}</td>
            <td>${p.peso}</td>
            <td>${p.sexo}</td>
        </tr>
    `;
}

// Cerrar la tabla
tabla += `</table>`;

// Insertar en el HTML
contenedor.innerHTML = tabla;
