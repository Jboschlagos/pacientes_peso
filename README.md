┌───────────────────────────────┐
│  1. DEFINICIÓN DE LA FUNCIÓN 
└───────────────────────────────┘
           │
           ▼
 El programa guarda la función
 "calcularPromedioPeso" en memoria.
 No se ejecuta todavía.
 Es solo una herramienta lista para usar.


┌───────────────────────────────┐
│     2. VARIABLES PRINCIPALES
└───────────────────────────────┘
           │
           ▼
Se crean:
- "cantidad"
- "pacientes"

Aún no hay lógica importante, solo inicialización.


┌───────────────────────────────┐
│   3. RECOLECCIÓN DE DATOS
└───────────────────────────────┘
           │
           ▼
Se ejecuta el bucle:
for (i = 0; i < cantidad; i++)

En cada vuelta:
- Se piden los datos del paciente.
- Se crea un objeto paciente.
- Se guarda en la lista "pacientes".


┌───────────────────────────────┐
│     4. PROCESAMIENTO
└───────────────────────────────┘
           │
           ▼
Aquí ocurre lo importante:

A) Se llama a la función:
   calcularPromedioPeso(pacientes)

   (Ahora sí se ejecuta la función)

B) Se ordenan los pacientes.


┌───────────────────────────────┐
│     5. SALIDA DE DATOS
└───────────────────────────────┘
           │
           ▼
Se muestra:
- El promedio en consola
- La tabla completa en el HTML

FIN DEL PROGRAMA
