function calcularPromedioPeso(listaPacientes) {
  let suma = 0;

  for (let paciente of listaPacientes) {
    suma += paciente.peso;
  }

  return suma / listaPacientes.length;
}

let cantidad = parseInt(prompt("¿Cuántos pacientes atendiste hoy?"));

let pacientes = [];

for (let i = 0; i < cantidad; i++) {

  let nombre = prompt(`Nombre del paciente ${i + 1}:`);
  let edad = parseInt(prompt(`Edad de ${nombre}:`));
  let peso = parseFloat(prompt(`Peso de ${nombre} (kg):`));
  let sexo = prompt(`Sexo de ${nombre} (M/F):`);

  let paciente = {
    nombre: nombre,
    edad: edad,
    peso: peso,
    sexo: sexo.toUpperCase(),
  };

  pacientes.push(paciente);
}

let promedio = calcularPromedioPeso(pacientes);

pacientes.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log("Listado de pacientes:", pacientes);
console.log("Promedio de peso:", promedio.toFixed(2), "kg");

let contenedor = document.getElementById("resultados");

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

tabla += `</table>`;

contenedor.innerHTML = tabla;
